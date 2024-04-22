import {
  SafeAreaView,
  StatusBar,
  View
} from "react-native"
import { 
  orientation_changes_styles 
} from "./OrientationChangesStyles";
import { 
  useDeviceOrientation 
} from "@react-native-community/hooks";


export function OrientationChanges() {

  const is_landscape = useDeviceOrientation() === 'landscape'

  return (
    <SafeAreaView 
      style={
        orientation_changes_styles.safe_area_view
      }>
      <View
        style={
          is_landscape? 
          orientation_changes_styles.view_landscape 
          : 
          orientation_changes_styles.view_portrait 
        }>

      </View>
    </SafeAreaView>
  );
}