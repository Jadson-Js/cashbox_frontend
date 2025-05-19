import { colors } from "@/src/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw, { style } from "twrnc";
import { TransactionType } from "../constants/enums";
import { shadow } from "../constants/styles";
import { ITransaction } from "../services/transaction.service";
import { CustomText } from "./ui/CustomText";

export interface ITypeSelector {
  data: ITransaction;
  setData: (value: ITransaction) => void;
  className?: string;
}

export function TypeSelector({ data, setData, className }: ITypeSelector) {
  const params = useGlobalSearchParams();

  React.useEffect(() => {
    if (!params.type) return;
    setData({
      ...data,
      type:
        params.type === TransactionType.INCOME
          ? TransactionType.INCOME
          : TransactionType.EXPENSE,
    });
  }, [params]);

  const viewBase = style(
    `flex-1 flex flex-row gap-2 rounded-full px-4 py-2 items-center justify-center `,
  );
  const viewSelected = style(`bg-[${colors.primary}]`);

  const iconBase = style("w-8 h-8");

  const iconSelected = style("text-white");
  const iconNotSelected = style("text-slate-400");

  const isIncome = data.type === TransactionType.INCOME;

  return (
    <View
      className="bg-white border rounded-full  border-slate-200 flex flex-row  items-center"
      style={[shadow, tw`${className || ""}`]}
    >
      <TouchableOpacity
        onPress={() => setData({ ...data, type: TransactionType.INCOME })}
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
        onPress={() => setData({ ...data, type: TransactionType.EXPENSE })}
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
