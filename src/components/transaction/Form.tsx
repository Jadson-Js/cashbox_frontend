import { colors } from "@/src/constants/colors";
import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomInputNumber } from "../ui/CustomInputNumber";
import { CustomText } from "../ui/CustomText";

export function Form({ className }: IComponent) {
  const componentStyle = style(className);
  /*  const selector = style(`bg-[${colors.primary}]`);

  const styleIcon = style("text-white w-8 h-8");*/
  const colorIcon = style("text-slate-400 w-8 h-8");

  return (
    <View style={componentStyle}>
      <CustomInputNumber
        placeholder="R$0,00"
        className={`text-3xl font-bold text-center mb-12 text-[${colors.primary}]`}
      />

      <View className="flex flex-col gap-4 ">
        <View className="flex flex-row justify-between items-center border-b border-slate-200 pb-4 ">
          <CustomText content="Category" size="MB" className="text-slate-600" />
          <View className="flex flex-row items-center ">
            <CustomText content="Chossen" size="M" className="uppercase " />
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              style={colorIcon}
            />
          </View>
        </View>

        <View className="flex flex-row justify-between items-center border-b border-slate-200 pb-4 ">
          <CustomText content="Date" size="MB" className="text-slate-600" />
          <View className="flex flex-row items-center ">
            <CustomText content="03/08/2005" size="M" className="uppercase " />
          </View>
        </View>

        <View className="flex flex-col items-start border-b border-slate-200 pb-4 gap-2 max-h-60">
          <CustomText
            content="Description"
            size="MB"
            className="text-slate-600"
          />
          <View className="flex flex-row items-center ">
            <CustomText content="03/08/2005" size="M" className="uppercase " />
          </View>
        </View>
      </View>
    </View>
  );
}
