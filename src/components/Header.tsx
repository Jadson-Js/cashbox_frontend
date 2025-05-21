import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import { useRouter } from "expo-router";
import { ROUTES } from "../routes";
import { CustomText } from "./ui/CustomText";

export interface IHeader {
  className?: string;
  title: string;
  action: string;
  onPressAction: () => void;
}

export function Header({ title, action, onPressAction, className }: IHeader) {
  const router = useRouter();

  const handleExit = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate(ROUTES.HOME);
    }
  };

  return (
    <View style={tw`flex-row justify-between items-center ${className || ""}`}>
      <TouchableOpacity onPress={handleExit}>
        <MaterialIcons
          name="close"
          size={30}
          style={tw`text-slate-400 w-8 h-8`}
        />
      </TouchableOpacity>

      <CustomText content={title} size="MB" className="text-slate-600" />

      <TouchableOpacity onPress={onPressAction}>
        <CustomText content={action} size="MB" />
      </TouchableOpacity>
    </View>
  );
}
