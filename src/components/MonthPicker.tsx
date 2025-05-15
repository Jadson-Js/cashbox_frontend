import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import tw, { style } from "twrnc";
import { shadow } from "../constants/styles";
import { CustomText } from "./ui/CustomText";

export function MonthPicker({ className }: IComponent) {
  const componentStyle = style(className);
  const [months, setMonths] = React.useState<string[]>([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [currentMonth, setCurrentMonth] = React.useState<number>(2);

  const handleChangeMonth = (next: number) => {
    if (
      (next === -1 && currentMonth === 0) ||
      (next === 1 && currentMonth === 11)
    )
      return;

    setCurrentMonth((currentMonth + next) % 12);
  };

  return (
    <View
      className="bg-white border rounded-full px-8 py-2  border-slate-200 flex flex-row justify-between items-center"
      style={[shadow, componentStyle]}
    >
      <MaterialCommunityIcons
        name="chevron-left"
        size={30}
        style={tw`text-slate-400 w-8 h-8`}
        onPress={() => handleChangeMonth(-1)}
      />

      <CustomText content={months[currentMonth]} size="XS" />

      <MaterialCommunityIcons
        name="chevron-right"
        size={30}
        style={tw`text-slate-400 w-8 h-8`}
        onPress={() => handleChangeMonth(1)}
      />
    </View>
  );
}
