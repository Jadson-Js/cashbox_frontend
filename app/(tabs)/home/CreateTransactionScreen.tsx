import { Form } from "@/src/components/createTransaction/Form";
import { Header } from "@/src/components/Header";
import { TypeSelector } from "@/src/components/TypeSelector";
import { CustomButton } from "@/src/components/ui/CustomButton";
import { TransactionType } from "@/src/constants/enums";
import { useTransaction } from "@/src/hooks/useTransaction";
import { ITransaction } from "@/src/services/transaction.service";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function TransactionScreen() {
  const { error, createTransaction } = useTransaction();
  const [data, setData] = React.useState<ITransaction>({
    amount: 500,
    type: TransactionType.INCOME,
    description: "",
    transaction_date: new Date(),
    category_id: "81dbcbc0-b7f3-4fae-a101-55949337b2da",
  });

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
            <TypeSelector className="mb-16" data={data} setData={setData} />
            <Form data={data} setData={setData} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <CustomButton
        content="Create new"
        onPress={() => createTransaction(data)}
        className="absolute bottom-8 left-0 right-0 flex items-center mx-8"
      />
    </View>
  );
}
