import { colors } from "@/src/constants/colors";
import { ROUTES } from "@/src/routes";
import { ITransaction } from "@/src/services/transaction.service";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { CustomInputDate } from "../ui/CustomInputDate";
import { CustomInputNumber } from "../ui/CustomInputNumber";
import { CustomInputText } from "../ui/CustomInputText";
import { CustomText } from "../ui/CustomText";

export interface IForm {
  data: ITransaction;
  setData: (value: ITransaction) => void;
  className?: string;
}

export function Form({ data, setData, className }: IForm) {
  const router = useRouter();

  const handleChosenCategory = () => {
    router.navigate(ROUTES.SELECT_CATEGORY);
  };

  return (
    <View style={tw`${className || ""}`}>
      <CustomInputNumber
        placeholder="R$0,00"
        className={`text-3xl font-bold text-center mb-12 text-[${colors.primary}]`}
        value={data.amount}
        setValue={(value) => setData({ ...data, amount: Number(value) })}
      />

      <View className="flex flex-col gap-4 ">
        <View className="flex flex-row justify-between items-center border-b border-slate-200 pb-4 ">
          <CustomText content="Category" size="MB" className="text-slate-600" />
          <TouchableOpacity
            onPress={handleChosenCategory}
            className="flex flex-row items-center "
          >
            <CustomText content="Chossen" size="M" className="uppercase " />
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              style={tw`text-slate-400 w-8 h-8`}
            />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between items-center border-b border-slate-200 pb-4 ">
          <CustomText content="Date" size="MB" className="text-slate-600" />

          <CustomInputDate />
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
          />
        </View>
      </View>
    </View>
  );
}
