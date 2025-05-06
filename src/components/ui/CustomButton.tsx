import React from "react";
import { TouchableOpacity } from "react-native";
import { style } from "twrnc";
import { ICustomButton } from "../../types/ui/ICustomButton";
import { CustomText } from "./CustomText";

export function CustomButton({ content, onPress, className }: ICustomButton) {
  const containerStyle = style(className);

  return (
    <TouchableOpacity
      className="bg-[#007BB8] px-12 py-2 rounded-3xl self-stretch"
      style={containerStyle}
      onPress={onPress}
    >
      <CustomText
        content={content}
        size="SB"
        className="uppercase text-white text-center"
      />
    </TouchableOpacity>
  );
}
