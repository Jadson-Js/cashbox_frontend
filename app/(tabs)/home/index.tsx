import { AddTransactionFixed } from "@/src/components/dashboard/AddTransactionFixed";
import { CreditCard } from "@/src/components/dashboard/CreditCard";
import { MonthPicker } from "@/src/components/dashboard/MonthPicker";
import { TransactionList } from "@/src/components/dashboard/transaction/TransactionList";
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
