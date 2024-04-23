import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text
} from "react-native"
import { BScreen } from "../b_screen/BScreen";
import { a_screen_styles } from "./AScreenStyles";

export function AScreen(
  {
    navigation
  }
) {
  return (
    <SafeAreaView style={a_screen_styles.safe_area_view}>
      <Pressable
        style={a_screen_styles.pressable}
        onPress={() => navigation.navigate(BScreen.name)}>
        <Text style={a_screen_styles.text}>A</Text>
      </Pressable>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}