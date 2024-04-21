import { Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native-web';

export const platform_specific_styles = StyleSheet.create(
  {
    safe_area_view: {
      flex: 1,
      backgroundColor: 'red',
      color: 'white',
      fontWeight: 'bold',
      paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
      // alignItems: 'center',
      // justifyContent: 'center'
    }
  }
)