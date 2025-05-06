import React from "react";
import { TouchableOpacity } from "react-native";
import { style } from "twrnc";
import { ICustomButton } from "../../types/form/ICustomButton";
import { CustomText } from "./CustomText";

export function CustomButton({ content, className }: ICustomButton) {
  const containerStyle = style(
    "bg-[#F35288] px-12 py-2 rounded self-stretch",
    className,
  );

  return (
    <TouchableOpacity style={containerStyle}>
      <CustomText
        content={content}
        size="SB"
        className="uppercase text-white text-center"
      />
    </TouchableOpacity>
  );
}
