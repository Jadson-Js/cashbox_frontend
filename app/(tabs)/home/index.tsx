import { AddTransactionFixed } from "@/src/components/home/AddTransactionFixed";
import { CreditCard } from "@/src/components/home/CreditCard";
import { TransactionList } from "@/src/components/home/transaction/TransactionList";
import { MonthPicker } from "@/src/components/MonthPicker";
import { TransactionType } from "@/src/constants/enums";
import React from "react";
import { ScrollView, View } from "react-native";

export default function DashboardScreen() {
  const [selectMonth, setSelectMonth] = React.useState(new Date().getMonth());

  return (
    <>
      <ScrollView>
        <View className="h-full p-8 bg-white">
          <MonthPicker
            className="mb-8"
            selectMonth={selectMonth}
            setSelectMonth={setSelectMonth}
          />

          <CreditCard selectMonth={selectMonth} className="mb-12" />

          <TransactionList
            type={TransactionType.INCOME}
            selectMonth={selectMonth}
            className="mb-12"
          />

          <TransactionList
            type={TransactionType.EXPENSE}
            selectMonth={selectMonth}
          />
        </View>
      </ScrollView>
      <AddTransactionFixed />
    </>
  );
}
