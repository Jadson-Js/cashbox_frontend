import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import tw, { style } from "twrnc";

export interface ICustomInputTextIcon extends IComponent {
  placeholder: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor?: string;
  value: string;
  setValue: (value: string) => void;
  secureTextEntry?: boolean;
}

export function CustomInputTextIcon({
  placeholder,
  iconName,
  iconColor = "text-slate-400",
  className = "",
  value,
  setValue,
  secureTextEntry = false,
}: ICustomInputTextIcon) {
  const containerStyle = style(
    "bg-white rounded-md px-2 border border-slate-200 flex flex-row gap-2 items-center",
    className,
  );

  return (
    <View style={containerStyle}>
      <MaterialCommunityIcons
        name={iconName}
        size={20}
        style={tw`${iconColor}`}
      />
      <TextInput
        style={tw`text-lg text-slate-600 flex-1`}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
}
