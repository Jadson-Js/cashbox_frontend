import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { shadow } from "../constants/styles";
import { CustomText } from "./ui/CustomText";

export interface IMonthPicker {
  selectMonth: number;
  setSelectMonth: (month: number) => void;
  className?: string;
}

export function MonthPicker({
  selectMonth,
  setSelectMonth,
  className,
}: IMonthPicker) {
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

  const handleChangeMonth = (next: number) => {
    if (
      (next === -1 && selectMonth === 0) ||
      (next === 1 && selectMonth === 11)
    )
      return;

    setSelectMonth((selectMonth + next) % 12);
  };

  return (
    <View
      className="bg-white border rounded-full px-8 py-2  border-slate-200 flex flex-row justify-between items-center"
      style={[shadow, tw`${className || ""}`]}
    >
      <MaterialCommunityIcons
        name="chevron-left"
        size={30}
        style={tw`text-slate-400 w-8 h-8`}
        onPress={() => handleChangeMonth(-1)}
      />

      <CustomText content={months[selectMonth]} size="XS" />

      <MaterialCommunityIcons
        name="chevron-right"
        size={30}
        style={tw`text-slate-400 w-8 h-8`}
        onPress={() => handleChangeMonth(1)}
      />
    </View>
  );
}
