import { Text } from "react-native";
import { ICustomText } from "../types/ICustomText";

export default function CustomText({ content, size }: ICustomText) {
  return <Text className="color-blue-700">{content}</Text>;
}
