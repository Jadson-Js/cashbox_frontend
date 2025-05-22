import { colors } from "@/src/constants/colors";
import { TransactionType } from "@/src/constants/enums";
import { useTransactions } from "@/src/context/TransactionContext";
import { ROUTES } from "@/src/routes";
import { filterTransactionsByMonth } from "@/src/utils/filterTransactionsByMonth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import tw, { style } from "twrnc";
import { CustomText } from "../../ui/CustomText";
import { TransactionItem } from "./TransactionItem";

export interface ITransactionList {
  type: TransactionType;
  selectMonth: number;
  className?: string;
}

export function TransactionList({
  type,
  selectMonth,
  className,
}: ITransactionList) {
  const [showSeeMore, setShowSeeMore] = React.useState(false);
  const pathName = usePathname();
  const { transactions, setUpdate } = useTransactions();
  const transactionsByMonth = filterTransactionsByMonth(
    transactions,
    selectMonth,
  );

  React.useEffect(() => {
    setUpdate(true);
  }, []);

  React.useEffect(() => {
    if (transactionsByMonth.length === 0) return;

    setShowSeeMore(pathName === "/home");
  }, [transactionsByMonth]);

  const noTransactions = () => {
    return (
      <Link
        href={{
          pathname: ROUTES.TRANSACTION,
          params: { type },
        }}
      >
        <View className="border border-dashed p-8 rounded-3xl border-slate-400 flex flex-row items-center gap-4">
          <MaterialCommunityIcons
            name="plus"
            size={25}
            style={tw`text-white p-1 rounded-full ${
              type === TransactionType.INCOME
                ? `bg-[${colors.green}]`
                : `bg-[${colors.red}]`
            }`}
          />
          <CustomText
            content={`You dont have any ${type.toLowerCase()}`}
            size="S"
          />
        </View>
      </Link>
    );
  };

  const transactionItens = () => {
    return (
      <FlatList
        className="flex flex-col"
        data={transactionsByMonth.filter((item) => item.type === type)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TransactionItem
            id={item.id}
            amount={item.amount}
            categoryId={item.category_id}
            description={item.description}
            transactionDate={new Date(item.transaction_date)}
            transactionType={type}
          />
        )}
        contentContainerStyle={style("gap-4 pb-1")}
      />
    );
  };

  return (
    <View style={tw`${className || ""}`}>
      <View className="flex flex-row justify-between items-center mb-4">
        <CustomText
          content={type === TransactionType.INCOME ? "Incomes" : "Expenses"}
          size="L"
          className="text-slate-600 uppercase"
        />

        {showSeeMore && (
          <TouchableOpacity
            onPress={() =>
              navigate({ pathname: ROUTES.METRICS, params: { type } })
            }
          >
            <CustomText content="See more" size="S" className="" />
          </TouchableOpacity>
        )}
      </View>

      <View>
        {transactionsByMonth.length !== 0
          ? transactionItens()
          : noTransactions()}
      </View>
    </View>
  );
}
