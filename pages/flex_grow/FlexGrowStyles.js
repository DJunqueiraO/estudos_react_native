import { StyleSheet } from 'react-native';

const basic_size = 75

export const styles = StyleSheet.create(
  {
    safe_area_view: {
      flex: 1,
      backgroundColor: '#f23',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    first_view: {
      backgroundColor: 'gold',
      // flexBasis: basic_size,
      // flex: 1,
      width: basic_size*4,
      flex: -1,
      height: basic_size
    },
    second_view: {
      backgroundColor: 'tomato',
      width: basic_size,
      height: basic_size
    },
    third_view: {
      backgroundColor: 'aquamarine',
      width: basic_size,
      height: basic_size
    }
  }
)