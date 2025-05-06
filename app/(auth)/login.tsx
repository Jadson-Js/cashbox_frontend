import { Link, router } from "expo-router";
import { View } from "react-native";
import { CustomButton } from "../../src/components/ui/CustomButton";
import { CustomInputTextIcon } from "../../src/components/ui/CustomInputTextIcon";
import { CustomText } from "../../src/components/ui/CustomText";

export default function LoginScreen() {
  return (
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
          iconName="person-outline"
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
          onPress={() => router.navigate("/(tabs)/home")}
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
  );
}
