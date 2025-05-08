import { CustomText } from "@/src/components/ui/CustomText";
import { View } from "react-native";

export default function CategoryScreen() {
  return (
    <>
      <View className="h-full p-8 bg-white">
        <CustomText content="Category" size="MB" className="text-slate-600" />
      </View>
    </>
  );
}
