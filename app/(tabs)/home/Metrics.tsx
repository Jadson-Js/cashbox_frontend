import { Header } from "@/src/components/Header";
import { TransactionList } from "@/src/components/home/transaction/TransactionList";
import { Chart } from "@/src/components/metrics/Chart";
import { TypeSelector } from "@/src/components/TypeSelector";
import { TransactionType } from "@/src/constants/enums";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function MetricsScreen() {
  return (
    <View className="h-full bg-white relative">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              padding: 32,
              paddingBottom: 120,
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
          >
            <Header className="mb-8" />
            <View className="flex flex-col gap-8">
              <TypeSelector />
              <Chart />
              <TransactionList type={TransactionType.INCOME} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
