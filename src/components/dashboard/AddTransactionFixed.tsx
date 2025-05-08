import { colors } from "@/src/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { style } from "twrnc";

export function AddTransactionFixed() {
  const componentStyle = style(
    ` bg-[${colors.primary}] p-2 rounded-full flex justify-center items-center absolute bottom-12 right-12`,
  );

  const handlePress = () => {
    router.navigate("/(tabs)/home/TransactionScreen");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={componentStyle}>
      <MaterialCommunityIcons name="plus" size={40} color="white" />
    </TouchableOpacity>
  );
}
