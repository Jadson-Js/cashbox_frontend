import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";
import { ICustomInputText } from "../types/ICustomInputText";

export function CustomInputText({
  placeholder,
  className = "",
}: ICustomInputText) {
  // Combine size with any additional classes
  const inputClasses = `${className}`.trim();

  return (
    <TextInput
      style={tw`${inputClasses}`}
      placeholder={placeholder}
    ></TextInput>
  );
}
