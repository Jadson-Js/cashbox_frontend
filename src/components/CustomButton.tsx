import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { ICustomButton } from "../types/ICustomButton";

export function CustomButton({ content, className = "" }: ICustomButton) {
  const defaultClasses = "bg-blue-500 p-4 rounded";
  const inputClasses = `${defaultClasses} ${className}`.trim();

  return (
    <TouchableOpacity style={tw`${inputClasses}`}>
      <Text>{content}</Text>
    </TouchableOpacity>
  );
}
