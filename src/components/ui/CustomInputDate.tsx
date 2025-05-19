import React from "react";
import { TextInputMask } from "react-native-masked-text";
import tw from "twrnc";

export interface ICustomInputDate {
  placeholder?: string;
  className?: string;
  value: string;
  setValue: (value: string) => void;
}

export function CustomInputDate({
  placeholder,
  className = "",
  value,
  setValue,
}: ICustomInputDate) {
  // const defaultDate = format(new Date(), "MM/dd/yyyy").toString();

  return (
    <TextInputMask
      type={"datetime"}
      options={{ format: "MM/DD/YYYY" }}
      value={value}
      onChangeText={(text) => setValue(text)}
      placeholder="MM/DD/YYYY"
      keyboardType="numeric"
      style={tw`text-slate-400 text- text-end w-30 text-lg ${className || ""}`}
    />
  );
}
