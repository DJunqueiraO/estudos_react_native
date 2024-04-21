import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
  {
    safe_area_view: {
      flex: 1,
      backgroundColor: 'dodgerblue',
    },
    navigation_bar: {
      overflow: 'auto',
      display: 'flex',
      flexGrow: 0,
      width: '100%',
      backgroundColor: 'red'
    },
    navigation_bar_button: {
      backgroundColor: 'green',
      padding: 5,
      color: 'white',
      fontFamily: 'monospace'
    },
    page_div: {
      flexGrow: 1
    }
  }
)