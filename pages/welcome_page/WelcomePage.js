import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View
} from "react-native"
import { welcome_page_styles } from "./WelcomePageStyles";
import { BaseButton } from "../../components/Components";

export function WelcomePage() {
  return (
    <ImageBackground 
      source={require('../../assets/28.jpg')}
      style={welcome_page_styles.image_background}>
      <View
        style={welcome_page_styles.logo_view}>
        <Image 
          style={welcome_page_styles.logo_image}
          source={require('../../assets/madruguinha.png')} />
        <Text
          style={welcome_page_styles.advice_text}>
          A Vingan&ccedil;a nunca &eacute; 
          plena, mata a alma e envenena.
        </Text>
      </View>
      <BaseButton
        style={welcome_page_styles.login_button}>
        login
      </BaseButton>
      <BaseButton>
        register
      </BaseButton>
    </ImageBackground>
  );
}