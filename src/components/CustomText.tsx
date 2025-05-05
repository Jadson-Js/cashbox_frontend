import React from "react";
import { Text } from "react-native";
import tw from "twrnc";
import { ICustomText } from "../types/ICustomText";

export function CustomText({
  content,
  size = "M",
  className = "",
}: ICustomText) {
  const sizes = {
    LOGO: "uppercase text-4xl font-bold",
    XXL: "text-7xl font-bold",
    XL: "text-4xl font-bold",
    L: "text-2xl",
    LB: "text-2xl font-bold",
    M: "text-lg",
    MB: "text-lg font-bold",
    S: "text-base",
    SB: "text-base font-bold",
  };

  // Combine size with any additional classes
  const textClasses = `${sizes[size]} ${className}`.trim();

  return <Text style={tw`${textClasses}`}>{content}</Text>;
}
