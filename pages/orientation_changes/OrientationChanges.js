import {
  SafeAreaView,
  StatusBar
} from "react-native"
import { 
  orientation_changes_styles 
} from "./OrientationChangesStyles";

export function OrientationChanges() {
  return (
    <SafeAreaView style={
        orientation_changes_styles.safe_area_view
      }>
    </SafeAreaView>
  );
}