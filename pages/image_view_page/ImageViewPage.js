import { Image, Pressable, View } from "react-native";
import { image_view_styles } from "./ImageViewPageStyles";

export function ImageViewPage() {
  return (
    <View
      style={image_view_styles.view}>
      <Pressable
        style={image_view_styles.close_pressable}>
      </Pressable>
      <Pressable
        style={image_view_styles.delete_pressable}>
      </Pressable>
      <Image 
        style={image_view_styles.image}
        resizeMode="contain"
        source={require('../../assets/chair.jpeg')} />
    </View>
  );
}