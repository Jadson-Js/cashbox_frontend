import { colors } from "@/src/constants/colors";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomText } from "../ui/CustomText";

export function DefineIcon() {
  const colorsView = Object.entries(colors).map(([name, hex]) => {
    const styleComponent = style(`w-10 h-10 rounded-full bg-[${hex}]`);

    return <View style={styleComponent} key={name}></View>;
  });

  return (
    <View>
      <CustomText content="Icon" size="L" className="mb-4 text-slate-600" />

      <View className="flex flex-row gap-4">{colorsView}</View>
    </View>
  );
}
