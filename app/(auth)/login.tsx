import { Link, router } from "expo-router";
import { Button, TextInput, View } from "react-native";
import CustomText from "../../src/components/CustomText";

export default function SignupScreen() {
  return (
    <View className="h-[100vh] p-16 backgroundLight flex">
      <View className="flex-1 text-center flex justify-center">
        <CustomText content="Cashbox" size="L" />
      </View>

      <View className="flex-1">
        <CustomText content="Login" size="M" />

        <TextInput placeholder="Digite your email here" />
        <TextInput placeholder="Digite your password here" />
        <Button title="Entrar" onPress={() => router.replace("/(tabs)/home")} />
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
