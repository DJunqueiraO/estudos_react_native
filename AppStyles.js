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
    navigation_bar_text: {
      backgroundColor: '#222',
      padding: 10,
      color: 'white',
      fontFamily: 'Segoe UI',
      fontWeight: 'bold'
    },
    page_view: {
      flexGrow: 1
    }
  }
)