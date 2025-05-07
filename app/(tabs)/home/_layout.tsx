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
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: "Details",
        }}
      />
    </Stack>
  );
}
