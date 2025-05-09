import { IComponent } from "@/src/types/IComponent";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "twrnc";

import { useRouter } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import { CustomText } from "../ui/CustomText";

export function Header({ className }: IComponent) {
  const router = useRouter();
  const componentStyle = style(
    `flex flex-row justify-between items-center`,
    className,
  );
  const styleArrow = style("text-slate-400 w-8 h-8");

  const handleExit = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate("/(tabs)/home");
    }
  };

  return (
    <View style={componentStyle}>
      <TouchableOpacity onPress={handleExit}>
        <MaterialIcons name="close" size={30} style={styleArrow} />
      </TouchableOpacity>

      <CustomText content="Category" size="MB" className="text-slate-600" />

      <TouchableOpacity
        onPress={() => navigate("/(tabs)/home/CreateCategoryScreen")}
      >
        <CustomText content="+ New" size="M" />
      </TouchableOpacity>
    </View>
  );
}
