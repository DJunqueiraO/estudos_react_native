import { useDeviceOrientation } from '@react-native-community/hooks';
import { StyleSheet } from 'react-native';

export const orientation_changes_styles = StyleSheet.create(
  {
    safe_area_view: {
      height: '100%',
      backgroundColor: 'orange'
    },
    view_portrait: {
      height: '30%',
      backgroundColor: 'khaki',
      width: '100%'
    },
    view_landscape: {
      height: '100%',
      backgroundColor: 'khaki',
      width: '30%'
    }
  }
)