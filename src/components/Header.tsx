import { IComponent } from "@/src/types/IComponent";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "twrnc";

import { useRouter } from "expo-router";
import { ROUTES } from "../routes";
import { CustomText } from "./ui/CustomText";

export function Header({ className }: IComponent) {
  const router = useRouter();
  const componentStyle = style(
    `flex flex-row justify-between items-center`,
    className,
  );
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

      <CustomText
        content="New Transaction"
        size="MB"
        className="text-slate-600"
      />
      <CustomText content="Save" size="MB" />
    </View>
  );
}
