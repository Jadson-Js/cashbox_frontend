import { colors } from "@/src/constants/colors";
import { shadow } from "@/src/constants/styles";
import { ROUTES } from "@/src/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, usePathname, useRouter } from "expo-router";
import { View } from "react-native";
import tw from "twrnc";
import { CustomText } from "../ui/CustomText";

export interface ICategoryItem {
  id: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: (typeof colors)[keyof typeof colors];
  title: string;
}

export function CategoryItem({
  id,
  iconName,
  iconColor,
  title,
}: ICategoryItem) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View
      style={[
        shadow,
        tw`flex flex-row  items-center  p-4 rounded-3xl border border-slate-200 bg-white`,
      ]}
    >
      <Link
        href={{ pathname: ROUTES.TRANSACTION, params: { category_id: id } }}
        className="flex flex-row items-center gap-4 flex-1"
      >
        <View
          style={tw`bg-[${iconColor + 40}]`}
          className="rounded-3xl p-2 flex-shrink-0"
        >
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            style={tw`text-[${iconColor}]`}
          />
        </View>
        <CustomText content={title} size="S" className="text-slate-600" />
      </Link>

      <Link
        href={{ pathname: ROUTES.CREATE_CATEGORY, params: { category_id: id } }}
      >
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={25}
          color="#94a3b8"
        />
      </Link>
    </View>
  );
}
