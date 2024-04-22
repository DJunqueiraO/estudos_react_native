import { 
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './AppStyles';
import { 
  Buttons, 
  Touchables,
  PlatformSpecific,
  DimensionsTutorial,
  OrientationChanges,
  FlexBox
} from './pages/Pages';
import { SessionStorage, useStateAsObject } from './utils/Utils';

export default function App() {

  const pages = [
    <Touchables/>,
    <Buttons/>,
    <PlatformSpecific/>,
    <DimensionsTutorial/>,
    <OrientationChanges/>,
    <FlexBox/>
  ]

  const page_index_session_storage = new SessionStorage('page_index')
  const selected_page_index = useStateAsObject()

  page_index_session_storage.get(
    $0 => {
      selected_page_index.set($0)
    }
  )

  return (
    <SafeAreaView 
      style={styles.safe_area_view}>
      <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.navigation_bar}>
        {
          pages.map(
            ($0, index) => (
              <TouchableOpacity
                key={$0.type.name}>
                <Text 
                  style={styles.navigation_bar_text}
                  color={'green'}
                  onClick={
                    () => {
                      page_index_session_storage.set(index)
                      selected_page_index.set(index)
                    }
                  }>
                  {$0.type.name}
                </Text>
              </TouchableOpacity>
            )
          )
        }
      </ScrollView>
      <View
        style={styles.page_view}>
        {pages[selected_page_index.get(0)]}
      </View>
    </SafeAreaView>
  );
}

