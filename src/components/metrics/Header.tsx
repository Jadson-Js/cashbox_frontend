import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "twrnc";

import { useRouter } from "expo-router";
import { ROUTES } from "../../routes";
import { MonthPicker } from "../MonthPicker";

export interface IHeader {
  className?: string;
  selectMonth: number;
  setSelectMonth: (value: number) => void;
}

export function Header({ selectMonth, setSelectMonth, className }: IHeader) {
  const router = useRouter();
  const componentStyle = style(`gap-4 flex flex-row items-center `, className);
  const styleArrow = style("text-slate-400 w-8 h-8");

  const handleExit = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate(ROUTES.HOME);
    }
  };

  return (
    <View style={componentStyle}>
      <TouchableOpacity onPress={handleExit}>
        <MaterialIcons name="close" size={30} style={styleArrow} />
      </TouchableOpacity>

      <MonthPicker
        className="flex-1"
        selectMonth={selectMonth}
        setSelectMonth={setSelectMonth}
      />
    </View>
  );
}
