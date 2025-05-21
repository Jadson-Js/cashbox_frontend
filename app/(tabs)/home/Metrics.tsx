import { TransactionList } from "@/src/components/home/transaction/TransactionList";
import { Chart } from "@/src/components/metrics/Chart";
import { Header } from "@/src/components/metrics/Header";
import { TypeSelector } from "@/src/components/TypeSelector";
import { TransactionType } from "@/src/constants/enums";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function MetricsScreen() {
  const [selectMonth, setSelectMonth] = React.useState(new Date().getMonth());
  const [type, setType] = React.useState<TransactionType>(
    TransactionType.INCOME,
  );

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
            <Header
              className="mb-8"
              selectMonth={selectMonth}
              setSelectMonth={setSelectMonth}
            />
            <View className="flex flex-col gap-8">
              <TypeSelector type={type} setType={(value) => setType(value)} />
              <Chart type={type} selectMonth={selectMonth} />
              <TransactionList type={type} selectMonth={selectMonth} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
