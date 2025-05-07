import { colors } from "@/src/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { style } from "twrnc";

export function AddTransactionFixed() {
  const componentStyle = style(`bg-[${colors.primary}]`);

  return (
    <View
      className="p-2 rounded-full flex justify-center items-center absolute bottom-12 right-12"
      style={componentStyle}
    >
      <MaterialCommunityIcons name="plus" size={40} color="white" />
    </View>
  );
}
