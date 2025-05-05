import { Link } from "expo-router";
import { Text, View } from "react-native";
import { CustomButton } from "../../src/components/CustomButton";
import { CustomInputText } from "../../src/components/CustomInputText";
import { CustomText } from "../../src/components/CustomText";

export default function SignupScreen() {
  return (
    <View className="h-[100vh] p-16 backgroundLight flex">
      <View className="flex-1 flex justify-center">
        <CustomText
          content="Cashbox"
          size="XL"
          className="text-center uppercase text-slate-800"
        />
      </View>

      <View className="flex-1">
        <Text className="text-4xl font-bold text-center uppercase text-primary mb-4">
          Login
        </Text>

        <View className="bg-slate-200 w-[100%] h-1 mb-4"></View>

        <CustomInputText placeholder="Digite your email here" />

        <CustomInputText placeholder="Digite your password here" />

        <CustomButton content="Entrar" />

        <Link href="/(auth)/signup">
          <CustomText content="Signup" size="S" />
        </Link>
      </View>

      <View>
        <CustomText
          content="Copyright ©2020 Produced by Ant Finance Experience Technology
          Department"
          size="S"
        />
      </View>
    </View>
  );
}
