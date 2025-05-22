import { formatNumberToCurrency } from "@/src/utils/formatNumberToCurrency";
import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

export interface ICustomInputNumber {
  placeholder: string;
  className?: string;
  value: number;
  setValue: (value: number) => void;
}

export function CustomInputNumber({
  value,
  setValue,
  placeholder,
  className = "",
}: ICustomInputNumber) {
  React.useEffect(() => {
    setDisplayValue(formatNumberToCurrency(value));
  }, [value]);

  const [displayValue, setDisplayValue] = React.useState(
    formatNumberToCurrency(value),
  );

  const handleChange = (text: string) => {
    const numericOnly = text.replace(/\D/g, ""); // Remove everything except digits
    const numericValue = parseFloat(numericOnly) / 100; // Divide to simulate cents

    setValue(numericValue); // Save numeric value
    setDisplayValue(
      numericValue.toLocaleString("us-EN", {
        style: "currency",
        currency: "USD",
      }),
    ); // Format it
  };

  return (
    <TextInput
      style={tw`${className || ""}`}
      placeholder={placeholder}
      value={displayValue}
      onChangeText={handleChange}
      keyboardType="numeric"
    />
  );
}
