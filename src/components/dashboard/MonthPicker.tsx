import { IComponent } from "@/src/types/IComponent";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomText } from "../ui/CustomText";

export function MonthPicker({ className }: IComponent) {
  const componentStyle = style(className);

  const styleArrow = style("text-slate-400 w-8 h-8");

  return (
    <View
      className="bg-white border rounded-full px-8 py-2  border-slate-200 flex flex-row justify-between items-center"
      style={[
        {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        componentStyle,
      ]}
    >
      <MaterialIcons name="keyboard-arrow-left" size={30} style={styleArrow} />
      <CustomText content="Janeiro" size="XS" />
      <MaterialIcons name="keyboard-arrow-right" size={30} style={styleArrow} />
    </View>
  );
}
