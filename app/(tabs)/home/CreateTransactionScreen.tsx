import { Form } from "@/src/components/createTransaction/Form";
import { Header } from "@/src/components/Header";
import { TypeSelector } from "@/src/components/TypeSelector";
import { CustomButton } from "@/src/components/ui/CustomButton";
import { TransactionType } from "@/src/constants/enums";
import { useTransactions } from "@/src/context/TransactionContext";
import { useTransaction } from "@/src/hooks/useTransaction";
import { ROUTES } from "@/src/routes";
import { ITransaction } from "@/src/services/transaction.service";
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
  const { transactions, setUpdate } = useTransactions();
  const { createTransaction } = useTransaction();
  const [data, setData] = React.useState<ITransaction>({
    amount: 0,
    type: TransactionType.INCOME,
    description: "",
    transaction_date: formatDate(new Date()),
    category_id: "",
  });
  const [isEditMode, setIsEditMode] = React.useState(false);
  const classButton = `absolute bottom-8 left-0 right-0 flex items-center mx-8`;
  const buttonCreate = () => {
    return (
      <CustomButton
        content="Create new"
        onPress={handleCreateTransaction}
        className={classButton}
      />
    );
  };
  const buttonEdit = () => {
    return (
      <View className={classButton + " flex flex-col gap-4"}>
        <CustomButton content="Update" onPress={handleCreateTransaction} />
        <CustomButton
          content="Delete"
          onPress={handleCreateTransaction}
          isOutline={true}
        />
      </View>
    );
  };

  const handleCreateTransaction = () => {
    createTransaction(data);
    setUpdate(true);
    router.push(ROUTES.HOME);
  };

  React.useEffect(() => {
    if (!params.transaction_id && !params.category_id) return;

    const foundTransaction = transactions.find(
      (item) => item.id === params.transaction_id,
    );
    if (!foundTransaction) return;

    setData({
      ...data,
      amount: Number(foundTransaction.amount),
      description: foundTransaction.description,
      transaction_date: formatDate(new Date(foundTransaction.transaction_date)),
      type: foundTransaction.type,
    });

    setIsEditMode(true);
  }, []);

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
              onPressAction={handleCreateTransaction}
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
      </KeyboardAvoidingView>

      {!isEditMode ? buttonCreate() : buttonEdit()}
    </View>
  );
}
