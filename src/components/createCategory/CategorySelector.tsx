import { colors } from "@/src/constants/colors";
import { shadow } from "@/src/constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import tw from "twrnc";
import { CustomInputText } from "../ui/CustomInputText";

export interface ICategorySelector {
  className?: string;
  title: string;
  setTitle: (value: string) => void;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: (typeof colors)[keyof typeof colors];
}

export function CategorySelector({
  title,
  setTitle,
  iconName,
  iconColor,
  className,
}: ICategorySelector) {
  return (
    <View style={tw`text-center ${className || ""}`}>
      <MaterialCommunityIcons
        name={iconName}
        size={125}
        style={tw`text-[${iconColor}] text-center mb-6`}
      />

      <View
        style={[shadow, tw`p-2 rounded-3xl border border-slate-200 bg-white`]}
      >
        <CustomInputText
          placeholder="Digite your category title here"
          className="text-slate-600"
          value={title}
          setValue={setTitle}
        />
      </View>
    </View>
  );
}
