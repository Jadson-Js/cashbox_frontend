import { IComponent } from "@/src/types/IComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { style } from "twrnc";
import { CustomText } from "../ui/CustomText";

export function TransactionList({ className }: IComponent) {
  const componentStyle = style(className);
  const styleArrow = style("text-white  p-1 bg-[#40C900] rounded-full");

  return (
    <View style={componentStyle}>
      <CustomText
        content="Incomes"
        size="L"
        className="text-slate-600 uppercase mb-4"
      />

      <View className="border border-dashed p-8 rounded-3xl border-slate-400 flex flex-row items-center gap-4">
        <MaterialCommunityIcons name="plus" size={25} style={styleArrow} />
        <CustomText content="You dont have any incomes" size="S" />
      </View>
    </View>
  );
}
