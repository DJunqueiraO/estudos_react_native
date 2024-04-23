import { AScreen } from "./a_screen/AScreen";
import { BScreen } from "./b_screen/BScreen";
import { NavigationController } from "../../utils/Utils";

export function Navigation() {

  return (
    <NavigationController
      screens={
        [
          AScreen, 
          BScreen
        ]
      }/>
  );
}