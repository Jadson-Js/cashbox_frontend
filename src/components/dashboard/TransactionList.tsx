import { colors } from "@/src/constants/colors";
import { TransactionType } from "@/src/constants/enums";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomText } from "../ui/CustomText";

export interface ITransactionList {
  type: TransactionType;
  className?: string;
}

export function TransactionList({ type, className }: ITransactionList) {
  const componentStyle = style(className);
  const styleArrow = style(
    `text-white p-1 rounded-full ${
      type === TransactionType.INCOME
        ? `bg-[${colors.green}]`
        : `bg-[${colors.red}]`
    }`,
  );

  return (
    <View style={componentStyle}>
      <CustomText
        content={type === TransactionType.INCOME ? "Incomes" : "Expenses"}
        size="L"
        className="text-slate-600 uppercase mb-4"
      />

      <View className="border border-dashed p-8 rounded-3xl border-slate-400 flex flex-row items-center gap-4">
        <MaterialCommunityIcons name="plus" size={25} style={styleArrow} />
        <CustomText
          content={`You dont have any ${type.toLowerCase()}`}
          size="S"
        />
      </View>
    </View>
  );
}
