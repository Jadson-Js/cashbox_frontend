import { Header } from "@/src/components/transaction/Header";
import { TypeSelector } from "@/src/components/transaction/TypeSelector";
import { View } from "react-native";

export default function TransactionScreen() {
  return (
    <>
      <View className="h-full p-8 bg-white">
        <Header className="mb-8" />

        <TypeSelector className="mb-8" />
      </View>
    </>
  );
}
