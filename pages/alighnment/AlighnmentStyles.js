import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
  {
    safe_area_view: {
      flex: 1,
      backgroundColor: '#111',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    first_view: {
      backgroundColor: 'gold',
      width: 100,
      height: 300,
      alignSelf: 'flex-start'
    },
    second_view: {
      backgroundColor: 'tomato',
      width: 100,
      height: 200
    },
    third_view: {
      backgroundColor: 'red',
      width: 100,
      height: 100
    }
  }
)