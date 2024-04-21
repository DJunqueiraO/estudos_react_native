import { 
  Dimensions,
  SafeAreaView,
  View
} from "react-native";
import { 
  dimensions_tutorial_styles 
} from "./DimensionsTutorialStyles";

export function DimensionsTutorial() {

  console.log(Dimensions.get('screen'))

  return (
    <SafeAreaView style={
        dimensions_tutorial_styles.safe_area_view
      }>
      <View style={dimensions_tutorial_styles.view} />
    </SafeAreaView>
  );
}