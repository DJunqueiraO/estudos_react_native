import { 
  Alert,
  Button, 
  SafeAreaView, 
  StatusBar
} from "react-native";
import { platform_specific_styles } from "./PlatformSpecificStyles";

export function PlatformSpecific(
  {
    
  }
) {
  return (
    <SafeAreaView style={platform_specific_styles.safe_area_view}>
      <Button 
        color={'orange'}
        onPress={
          () => Alert.prompt(
            'LERO',
            'lero lero',
            text => console.log(text)
          )
        }
        title="Click me"/>
    </SafeAreaView>
  );
}