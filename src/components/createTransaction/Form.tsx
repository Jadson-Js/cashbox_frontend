import { ICategoryData } from "@/src/api/category";
import { useCategories } from "@/src/context/CategoryContext";
import { ROUTES } from "@/src/routes";
import { ITransactionBodyHook } from "@/src/types/hooks/transactions.hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGlobalSearchParams, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { CustomInputDate } from "../ui/CustomInputDate";
import { CustomInputNumber } from "../ui/CustomInputNumber";
import { CustomInputText } from "../ui/CustomInputText";
import { CustomText } from "../ui/CustomText";

export interface IForm {
  data: ITransactionBodyHook;
  setData: (value: ITransactionBodyHook) => void;
  className?: string;
}

export function Form({ data, setData, className }: IForm) {
  const router = useRouter();
  const params = useGlobalSearchParams();
  const { categories } = useCategories();
  const [selectCategory, setSelectCategory] = React.useState<
    ICategoryData | undefined
  >(undefined);

  React.useEffect(() => {
    if (!params.category_id || categories.length === 0) return;

    const foundCategory = categories.find(
      (item) => item.id === params.category_id,
    );
    if (!foundCategory) return;

    setSelectCategory(foundCategory);

    if (data.category_id !== params.category_id) return;

    setData({
      ...data,
      category_id: foundCategory.id,
    });
  }, [params, categories.length]);

  return (
    <View style={tw`${className || ""}`}>
      <CustomInputNumber
        placeholder="$0,00"
        className="text-3xl font-bold text-center mb-12"
        value={data.amount}
        setValue={(value) => setData({ ...data, amount: value })}
      />

      <View className="flex flex-col gap-4 ">
        <View className="flex flex-row justify-between items-center border-b border-slate-200 pb-4 ">
          <CustomText content="Category" size="MB" className="text-slate-600" />
          <TouchableOpacity
            onPress={() =>
              router.navigate({
                pathname: ROUTES.SELECT_CATEGORY,
                params: { transaction_id: params.transaction_id },
              })
            }
            className="flex flex-row items-center "
          >
            <CustomText content={selectCategory?.title || "Chossen"} size="M" />
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              style={tw`text-slate-400 w-8 h-8`}
            />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between items-center border-b border-slate-200 pb-4 ">
          <CustomText content="Date" size="MB" className="text-slate-600" />

          <CustomInputDate
            value={data.transaction_date}
            setValue={(value) => setData({ ...data, transaction_date: value })}
          />
        </View>

        <View className="flex flex-col items-start border-b border-slate-200 pb-4 gap-2 max-h-60">
          <CustomText
            content="Description"
            size="MB"
            className="text-slate-600"
          />

          <CustomInputText
            placeholder="Digite your description here"
            className=""
            value={data.description}
            setValue={(value) => setData({ ...data, description: value })}
          />
        </View>
      </View>
    </View>
  );
}
