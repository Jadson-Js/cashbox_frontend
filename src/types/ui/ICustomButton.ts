import { IComponent } from "../IComponent";

export interface ICustomButton extends IComponent {
  content: string;
  onPress: () => void;
}
