import { StyleSheet } from 'react-native';

export const welcome_page_styles = StyleSheet.create(
  {
    image_background: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'blue',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    login_button: {
      backgroundColor: '#fc5c65'
    },
    logo_image: {
      width: 100,
      height: 100
    },
    advice_text: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Segoe UI'
    },
    logo_view: {
      position: 'absolute',
      top: 20,
      alignItems: 'center'
    }
  }
)