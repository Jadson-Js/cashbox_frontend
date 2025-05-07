import { CustomText } from "@/src/components/ui/CustomText";
import { colors } from "@/src/constants/colors";
import { shadow } from "@/src/constants/styles";
import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";

export default function CreditCard({ className }: IComponent) {
  const componentStyle = style(`bg-[${colors.primary}]`, className);
  const styleArrow = style("text-slate-400 p-2 bg-white rounded-full");

  return (
    <View
      className={` rounded-3xl flex flex-col p-6 justify-center `}
      style={[shadow, componentStyle]}
    >
      <CustomText
        content="Balance"
        size="M"
        className="text-white text-center mb-2"
      />
      <CustomText
        content="R$6.890,00"
        size="XL"
        className="text-white text-center mb-8"
      />

      <View className="flex flex-row justify-between items-start ">
        <View className="flex flex-row items-center gap-4 ">
          <MaterialCommunityIcons
            name="arrow-up"
            size={20}
            style={styleArrow}
          />
          <View>
            <CustomText content="Income" size="S" className="text-slate-200" />
            <CustomText content="R$4.921,00" size="SB" className="text-white" />
          </View>
        </View>

        <View className="flex flex-row items-center gap-4 ">
          <MaterialCommunityIcons
            name="arrow-down"
            size={20}
            style={styleArrow}
          />
          <View>
            <CustomText
              content="Expenses"
              size="S"
              className="text-slate-200"
            />
            <CustomText content="R$4.921,00" size="SB" className="text-white" />
          </View>
        </View>
      </View>
    </View>
  );
}
