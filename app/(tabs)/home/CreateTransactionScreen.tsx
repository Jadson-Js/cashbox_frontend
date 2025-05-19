import { Form } from "@/src/components/createTransaction/Form";
import { Header } from "@/src/components/Header";
import { TypeSelector } from "@/src/components/TypeSelector";
import { CustomButton } from "@/src/components/ui/CustomButton";
import { TransactionType } from "@/src/constants/enums";
import { useTransaction } from "@/src/hooks/useTransaction";
import { ROUTES } from "@/src/routes";
import { ITransaction } from "@/src/services/transaction.service";
import { useRouter } from "expo-router";
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
  const router = useRouter();
  const { error, createTransaction } = useTransaction();
  const [data, setData] = React.useState<ITransaction>({
    amount: 0,
    type: TransactionType.INCOME,
    description: "",
    transaction_date: "08/03/2005",
    category_id: "81dbcbc0-b7f3-4fae-a101-55949337b2da",
  });

  const handleCreateTransaction = () => {
    console.log(data);
    createTransaction(data);
    router.push(ROUTES.HOME);
  };

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
        onPress={handleCreateTransaction}
        className="absolute bottom-8 left-0 right-0 flex items-center mx-8"
      />
    </View>
  );
}
