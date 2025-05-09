import { ICustomInputDate } from "@/src/types/ui/ICustomInputDate";
import { format } from "date-fns";
import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { style } from "twrnc";

export function CustomInputDate({
  placeholder,
  className = "",
  content,
}: ICustomInputDate) {
  const defaultDate = format(new Date(), "MM/dd/yyyy").toString();
  const [value, setValue] = useState<string>(
    content ? String(content) : defaultDate,
  );

  const containerStyle = style(
    `text-slate-400 text- text-end w-30 text-lg`,
    className,
  );

  return (
    <TextInputMask
      type={"datetime"}
      options={{ format: "MM/DD/YYYY" }}
      value={value}
      onChangeText={(text) => setValue(text)}
      placeholder="MM/DD/YYYY"
      keyboardType="numeric"
      style={containerStyle}
    />
  );
}
