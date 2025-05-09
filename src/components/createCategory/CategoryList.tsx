import { colors } from "@/src/constants/colors";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";
import { CategoryItem, ICategoryItem } from "./CategoryItem";

export interface ICategoryList {
  className?: string;
}

export function CategoryList({ className }: ICategoryList) {
  const [categorys, setCategorys] = React.useState<ICategoryItem[]>([
    {
      iconName: "food",
      iconColor: colors.primary,
      title: "Food",
    },
    {
      iconName: "car",
      iconColor: colors.red,
      title: "Car",
    },
    {
      iconName: "shopping",
      iconColor: colors.green,
      title: "Shopping",
    },
    {
      iconName: "food",
      iconColor: colors.primary,
      title: "Food",
    },
    {
      iconName: "car",
      iconColor: colors.red,
      title: "Car",
    },
    {
      iconName: "shopping",
      iconColor: colors.green,
      title: "Shopping",
    },
    {
      iconName: "food",
      iconColor: colors.primary,
      title: "Food",
    },
    {
      iconName: "car",
      iconColor: colors.red,
      title: "Car",
    },
    {
      iconName: "shopping",
      iconColor: colors.green,
      title: "Shopping",
    },
  ]);

  const componentStyle = style(className);

  const categoryItens = () => {
    return categorys.map((category, index) => {
      return (
        <CategoryItem
          key={index}
          iconName={category.iconName}
          iconColor={category.iconColor}
          title={category.title}
        />
      );
    });
  };

  return (
    <View style={componentStyle}>
      <View className="flex gap-4">{categoryItens()}</View>
    </View>
  );
}
