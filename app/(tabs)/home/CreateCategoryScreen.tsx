import { DefineCategory } from "@/src/components/createCategory/CategorySelector";
import { DefineColor } from "@/src/components/createCategory/ColorSelector";
import { DefineIcon } from "@/src/components/createCategory/IconSelector";

import { Header } from "@/src/components/Header";
import { ScrollView, View } from "react-native";

export default function CreateCategoryScreen() {
  return (
    <View className="h-full bg-white relative">
      <ScrollView
        contentContainerStyle={{
          padding: 32,
          paddingBottom: 120,
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Header className="mb-8" />

        <View className="flex flex-col gap-8">
          <DefineCategory />
          <DefineColor />
          <DefineIcon />
        </View>
      </ScrollView>
    </View>
  );
}
