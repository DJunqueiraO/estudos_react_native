import {
  SafeAreaView,
  StatusBar,
  View
} from "react-native"
import { styles } from "./FlexBoxStyles";

export function FlexBox() {
  return (
    <SafeAreaView style={styles.flex_box}>
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