import { CategoryList } from "@/src/components/selectCategory/CategoryList";
import { Header } from "@/src/components/selectCategory/Header";
import { CustomButton } from "@/src/components/ui/CustomButton";
import { navigate } from "expo-router/build/global-state/routing";
import { ScrollView, View } from "react-native";

export default function SelectCategoryScreen() {
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

        <CategoryList />
      </ScrollView>

      <CustomButton
        content="Create new"
        onPress={() => navigate("/(tabs)/home/CreateCategoryScreen")}
        className="absolute bottom-8 left-0 right-0 flex items-center mx-8"
      />
    </View>
  );
}
