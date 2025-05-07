import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import tw, { style } from "twrnc";
import { ICustomInputTextIcon } from "../../types/ui/ICustomInputTextIcon";

export function CustomInputTextIcon({
  placeholder,
  iconName,
  iconColor = "text-slate-400",
  className = "",
}: ICustomInputTextIcon) {
  const containerStyle = style(className);

  return (
    <View
      className="bg-white rounded-md px-2 border border-slate-200 flex flex-row gap-2 items-center"
      style={containerStyle}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={20}
        style={tw`${iconColor}`}
      />
      <TextInput
        style={tw`text-lg text-slate-600 flex-1`}
        placeholder={placeholder}
      />
    </View>
  );
}
