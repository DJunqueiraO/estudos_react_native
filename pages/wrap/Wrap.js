import {
  SafeAreaView,
  StatusBar,
  View
} from "react-native"
import { styles } from "./WrapStyles";

export function Wrap() {
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
      <View
        style={styles.fourth_view}>
      </View>
      <View
        style={styles.fifth_view}>
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}