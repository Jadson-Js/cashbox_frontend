import ButtonsTransaction from "@/src/components/createTransaction/ButtonsTransaction";
import { Form } from "@/src/components/createTransaction/Form";
import { Header } from "@/src/components/Header";
import { TypeSelector } from "@/src/components/TypeSelector";
import { TransactionType } from "@/src/constants/enums";
import { useTransactions } from "@/src/context/TransactionContext";
import { ITransactionBodyHook } from "@/src/types/hooks/transactions.hooks";
import { formatDate } from "@/src/utils/formatDate";
import { useGlobalSearchParams, useRouter } from "expo-router";
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
  const params = useGlobalSearchParams();

  const { transactions } = useTransactions();

  const [data, setData] = React.useState<ITransactionBodyHook>({
    amount: 0,
    type: TransactionType.INCOME,
    description: "",
    transaction_date: formatDate(new Date()),
    category_id: "",
  });
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!params.transaction_id || transactions.length === 0) return;
    setIsEditMode(true);

    const transactionFounded = transactions.find(
      (item: any) => item.id === params.transaction_id,
    );
    if (!transactionFounded) return;

    const data: ITransactionBodyHook = {
      amount: Number(transactionFounded.amount),
      type: transactionFounded.type,
      description: transactionFounded.description,
      transaction_date: formatDate(
        new Date(transactionFounded.transaction_date),
      ),
      category_id:
        typeof params.category_id === "string" ? params.category_id : "",
    };

    setData(data);
  }, [transactions, params]);

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
              title={"New trasaction"}
              action={"Save"}
              onPressAction={() => {}}
              className="mb-8"
            />
            <TypeSelector
              className="mb-16"
              type={data.type}
              setType={(value) => setData({ ...data, type: value })}
            />
            <Form data={data} setData={setData} />
          </ScrollView>
        </TouchableWithoutFeedback>
        <ButtonsTransaction
          transaction_id={
            typeof params.transaction_id === "string"
              ? params.transaction_id
              : ""
          }
          data={data}
          isEditMode={isEditMode}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
