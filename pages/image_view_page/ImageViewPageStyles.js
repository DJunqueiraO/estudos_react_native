import { StyleSheet } from 'react-native';
import { colors } from '../../utils/Utils';

export const image_view_styles = StyleSheet.create(
  {
    image: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
    view: {
      backgroundColor: colors.black,
      flex: 1,
    },
    close_pressable: {
      width: 50,
      height: 50,
      backgroundColor: colors.primary,
      position: 'absolute',
      top: 10,
      left: 10
    },
    delete_pressable: {
      width: 50,
      height: 50,
      backgroundColor: colors.secondary,
      position: 'absolute',
      top: 10,
      right: 10
    }
  }
)