import { StyleSheet } from 'react-native';

const basic_size = 75

export const styles = StyleSheet.create(
  {
    safe_area_view: {
      flex: 1,
      backgroundColor: '#0fa',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    first_view: {
      backgroundColor: 'gold',
      width: basic_size,
      height: basic_size
    },
    second_view: {
      backgroundColor: 'tomato',
      width: basic_size,
      height: basic_size,
      top: 20,
      left: 20,
      position: 'absolute'
    },
    third_view: {
      backgroundColor: 'aquamarine',
      width: basic_size,
      height: basic_size
    }
  }
)