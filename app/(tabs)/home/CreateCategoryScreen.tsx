import ButtonsCategory from "@/src/components/createCategory/ButtonsCategory";
import { CategorySelector } from "@/src/components/createCategory/CategorySelector";
import { ColorSelector } from "@/src/components/createCategory/ColorSelector";
import { IconSelector } from "@/src/components/createCategory/IconSelector";

import { Header } from "@/src/components/Header";
import { colors } from "@/src/constants/colors";
import { useCategories } from "@/src/context/CategoryContext";
import { useCategory } from "@/src/hooks/useCategory";
import { ROUTES } from "@/src/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGlobalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

export default function CreateCategoryScreen() {
  const router = useRouter();
  const params = useGlobalSearchParams();
  const { error, createCategory } = useCategory();
  const [title, setTitle] = React.useState<string>("");
  const [iconName, setIconName] =
    React.useState<keyof typeof MaterialCommunityIcons.glyphMap>("shopping");
  const [iconColor, setIconColor] = React.useState<
    (typeof colors)[keyof typeof colors]
  >(colors.primary);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const { categories } = useCategories();

  React.useEffect(() => {
    if (!params.category_id) return;

    const foundCategory = categories.find(
      (item: any) => item.id === params.category_id,
    );
    if (!foundCategory) return;

    setIsEditMode(true);

    setTitle(foundCategory.title);
    setIconName(
      foundCategory.icon_name as keyof typeof MaterialCommunityIcons.glyphMap,
    );
    setIconColor(
      Object.values(colors).includes(foundCategory.icon_color as any)
        ? (foundCategory.icon_color as (typeof colors)[keyof typeof colors])
        : colors.primary,
    );
  }, [params, categories.length]);

  const handleCreateCategory = async () => {
    const category = await createCategory({
      title,
      icon_name: iconName,
      icon_color: iconColor,
    });

    router.push({
      pathname: ROUTES.TRANSACTION,
      params: {
        category_id: category.id,
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

      <ButtonsCategory
        category_id={
          typeof params.category_id === "string" ? params.category_id : ""
        }
        title={title}
        iconName={iconName}
        iconColor={iconColor}
        isEditMode={isEditMode}
      />
    </View>
  );
}
