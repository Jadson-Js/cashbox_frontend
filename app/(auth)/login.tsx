import { Link, router } from "expo-router";
import { Button, Text, TextInput } from "react-native";

export default function SignupScreen() {
  return (
    <>
      <Text>Cashbox</Text>

      <Text>Login</Text>

      <TextInput placeholder="Digite your email here" />
      <TextInput placeholder="Digite your password here" />

      <Button title="Entrar" onPress={() => router.replace("/(tabs)/home")} />

      <Link href="/(auth)/signup">
        <Text>Go to SIGNUP</Text>
      </Link>
    </>
  );
}
