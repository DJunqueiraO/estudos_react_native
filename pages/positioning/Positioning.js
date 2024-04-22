import {
  SafeAreaView,
  StatusBar,
  View
} from "react-native"
import { styles } from "./PositioningStyles";

export function Positioning() {
  return (
    <SafeAreaView style={styles.safe_area_view}>
      <View
        style={styles.first_view}>
      </View>
      <View
        style={styles.second_view}>
      </View>
      <View
        style={styles.third_view}>
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}