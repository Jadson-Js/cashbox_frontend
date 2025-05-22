import { ICategoryData } from "@/src/api/category";
import { colors } from "@/src/constants/colors";
import { TransactionType } from "@/src/constants/enums";
import { shadow } from "@/src/constants/styles";
import { useCategories } from "@/src/context/CategoryContext";
import { ROUTES } from "@/src/routes";
import { formatDate } from "@/src/utils/formatDate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { CustomText } from "../../ui/CustomText";

export interface ITransactionItem {
  id: string;
  amount: number;
  categoryId: string;
  description: string;
  transactionDate: Date;
  transactionType: TransactionType;
}

export function TransactionItem({
  id,
  amount,
  categoryId,
  description,
  transactionDate,
  transactionType,
}: ITransactionItem) {
  const router = useRouter();
  const { categories } = useCategories();
  const category: ICategoryData | undefined = categories.find(
    (item) => item.id === categoryId,
  );

  const isIncome = transactionType === TransactionType.INCOME;
  const amountFormated = isIncome ? `+$${amount}` : `-$${amount}`;
  const styleAmount = isIncome ? `text-green-500` : `text-red-500`;
  const dateFormated = formatDate(new Date(transactionDate));

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: ROUTES.TRANSACTION,
          params: { transaction_id: id, category_id: categoryId },
        })
      }
      className="border rounded-3xl bg-white border-slate-200 p-4 flex flex-row items-center gap-4"
      style={shadow}
    >
      <View
        style={tw`bg-[${(category?.icon_color || colors.red) + 40}] `}
        className="rounded-xl p-2"
      >
        <MaterialCommunityIcons
          name={
            (category?.icon_name as keyof typeof MaterialCommunityIcons.glyphMap) ||
            "help-circle"
          }
          size={30}
          style={tw`text-[${category?.icon_color || "#FFF"}]`}
        />
      </View>

      <View className="flex-1">
        <CustomText
          content={category?.title || "Unknown"}
          size="SB"
          className="text-slate-600"
        />
        <CustomText content={description} size="XS" />
      </View>

      <View className="flex flex-col items-end">
        <CustomText content={amountFormated} size="S" className={styleAmount} />
        <CustomText content={dateFormated} size="XS" />
      </View>
    </TouchableOpacity>
  );
}
