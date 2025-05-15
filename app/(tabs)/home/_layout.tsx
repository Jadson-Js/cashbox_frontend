import { TransactionsProvider } from "@/src/context/TransactionContext";
import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <TransactionsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </TransactionsProvider>
  );
}
