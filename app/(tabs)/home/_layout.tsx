import { CategoriesProvider } from "@/src/context/CategoryContext";
import { TransactionsProvider } from "@/src/context/TransactionContext";
import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <TransactionsProvider>
      <CategoriesProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </CategoriesProvider>
    </TransactionsProvider>
  );
}
