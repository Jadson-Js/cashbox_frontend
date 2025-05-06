import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import tw, { style } from "twrnc";
import { ICustomInputTextIcon } from "../../types/form/ICustomInputTextIcon";

export function CustomInputTextIcon({
  placeholder,
  iconName,
  iconColor = "text-slate-400",
  className = "",
}: ICustomInputTextIcon) {
  const containerStyle = style(
    "bg-white rounded-md px-2 border border-slate-200 flex flex-row gap-2 items-center",
    className,
  );

  return (
    <View style={containerStyle}>
      <MaterialIcons name={iconName} size={20} style={tw`${iconColor}`} />
      <TextInput className="text-lg text-slate-600" placeholder={placeholder} />
    </View>
  );
}
