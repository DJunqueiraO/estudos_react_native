import { 
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native';
import { styles } from './AppStyles';
import { 
  Buttons, 
  Touchables,
  PlatformSpecific,
  DimensionsTutorial,
  OrientationChanges,
  FlexBox,
  Alighnment,
  Wrap,
  FlexGrow,
  Positioning,
  WelcomePage,
  Navigation,
  ImageViewPage
} from './pages/Pages';
import { SessionStorage, useStateAsObject } from './utils/Utils';

export default function App() {

  const pages = [
    <Navigation/>,
    <ImageViewPage/>,
    <WelcomePage/>,
    <Touchables/>,
    <Buttons/>,
    <PlatformSpecific/>,
    <DimensionsTutorial/>,
    <OrientationChanges/>,
    <FlexBox/>,
    <Alighnment/>,
    <Wrap/>,
    <Positioning/>,
    <FlexGrow/>
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
              <Pressable
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
              </Pressable>
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

