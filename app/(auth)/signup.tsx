import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { CustomButton } from "../../src/components/ui/CustomButton";
import { CustomInputTextIcon } from "../../src/components/ui/CustomInputTextIcon";
import { CustomText } from "../../src/components/ui/CustomText";

export default function SignupScreen() {
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
          iconName="person-outline"
          placeholder="Digite your email here"
          className="mb-6"
        />

        <CustomInputTextIcon
          iconName="lock-outline"
          placeholder="Digite your password here"
          className="mb-6"
        />

        <CustomInputTextIcon
          iconName="lock-outline"
          placeholder="Repeat your password here"
          className="mb-12"
        />

        <CustomButton
          content="Register"
          className="mb-4"
          onPress={() => router.navigate("/(tabs)/home")}
        />

        <Pressable onPress={() => router.back()}>
          <CustomText content="Already have an account? Sign in" size="S" />
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
