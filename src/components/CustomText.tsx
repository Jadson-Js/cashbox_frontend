import React from "react";
import { Text } from "react-native";
import tw from "twrnc";
import { ICustomText } from "../types/ICustomText";

export default function CustomText({
  content,
  size = "M",
  className = "",
}: ICustomText) {
  const sizes = {
    L: "text-4xl",
    M: "text-2xl",
    S: "text-xl",
  };

  // Combine size with any additional classes
  const textClasses = `${sizes[size]} ${className}`.trim();

  return <Text style={tw`${textClasses}`}>{content}</Text>;
}
