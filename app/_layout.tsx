import "@tailwind";
import { Stack } from "expo-router";
// eslint-disable-next-line import/no-unresolved
import { ErrorBoundary } from "react-error-boundary";
import { Text, View } from "react-native";

function ErrorFallback() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-lg text-red-500 font-bold mb-2">
        Something went wrong
      </Text>
      <Text className="text-gray-600">Please restart the app</Text>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Stack initialRouteName="(auth)">
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ErrorBoundary>
  );
}
