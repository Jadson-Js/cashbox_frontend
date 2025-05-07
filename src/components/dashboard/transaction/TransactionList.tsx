import { colors } from "@/src/constants/colors";
import { TransactionType } from "@/src/constants/enums";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomText } from "../../ui/CustomText";
import { ITransactionItem, TransactionItem } from "./TransactionItem";

export interface ITransactionList {
  type: TransactionType;
  className?: string;
}

export function TransactionList({ type, className }: ITransactionList) {
  const [transactions, setTransactions] = React.useState<ITransactionItem[]>([
    {
      amount: 98.3,
      category: "Food",
      iconName: "food",
      iconColor: colors.primary,
      description: "Pizza",
      transactionDate: new Date(),
    },
    {
      amount: -42,
      category: "Shopping",
      iconName: "store",
      iconColor: colors.red,
      description: "PlayStation 5",
      transactionDate: new Date(),
    },
  ]);

  const componentStyle = style(className);
  const iconStyle = style(
    `text-white p-1 rounded-full ${
      type === TransactionType.INCOME
        ? `bg-[${colors.green}]`
        : `bg-[${colors.red}]`
    }`,
  );

  const noTransactions = () => {
    return (
      <View className="border border-dashed p-8 rounded-3xl border-slate-400 flex flex-row items-center gap-4">
        <MaterialCommunityIcons name="plus" size={25} style={iconStyle} />
        <CustomText
          content={`You dont have any ${type.toLowerCase()}`}
          size="S"
        />
      </View>
    );
  };

  const transactionItens = () => {
    return transactions.map((transaction, index) => {
      return (
        <TransactionItem
          key={index}
          amount={transaction.amount}
          category={transaction.category}
          iconName={transaction.iconName}
          iconColor={transaction.iconColor}
          description={transaction.description}
          transactionDate={transaction.transactionDate}
        />
      );
    });
  };

  return (
    <View style={componentStyle}>
      <CustomText
        content={type === TransactionType.INCOME ? "Incomes" : "Expenses"}
        size="L"
        className="text-slate-600 uppercase mb-4"
      />

      <View className="flex gap-4">
        {transactions.length !== 0 ? transactionItens() : noTransactions()}
      </View>
    </View>
  );
}
