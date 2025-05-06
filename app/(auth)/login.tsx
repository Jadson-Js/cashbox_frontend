import { Link } from "expo-router";
import { View } from "react-native";
import { CustomButton } from "../../src/components/ui/CustomButton";
import { CustomInputTextIcon } from "../../src/components/ui/CustomInputTextIcon";
import { CustomText } from "../../src/components/ui/CustomText";

export default function SignupScreen() {
  return (
    <View className="h-[100vh] bg-white p-16 flex">
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

        <View className="bg-slate-200 w-[100%] h-[1px] mb-6"></View>

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

        <CustomButton content="Entrar" className="mb-4" />

        <Link href="/(auth)/signup">
          <CustomText content="You not have an account? Sign up" size="S" />
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
