import { colors } from "@/src/constants/colors";
import { useCategory } from "@/src/hooks/useCategory";
import { ROUTES } from "@/src/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { CustomButton } from "../ui/CustomButton";

export interface IButtonsCategory {
  category_id: string;
  title: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: (typeof colors)[keyof typeof colors];
  isEditMode?: boolean;
}

export default function ButtonsCategory({
  category_id,
  title,
  iconName,
  iconColor,
  isEditMode = false,
}: IButtonsCategory) {
  const router = useRouter();
  const { updateCategory, deleteCategory } = useCategory();

  const classButton = "absolute bottom-8 left-0 right-0 mx-8";

  const handleUpdate = async () => {
    if (!category_id) return;
    const body = {
      id: category_id,
      title,
      icon_name: iconName,
      icon_color: iconColor,
    };

    await updateCategory(body);

    router.push({
      pathname: ROUTES.TRANSACTION,
      params: {
        category_id: category_id,
      },
    });
  };

  const handleDelete = async () => {
    if (!category_id) return;
    await deleteCategory({ id: category_id });
    router.push(ROUTES.HOME);
  };

  const ButtonsEditMode = () => {
    return (
      <View className={classButton + " flex flex-col gap-4"}>
        <CustomButton content="Update" onPress={handleUpdate} />

        <CustomButton
          content="Delete"
          onPress={handleDelete}
          isOutline={true}
        />
      </View>
    );
  };

  return isEditMode && ButtonsEditMode();
}
