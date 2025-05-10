import { AddTransactionFixed } from "@/src/components/home/AddTransactionFixed";
import { CreditCard } from "@/src/components/home/CreditCard";
import { MonthPicker } from "@/src/components/home/MonthPicker";
import { TransactionList } from "@/src/components/home/transaction/TransactionList";
import { TransactionType } from "@/src/constants/enums";
import { ScrollView, View } from "react-native";

export default function DashboardScreen() {
  return (
    <>
      <ScrollView>
        <View className="h-full p-8 bg-white">
          <MonthPicker className="mb-8" />

          <CreditCard className="mb-12" />

          <TransactionList type={TransactionType.INCOME} className="mb-12" />

          <TransactionList type={TransactionType.EXPENSE} />
        </View>
      </ScrollView>
      <AddTransactionFixed />
    </>
  );
}
