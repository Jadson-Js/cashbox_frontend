import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface ICustomInputTextIcon {
  placeholder: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor?: string;
  className?: string;
}
