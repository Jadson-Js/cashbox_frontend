import React from "react";
import { TextInput } from "react-native";
import { style } from "twrnc";
import { ICustomInputText } from "../../types/form/ICustomInputText";

export function CustomInputText({
  placeholder,
  className = "",
}: ICustomInputText) {
  const containerStyle = style(className);

  return (
    <TextInput style={containerStyle} placeholder={placeholder}></TextInput>
  );
}
