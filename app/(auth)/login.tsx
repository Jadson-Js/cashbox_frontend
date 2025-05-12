import { useAuth } from "@/src/hooks/auth";
import { Link } from "expo-router";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CustomButton } from "../../src/components/ui/CustomButton";
import { CustomInputTextIcon } from "../../src/components/ui/CustomInputTextIcon";
import { CustomText } from "../../src/components/ui/CustomText";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { isLoading, error, login } = useAuth();
  const [formData, setFormData] = React.useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const credentials = {
      email: "admin@admin.com",
      password: "admin123",
    };

    await login(credentials);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="bg-white p-16 flex h-full">
            <View className="flex-1 flex justify-center">
              <CustomText
                content="Cashbox"
                size="XL"
                className="text-center uppercase text-slate-600"
              />
            </View>
            <View className="flex-2 flex justify-center">
              <CustomText
                content="Login"
                size="L"
                className="text-center  text-slate-600"
              />

              <View className="bg-slate-200 w-full h-0.5 mb-6"></View>

              <CustomInputTextIcon
                iconName="account-outline"
                placeholder="Digite your email here"
                className="mb-6"
              />

              <CustomInputTextIcon
                iconName="lock-outline"
                placeholder="Digite your password here"
                className="mb-12"
              />

              <CustomButton
                content="Entrar"
                className="mb-8"
                onPress={handleSubmit}
              />

              <Link href="/(auth)/signup">
                <CustomText
                  content="You not have an account? Sign up"
                  size="S"
                  className="text-center"
                />
              </Link>
            </View>

            <View className="flex-1 justify-end">
              <CustomText
                content="Copyright ©2020 Produced by Ant Finance Experience Technology
          Department"
                size="XS"
                className="text-center"
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
