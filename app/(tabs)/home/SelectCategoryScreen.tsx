import { Header } from "@/src/components/Header";
import { CategoryList } from "@/src/components/selectCategory/CategoryList";
import { CustomButton } from "@/src/components/ui/CustomButton";
import { ROUTES } from "@/src/routes";
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
        <Header
          title={"Categories"}
          action={"+ New"}
          onPressAction={() => navigate(ROUTES.CREATE_CATEGORY)}
          className="mb-8"
        />

        <CategoryList />
      </ScrollView>

      <CustomButton
        content="Create new"
        onPress={() => navigate(ROUTES.CREATE_CATEGORY)}
        className="absolute bottom-8 left-0 right-0 flex items-center mx-8"
      />
    </View>
  );
}
