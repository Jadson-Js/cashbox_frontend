import { shadow } from "@/src/constants/styles";
import { View } from "react-native";
import { CustomText } from "../../ui/CustomText";

export interface ITransactionItem {
  amount: number;
  categoryId: string;
  description: string;
  transactionDate: Date;
}

export function TransactionItem({
  amount,
  categoryId,
  description,
  transactionDate,
}: ITransactionItem) {
  const bgIconColor = tw`bg-[${iconColor + 40}]`;
  const fillIconColo = tw`text-[${iconColor}]`;

  const isIncome = amount > 0;
  const amountFormated = isIncome ? `+$${amount}` : `-$${amount}`;
  const styleAmount = isIncome ? `text-green-500` : `text-red-500`;
  const dateFormated =
    `${String(transactionDate.getMonth() + 1).padStart(2, "0")}/` +
    `${String(transactionDate.getDate()).padStart(2, "0")}/` +
    `${transactionDate.getFullYear()}`;

  return (
    <View
      className="border rounded-3xl bg-white border-slate-200 p-4 flex flex-row items-center gap-4"
      style={shadow}
    >
      <View style={bgIconColor} className="rounded-xl p-2">
        <MaterialCommunityIcons
          name={iconName}
          size={30}
          style={fillIconColo}
        />
      </View>

      <View className="flex-1">
        <CustomText content={category} size="SB" className="text-slate-600" />
        <CustomText content={description} size="XS" />
      </View>

      <View className="flex flex-col items-end">
        <CustomText content={amountFormated} size="S" className={styleAmount} />
        <CustomText content={dateFormated} size="XS" />
      </View>
    </View>
  );
}
