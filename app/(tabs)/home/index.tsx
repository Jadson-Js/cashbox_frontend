import { CreditCard } from "@/src/components/dashboard/CreditCard";
import { MonthPicker } from "@/src/components/dashboard/MonthPicker";
import { TransactionList } from "@/src/components/dashboard/TransactionList";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="h-full p-8 bg-white">
      <MonthPicker className="mb-8" />

      <CreditCard className="mb-12" />

      <TransactionList className="mb-4" />

      <TransactionList />
    </View>
  );
}
