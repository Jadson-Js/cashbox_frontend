import { colors } from "@/src/constants/colors";
import { useAuth } from "@/src/hooks/useAuth";
import { router } from "expo-router";
import React from "react";
import { Alert, Pressable, View } from "react-native";
import { CustomButton } from "../../src/components/ui/CustomButton";
import { CustomInputTextIcon } from "../../src/components/ui/CustomInputTextIcon";
import { CustomText } from "../../src/components/ui/CustomText";

interface ISignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupScreen() {
  const { data, error, signup } = useAuth();
  const [formData, setFormData] = React.useState<ISignupFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async () => {
    try {
      if (formData.password !== formData.confirmPassword) {
        Alert.alert("Signup failed", "Passwords do not match");
        return;
      }

      await signup({ email: formData.email, password: formData.password });

      router.navigate("/(auth)/login");
    } catch (error) {
      console.log(error);
      setFormData({ email: "", password: "", confirmPassword: "" });
      Alert.alert("Signup failed", "Invalid credentials");
    }
  };

  return (
    <View className="h-full bg-white p-16 flex">
      <View className="flex-1 flex justify-center">
        <CustomText
          content="Cashbox"
          size="XL"
          className="text-center uppercase text-slate-600"
        />
      </View>
      <View className="flex-2 flex justify-center">
        <CustomText
          content="Signup"
          size="L"
          className="text-center  text-slate-600"
        />

        <View className="bg-slate-200 w-full h-0.5 mb-6"></View>

        <CustomInputTextIcon
          iconName="account-outline"
          placeholder="Digite your email here"
          className="mb-6"
          value={formData.email}
          setValue={(value) => setFormData({ ...formData, email: value })}
        />

        <CustomInputTextIcon
          iconName="lock-outline"
          placeholder="Digite your password here"
          className="mb-6"
          value={formData.password}
          setValue={(value) => setFormData({ ...formData, password: value })}
          isPassword={true}
        />
        <View className="mb-6">
          <CustomInputTextIcon
            iconName="lock-outline"
            placeholder="Digite your password here"
            className="mb-2"
            value={formData.confirmPassword}
            setValue={(value) =>
              setFormData({ ...formData, confirmPassword: value })
            }
            isPassword={true}
          />
          {error && (
            <CustomText
              content="Invalid credentials"
              size="S"
              className={`text-center text-[${colors.red}]`}
            />
          )}
        </View>

        <CustomButton
          content="Register"
          className="mb-4"
          onPress={handleSignup}
        />

        <Pressable onPress={() => router.back()}>
          <CustomText content="Already have an account? Login" size="S" />
        </Pressable>
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
  );
}
