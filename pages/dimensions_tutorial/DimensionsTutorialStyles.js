import { Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native-web';

export const dimensions_tutorial_styles = StyleSheet.create(
  {
    safe_area_view: {
      flex: 1,
      backgroundColor: 'green'
    },
    view: {
      backgroundColor: 'dodgerblue',
      width: '50vw',
      height: '50vw'
    }
  }
)