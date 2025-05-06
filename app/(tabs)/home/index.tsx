import { View } from "react-native";
import { MonthPicker } from "../../../src/components/dashboard/MonthPicker";

export default function HomeScreen() {
  return (
    <View className="h-[100vh] p-8 bg-white">
      <MonthPicker />
    </View>
  );
}
