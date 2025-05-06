import React from "react";
import { Text } from "react-native";
import { style } from "twrnc";
import { ICustomText } from "../../types/form/ICustomText";

export function CustomText({ content, size = "M", className }: ICustomText) {
  const sizes = {
    XXL: "text-7xl font-bold",
    XL: "text-4xl font-bold",
    L: "text-2xl",
    LB: "text-2xl font-bold",
    M: "text-lg",
    MB: "text-lg font-bold",
    S: "text-base",
    SB: "text-base font-bold",
    XS: "text-s font-bold",
  };

  const containerStyle = style("text-slate-400", sizes[size], className);

  return <Text style={containerStyle}>{content}</Text>;
}
