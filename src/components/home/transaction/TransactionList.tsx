import { colors } from "@/src/constants/colors";
import { TransactionType } from "@/src/constants/enums";
import { ROUTES } from "@/src/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navigate } from "expo-router/build/global-state/routing";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
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
    return (
      <FlatList
        className="flex flex-col gap-"
        data={transactions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TransactionItem
            amount={item.amount}
            category={item.category}
            iconName={item.iconName}
            iconColor={item.iconColor}
            description={item.description}
            transactionDate={item.transactionDate}
          />
        )}
        contentContainerStyle={style("gap-4 pb-1")}
      />
    );

    /* return transactions.map((transaction, index) => {
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
    }); */
  };

  return (
    <View style={componentStyle}>
      <View className="flex flex-row justify-between items-center mb-4">
        <CustomText
          content={type === TransactionType.INCOME ? "Incomes" : "Expenses"}
          size="L"
          className="text-slate-600 uppercase"
        />

        <TouchableOpacity onPress={() => navigate(ROUTES.METRICS)}>
          <CustomText content="See more" size="S" className="" />
        </TouchableOpacity>
      </View>

      <View>
        {transactions.length !== 0 ? transactionItens() : noTransactions()}
      </View>
    </View>
  );
}
