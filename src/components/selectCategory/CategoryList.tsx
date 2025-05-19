import { colors } from "@/src/constants/colors";
import { useCategories } from "@/src/context/CategoryContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, View } from "react-native";
import { style } from "twrnc";
import { CategoryItem } from "./CategoryItem";

export interface ICategoryList {
  className?: string;
}

export function CategoryList({ className }: ICategoryList) {
  const { categories } = useCategories();

  const componentStyle = style(className);

  return (
    <View style={componentStyle}>
      <FlatList
        data={categories}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CategoryItem
            id={item.id}
            iconName={
              item.icon_name as keyof typeof MaterialCommunityIcons.glyphMap
            }
            iconColor={
              Object.values(colors).includes(item.icon_color as any)
                ? (item.icon_color as (typeof colors)[keyof typeof colors])
                : colors.red
            }
            title={item.title}
          />
        )}
        contentContainerStyle={style("gap-4 p-1")}
      />
    </View>
  );
}
