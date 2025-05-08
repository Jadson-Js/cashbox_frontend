import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";
import { shadow } from "../../constants/styles";
import { CustomText } from "../ui/CustomText";

export function MonthPicker({ className }: IComponent) {
  const componentStyle = style(className);

  const styleArrow = style("text-slate-400 w-8 h-8");

  return (
    <View
      className="bg-white border rounded-full px-8 py-2  border-slate-200 flex flex-row justify-between items-center"
      style={[shadow, componentStyle]}
    >
      <MaterialCommunityIcons
        name="chevron-left"
        size={30}
        style={styleArrow}
      />
      <CustomText content="Janeiro" size="XS" />
      <MaterialCommunityIcons
        name="chevron-right"
        size={30}
        style={styleArrow}
      />
    </View>
  );
}
