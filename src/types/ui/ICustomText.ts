import { IComponent } from "../IComponent";

export interface ICustomText extends IComponent {
  content: string;
  size: "XXL" | "XL" | "L" | "LB" | "M" | "MB" | "S" | "SB" | "XS";
}
