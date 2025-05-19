import { colors } from "@/src/constants/colors";
import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw, { style } from "twrnc";
import { TransactionType } from "../constants/enums";
import { shadow } from "../constants/styles";
import { CustomText } from "./ui/CustomText";

export function TypeSelector({ className }: IComponent) {
  const [isIncome, setIsIncome] = React.useState(true);
  const params = useGlobalSearchParams();

  React.useEffect(() => {
    if (!params.type) return;
    setIsIncome(params.type === TransactionType.INCOME);
  }, [params]);

  const viewBase = style(
    `flex-1 flex flex-row gap-2 rounded-full px-4 py-2 items-center justify-center `,
  );
  const viewSelected = style(`bg-[${colors.primary}]`);

  const iconBase = style("w-8 h-8");

  const iconSelected = style("text-white");
  const iconNotSelected = style("text-slate-400");

  return (
    <View
      className="bg-white border rounded-full  border-slate-200 flex flex-row  items-center"
      style={[shadow, tw`${className || ""}`]}
    >
      <TouchableOpacity
        onPress={() => setIsIncome(true)}
        style={[viewBase, isIncome && viewSelected]}
      >
        <MaterialCommunityIcons
          name="cash-plus"
          size={30}
          style={[iconBase, isIncome ? iconSelected : iconNotSelected]}
        />
        <CustomText
          content="Income"
          size="M"
          className={isIncome ? "text-white" : ""}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setIsIncome(false)}
        style={[viewBase, !isIncome && viewSelected]}
      >
        <MaterialCommunityIcons
          name="cash-minus"
          size={30}
          style={[iconBase, !isIncome ? iconSelected : iconNotSelected]}
        />
        <CustomText
          content="Expenses"
          size="M"
          className={!isIncome ? "text-white" : ""}
        />
      </TouchableOpacity>
    </View>
  );
}
