import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IComponent } from "../IComponent";

export interface ICustomInputTextIcon extends IComponent {
  placeholder: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor?: string;
}
