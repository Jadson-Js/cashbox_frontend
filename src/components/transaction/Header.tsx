import { IComponent } from "@/src/types/IComponent";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";

import { CustomText } from "../ui/CustomText";

export function Header({ className }: IComponent) {
  const componentStyle = style(className);

  const styleArrow = style("text-slate-400 w-8 h-8");

  return (
    <View
      style={componentStyle}
      className="flex flex-row justify-between items-center"
    >
      <MaterialIcons name="close" size={30} style={styleArrow} />
      <CustomText content="New Transaction" size="MB" />
      <CustomText content="Save" size="XS" />
    </View>
  );
}
