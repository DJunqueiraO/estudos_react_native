import { 
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './AppStyles';
import { 
  Buttons, 
  Touchables,
  PlatformSpecific,
  DimensionsTutorial,
  OrientationChanges
 } from './pages/Pages';
import { SessionStorage, useStateAsObject } from './utils/Utils';

export default function App() {

  const pages = [
    <Touchables/>,
    <Buttons/>,
    <PlatformSpecific/>,
    <DimensionsTutorial/>,
    <OrientationChanges/>
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
              <TouchableOpacity>
                <View 
                  style={styles.navigation_bar_button}
                  children={$0.type.name}
                  color={'green'}
                  onClick={
                    () => {
                      page_index_session_storage.set(index)
                      selected_page_index.set(index)
                    }
                  }/>
              </TouchableOpacity>
            )
          )
        }
      </ScrollView>
      <View
        style={styles.page_div}>
        {pages[selected_page_index.get(0)]}
      </View>
    </SafeAreaView>
  );
}

