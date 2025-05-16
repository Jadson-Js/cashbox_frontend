import { colors } from "@/src/constants/colors";
import { TransactionType } from "@/src/constants/enums";
import { shadow } from "@/src/constants/styles";
import { useTransactions } from "@/src/context/TransactionContext";

import { filterTransactionsByMonth } from "@/src/utils/filterTransactionsByMonth";
import { formatNumberToCurrency } from "@/src/utils/formatNumberToCurrency";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { CustomText } from "../ui/CustomText";

export interface ICreditCard {
  selectMonth: number;
  className?: string;
}

export function CreditCard({ selectMonth, className }: ICreditCard) {
  const { transactions } = useTransactions();
  const transactionsByMonth = filterTransactionsByMonth(
    transactions,
    selectMonth,
  );

  const balance = transactionsByMonth.reduce((acc, item) => {
    return item.type === TransactionType.INCOME
      ? acc + item.amount
      : acc - item.amount;
  }, 0);

  const income = transactionsByMonth.reduce((acc, item) => {
    const amount = Number(item.amount) || 0;
    return item.type === TransactionType.INCOME ? acc + amount : acc;
  }, 0);

  const expense = transactionsByMonth.reduce((acc, item) => {
    const amount = Number(item.amount) || 0;
    return item.type === TransactionType.EXPENSE ? acc + amount : acc;
  }, 0);

  return (
    <View
      className={` rounded-3xl flex flex-col p-6 justify-center `}
      style={[shadow, tw`bg-[${colors.primary}] ${className || ""}`]}
    >
      <CustomText
        content="Balance"
        size="M"
        className="text-white text-center mb-2"
      />
      <CustomText
        content={formatNumberToCurrency(balance)}
        size="XL"
        className="text-white text-center mb-8"
      />

      <View className="flex flex-row justify-between items-start ">
        <View className="flex flex-row items-center gap-4 ">
          <MaterialCommunityIcons
            name="arrow-up"
            size={20}
            style={tw`text-slate-400 p-2 bg-white rounded-full`}
          />
          <View>
            <CustomText content="Income" size="S" className="text-slate-200" />
            <CustomText
              content={formatNumberToCurrency(income)}
              size="SB"
              className="text-white"
            />
          </View>
        </View>

        <View className="flex flex-row items-center gap-4 ">
          <MaterialCommunityIcons
            name="arrow-down"
            size={20}
            style={tw`text-slate-400 p-2 bg-white rounded-full`}
          />
          <View>
            <CustomText content="Expense" size="S" className="text-slate-200" />
            <CustomText
              content={formatNumberToCurrency(expense)}
              size="SB"
              className="text-white"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
