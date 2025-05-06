import { CreditCard } from "@/src/components/dashboard/CreditCard";
import { MonthPicker } from "@/src/components/dashboard/MonthPicker";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="h-full p-8 bg-white">
      <MonthPicker />

      <CreditCard />
    </View>
  );
}
