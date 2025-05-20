import { colors } from "@/src/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { CustomText } from "../ui/CustomText";

export interface IIconSelector {
  setIconName: (value: keyof typeof MaterialCommunityIcons.glyphMap) => void;
}

export function IconSelector({ setIconName }: IIconSelector) {
  const icons: (keyof typeof MaterialCommunityIcons.glyphMap)[] = [
    "account",
    "car",
    "shopping",
    "food",
    "store",
    "cellphone",
    "face-man",
    "home",
    "bike",
    "email",
    "calendar",
    "camera",
  ];

  return (
    <View>
      <CustomText content="Icon" size="L" className="mb-4 text-slate-600" />

      <FlatList
        data={icons}
        numColumns={4}
        keyExtractor={(item) => item}
        contentContainerStyle={tw`gap-y-4 px-4 pt-2`} // espaçamento entre linhas
        columnWrapperStyle={tw`justify-between mb-4`} // espaçamento horizontal entre colunas
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setIconName(item)}>
            <MaterialCommunityIcons
              name={item}
              size={50}
              style={tw`text-[${colors.black}]`}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
