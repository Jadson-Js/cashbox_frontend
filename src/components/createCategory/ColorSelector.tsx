import { colors } from "@/src/constants/colors";
import { FlatList, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { CustomText } from "../ui/CustomText";

export interface IColorSelector {
  setIconColor: (value: (typeof colors)[keyof typeof colors]) => void;
}

export function ColorSelector({ setIconColor }: IColorSelector) {
  return (
    <View>
      <CustomText content="Color" size="L" className="mb-4 text-slate-600" />

      <FlatList
        data={Object.values(colors)}
        numColumns={4}
        keyExtractor={(item) => item}
        contentContainerStyle={tw`gap-y-4 px-4 pt-2`} // espaçamento entre linhas
        columnWrapperStyle={tw`justify-between mb-4`} // espaçamento horizontal entre colunas
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setIconColor(item)}
            style={[tw`w-10 h-10 rounded-full`, { backgroundColor: item }]}
          />
        )}
      />
    </View>
  );
}
