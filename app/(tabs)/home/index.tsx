import { AddTransactionFixed } from "@/src/components/dashboard/AddTransactionFixed";
import { CreditCard } from "@/src/components/dashboard/CreditCard";
import { MonthPicker } from "@/src/components/dashboard/MonthPicker";
import { TransactionList } from "@/src/components/dashboard/transaction/TransactionList";
import { TransactionType } from "@/src/constants/enums";
import { navigate } from "expo-router/build/global-state/routing";
import { ScrollView, TouchableOpacity, View } from "react-native";

export default function DashboardScreen() {
  return (
    <>
      <ScrollView>
        <View className="h-full p-8 bg-white">
          <MonthPicker className="mb-8" />

          <CreditCard className="mb-12" />

          <TouchableOpacity onPress={() => navigate("/(tabs)/home/Metrics")}>
            <TransactionList type={TransactionType.INCOME} className="mb-12" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("/(tabs)/home/Metrics")}>
            <TransactionList type={TransactionType.EXPENSE} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <AddTransactionFixed />
    </>
  );
}
