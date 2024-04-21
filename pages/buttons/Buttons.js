import { 
  Alert,
  Button, 
  SafeAreaView, 
  StatusBar 
} from "react-native";
import { buttons_styles } from "./ButtonsStyles";

export function Buttons(
  {
    
  }
) {
  return (
    <SafeAreaView style={buttons_styles.safe_area_view}>
      <Button 
        color={'orange'}
        // onPress={() => console.log('lero lero')}
        // onPress={() => alert('lero lero')}
        // onPress={
        //   () => Alert.alert(
        //     'LERO', 
        //     'lero lero',
        //     [
        //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //       {text: 'OK', onPress: () => console.log('OK Pressed')}
        //     ]
        //   )
        // }
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