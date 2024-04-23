import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/Utils';

export const a_screen_styles = StyleSheet.create(
  {
    safe_area_view: {
      flex: 1,
      backgroundColor: colors.background
    },
    text: {
      color: colors.foreground,
      userSelect: 'none'
    },
    pressable: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
)