import { MaterialIcons } from "@expo/vector-icons";

export interface ICustomInputTextIcon {
  placeholder: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconColor?: string;
  className?: string;
}
