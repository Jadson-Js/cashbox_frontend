import { colors } from "@/src/constants/colors";
import React from "react";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
import { CustomText } from "./CustomText";

export interface ICustomButton {
  className?: string;
  content: string;
  onPress: () => void;
  isOutline?: boolean;
}

export function CustomButton({
  content,
  onPress,
  className,
  isOutline = false,
}: ICustomButton) {
  return (
    <TouchableOpacity
      className={`px-12 py-2 rounded-3xl self-stretch border-`}
      style={tw`${className || ""} bg-[${
        !isOutline ? colors.primary : "#FFF"
      }] border border-2 border-${
        !isOutline ? `[${colors.primary}]` : `slate-400`
      }`}
      onPress={onPress}
    >
      <CustomText
        content={content}
        size="SB"
        className={`uppercase ${
          !isOutline ? `text-white` : `text-slate-600`
        } text-center`}
      />
    </TouchableOpacity>
  );
}
