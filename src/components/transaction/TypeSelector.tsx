import { colors } from "@/src/constants/colors";
import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";
import { shadow } from "../../constants/styles";
import { CustomText } from "../ui/CustomText";

export function TypeSelector({ className }: IComponent) {
  const componentStyle = style(className);
  const selector = style(`bg-[${colors.primary}]`);

  const styleIcon = style("text-white w-8 h-8");
  const x = style("text-slate-400 w-8 h-8");

  return (
    <View
      className="bg-white border rounded-full  border-slate-200 flex flex-row  items-center"
      style={[shadow, componentStyle]}
    >
      <View
        className="flex-1 flex flex-row gap-2 rounded-full px-4 py-2"
        style={selector}
      >
        <MaterialCommunityIcons name="cash-plus" size={30} style={styleIcon} />
        <CustomText content="Income" size="M" className="text-white" />
      </View>

      <View className="flex-1 flex flex-row gap-2 rounded-full px-4 py-2">
        <MaterialCommunityIcons name="cash-plus" size={30} style={x} />
        <CustomText content="Income" size="M" />
      </View>
    </View>
  );
}
