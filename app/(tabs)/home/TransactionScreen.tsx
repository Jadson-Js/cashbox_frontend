import { Form } from "@/src/components/transaction/Form";
import { Header } from "@/src/components/transaction/Header";
import { TypeSelector } from "@/src/components/transaction/TypeSelector";
import { CustomButton } from "@/src/components/ui/CustomButton";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function TransactionScreen() {
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
            <TypeSelector className="mb-16" />
            <Form />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <CustomButton
        content="Create new"
        onPress={() => console.log("save")}
        className="absolute bottom-8 left-0 right-0 flex items-center mx-8"
      />
    </View>
  );
}
