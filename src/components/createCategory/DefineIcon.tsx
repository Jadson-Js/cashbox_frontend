import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { CustomText } from "../ui/CustomText";

export function DefineIcon() {
  const icons: (keyof typeof MaterialCommunityIcons.glyphMap)[] = [
    "account-outline",
    "car",
    "shopping",
    "food",
    "store",
    "car",
    "shopping",
    "food",
  ];

  const iconsView = icons.map((name, index) => {
    return <MaterialCommunityIcons key={index} name={name} size={50} />;
  });

  return (
    <View>
      <CustomText content="Icon" size="L" className="mb-4 text-slate-600" />

      <View className="flex flex-row gap-4">{iconsView}</View>
    </View>
  );
}
