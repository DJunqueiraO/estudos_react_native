import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text
} from "react-native"
import { AScreen } from "../a_screen/AScreen";
import { b_screen_styles } from "./BScreenStyles";

export function BScreen(
  {
    navigation
  }
) {
  return (
    <SafeAreaView style={b_screen_styles.safe_area_view}>
      <Pressable
        style={b_screen_styles.pressable}
        onPress={() => navigation.navigate(AScreen.name)}>
        <Text style={b_screen_styles.text}>B</Text>
      </Pressable>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}