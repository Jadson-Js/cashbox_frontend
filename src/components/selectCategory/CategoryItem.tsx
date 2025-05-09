import { colors } from "@/src/constants/colors";
import { shadow } from "@/src/constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import tw from "twrnc";
import { CustomText } from "../ui/CustomText";

export interface ICategoryItem {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: (typeof colors)[keyof typeof colors];
  title: string;
}

export function CategoryItem({ iconName, iconColor, title }: ICategoryItem) {
  const categoryStyle = tw`flex flex-row items-center gap-4 p-4 rounded-3xl border border-slate-200 bg-white`;
  const bgIconColor = tw`bg-[${iconColor + 40}]`;
  const fillIconColo = tw`text-[${iconColor}]`;

  return (
    <View style={[shadow, categoryStyle]}>
      <View style={bgIconColor} className="rounded-3xl p-2">
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          style={fillIconColo}
        />
      </View>

      <CustomText content={title} size="S" className="text-slate-600" />
    </View>
  );
}
