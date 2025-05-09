import { Header } from "@/src/components/selectCategory/Header";
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
      </ScrollView>
    </View>
  );
}
