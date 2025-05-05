import { Link, router } from "expo-router";
import { Button, Text, TextInput } from "react-native";

export default function SignupScreen() {
  return (
    <>
      <Text>Cashbox</Text>

      <Text>Signup</Text>

      <TextInput placeholder="Digite your email here" />

      <TextInput placeholder="Digite your password here" />
      <TextInput placeholder="Repity your password here" />

      <Button title="Entrar" onPress={() => router.replace("/(tabs)/home")} />

      <Link href="/(auth)/login">
        <Text>Go to LOGIN</Text>
      </Link>
    </>
  );
}
