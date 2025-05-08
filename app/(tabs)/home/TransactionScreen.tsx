import { Form } from "@/src/components/transaction/Form";
import { Header } from "@/src/components/transaction/Header";
import { TypeSelector } from "@/src/components/transaction/TypeSelector";
import { CustomButton } from "@/src/components/ui/CustomButton";
import { View } from "react-native";

export default function TransactionScreen() {
  return (
    <>
      <View className="h-full p-8 bg-white">
        <Header className="mb-8" />

        <TypeSelector className="mb-16" />

        <Form />

        <CustomButton
          content="Create new"
          onPress={() => console.log("save")}
          className="absolute bottom-8 left-0 right-0 flex items-center mx-8"
        />
      </View>
    </>
  );
}
