import { IComponent } from "@/src/types/IComponent";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomText } from "../ui/CustomText";

export function CreditCard({ className }: IComponent) {
  const componentStyle = style(className);
  const styleArrow = style("text-slate-400 p-2 bg-white rounded-full");

  return (
    <View
      className="bg-primary rounded-3xl flex flex-col p-6 justify-center "
      style={[
        {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        componentStyle,
      ]}
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
          <MaterialIcons name="arrow-upward" size={20} style={styleArrow} />
          <View>
            <CustomText content="Income" size="S" className="text-slate-200" />
            <CustomText content="R$4.921,00" size="SB" className="text-white" />
          </View>
        </View>

        <View className="flex flex-row items-center gap-4 ">
          <MaterialIcons name="arrow-downward" size={20} style={styleArrow} />
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
