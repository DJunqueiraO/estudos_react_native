import { 
  NavigationContainer 
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  StatusBar
} from "react-native"

export function NavigationController(
  {
    headerShown = false,
    screens = []
  }
) {

  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {
        screens && screens.length > 0 && (
          <stack.Navigator 
            screenOptions={{headerShown}}>
            {
              screens.map(
                screen => (
                  <stack.Screen 
                    key={screen.name}
                    name={screen.name} 
                    component={screen}/>
                )
              )
            }
          </stack.Navigator>
        )
      }
    </NavigationContainer>
  );
}