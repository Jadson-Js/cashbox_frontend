import { CategorySelector } from "@/src/components/createCategory/CategorySelector";
import { ColorSelector } from "@/src/components/createCategory/ColorSelector";
import { IconSelector } from "@/src/components/createCategory/IconSelector";

import { Header } from "@/src/components/Header";
import { colors } from "@/src/constants/colors";
import { useCategory } from "@/src/hooks/useCategory";
import { ROUTES } from "@/src/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

export default function CreateCategoryScreen() {
  const router = useRouter();
  const { error, createCategory } = useCategory();
  const [title, setTitle] = React.useState<string>("Shopping");
  const [iconName, setIconName] =
    React.useState<keyof typeof MaterialCommunityIcons.glyphMap>("shopping");
  const [iconColor, setIconColor] = React.useState<
    (typeof colors)[keyof typeof colors]
  >(colors.primary);

  const handleCreateCategory = async () => {
    const category = await createCategory({
      title,
      icon_name: iconName,
      icon_color: iconColor,
    });

    router.push({
      pathname: ROUTES.TRANSACTION,
      params: {
        id: category.id,
      },
    });
  };

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
          title={"New Category"}
          action={"Save"}
          onPressAction={handleCreateCategory}
          className="mb-8"
        />

        <View className="flex flex-col gap-8">
          <CategorySelector
            title={title}
            setTitle={setTitle}
            iconName={iconName}
            iconColor={iconColor}
          />
          <ColorSelector setIconColor={(value) => setIconColor(value)} />
          <IconSelector setIconName={(value) => setIconName(value)} />
        </View>
      </ScrollView>
    </View>
  );
}
