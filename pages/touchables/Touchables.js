import { 
  Image, 
  SafeAreaView, 
  StatusBar, 
  Text, 
  TouchableHighlight, 
  TouchableNativeFeedback, 
  TouchableWithoutFeedback, 
  View
} from "react-native";
import { TouchableOpacity } from "react-native-web";
import { touchables_styles } from "./TouchablesStyles";

export function Touchables(
  {
    
  }
) {
  const textOnPressHandler = () => console.log('lero lero')
  return (
    <SafeAreaView style={touchables_styles.safe_area_view}>
      <Text 
        onPress={textOnPressHandler}
        numberOfLines={1}>
        Hello World - A {new Array(100).fill('really').join(' ')} long text
      </Text>
      <div style={{display: 'flex'}}>
        <TouchableWithoutFeedback
          onPress={() => console.log('hello world')}>
          <Image
            fadeDuration={1000}
            blurRadius={10}
            style={touchables_styles.image}
            source={{uri: "https://picsum.photos/200/300"}}/>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => console.log('hello opac world')}>
          <Image
            style={touchables_styles.image}
            source={{uri: "https://picsum.photos/200/300"}}/>
        </TouchableOpacity>
      </div>
      <div style={{display: 'flex'}}>
        <TouchableHighlight
          onPress={() => console.log('hello high world')}>
          <Image
            style={touchables_styles.image}
            source={{uri: "https://picsum.photos/200/300"}}/>
        </TouchableHighlight>
        <TouchableNativeFeedback
          onPress={() => console.log('hello high world')}>
          <View 
            style={{
              width: 200, 
              height: 70, 
              backgroundColor: 'red'
            }}>

          </View>
        </TouchableNativeFeedback>
      </div>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}