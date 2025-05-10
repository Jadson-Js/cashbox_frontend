import { colors } from "@/src/constants/colors";
import React from "react";
import { FlatList, View } from "react-native";
import { style } from "twrnc";
import { CategoryItem, ICategoryItem } from "./CategoryItem";

export interface ICategoryList {
  className?: string;
}

export function CategoryList({ className }: ICategoryList) {
  const [categories, setCategories] = React.useState<ICategoryItem[]>([
    { iconName: "food", iconColor: colors.primary, title: "Food" },
    { iconName: "car", iconColor: colors.red, title: "Car" },
    { iconName: "shopping", iconColor: colors.green, title: "Shopping" },
    { iconName: "food", iconColor: colors.primary, title: "Food" },
    { iconName: "car", iconColor: colors.red, title: "Car" },
    { iconName: "shopping", iconColor: colors.green, title: "Shopping" },
    { iconName: "food", iconColor: colors.primary, title: "Food" },
    { iconName: "car", iconColor: colors.red, title: "Car" },
    { iconName: "shopping", iconColor: colors.green, title: "Shopping" },
  ]);

  const componentStyle = style(className);

  return (
    <View style={componentStyle}>
      <FlatList
        data={categories}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CategoryItem
            iconName={item.iconName}
            iconColor={item.iconColor}
            title={item.title}
          />
        )}
        contentContainerStyle={style("gap-4")}
      />
    </View>
  );
}
