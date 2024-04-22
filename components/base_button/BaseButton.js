import { Pressable } from "react-native"
import { base_button_styles } from "./BaseButtonStyles";

export function BaseButton(
  {
    children = <></>,
    style = {}
  }
) {
  return (
    <Pressable 
      style={{...base_button_styles.pressable, ...style}}>
      {children}
    </Pressable>
  );
}