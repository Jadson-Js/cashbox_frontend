import { ICustomInputNumber } from "@/src/types/ui/ICustomInputNumber";
import React from "react";
import { TextInput } from "react-native";
import { style } from "twrnc";

export function CustomInputNumber({
  placeholder,
  className = "",
}: ICustomInputNumber) {
  const [rawValue, setRawValue] = React.useState("0"); // valor em centavos
  const containerStyle = style(className);

  const formatToCurrency = (num: string) => {
    const cents = num.replace(/\D/g, ""); // remove tudo que não for número
    const numeric = parseInt(cents || "0", 10);

    return (numeric / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handle = (e: any) => {
    const text = e.nativeEvent.text;
    const numericText = text.replace(/[^0-9]/g, "");

    setRawValue(numericText);
  };

  return (
    <TextInput
      style={containerStyle}
      placeholder={placeholder}
      value={formatToCurrency(rawValue)}
      onChange={handle}
      keyboardType="numeric"
    />
  );
}
