import React from "react";
import { TextInput } from "react-native";
import { style } from "twrnc";

export interface ICustomInputText {
  placeholder: string;
  className?: string;
  value: string;
  setValue: (value: string) => void;
}

export function CustomInputText({
  placeholder,
  className = "",
  value,
  setValue,
}: ICustomInputText) {
  const containerStyle = style(`text-slate-400 w-full`, className);

  return (
    <TextInput
      style={containerStyle}
      placeholder={placeholder}
      value={value}
      onChangeText={(value) => setValue(value)}
    ></TextInput>
  );
}
