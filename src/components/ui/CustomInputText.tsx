import React from "react";
import { TextInput } from "react-native";
import { style } from "twrnc";
import { ICustomInputText } from "../../types/ui/ICustomInputText";

export function CustomInputText({
  placeholder,
  className = "",
}: ICustomInputText) {
  const containerStyle = style(`text-slate-400 w-full`, className);

  return (
    <TextInput style={containerStyle} placeholder={placeholder}></TextInput>
  );
}
