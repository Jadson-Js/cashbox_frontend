import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#f8f9fa" },
        headerTintColor: "#333",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="transaction"
        options={{
          title: "Transaction",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
