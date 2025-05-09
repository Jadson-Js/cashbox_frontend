import { colors } from "@/src/constants/colors";
import { shadow } from "@/src/constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomInputText } from "../ui/CustomInputText";

export function DefineCategory() {
  const iconStyle = style(`text-[${colors.green}] text-center mb-6`);
  const inputStyle = style(
    ` p-2 rounded-3xl border border-slate-200 bg-white `,
  );

  return (
    <View className="text-center">
      <MaterialCommunityIcons name="shopping" size={125} style={iconStyle} />;
      <View style={[shadow, inputStyle]}>
        <CustomInputText
          placeholder="Digite your category title here"
          className="text-slate-600"
        />
      </View>
    </View>
  );
}
