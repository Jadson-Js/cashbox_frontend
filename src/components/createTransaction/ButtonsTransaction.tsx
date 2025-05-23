import { useTransaction } from "@/src/hooks/useTransaction";
import { ROUTES } from "@/src/routes";
import { ITransactionBodyHook } from "@/src/types/hooks/transactions.hooks";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { CustomButton } from "../ui/CustomButton";

export interface IButtonsTransaction {
  data: ITransactionBodyHook;
  isEditMode?: boolean;
}

export default function ButtonsTransaction({
  data,
  isEditMode = false,
}: IButtonsTransaction) {
  const router = useRouter();
  const { createTransaction } = useTransaction();

  const classButton = "absolute bottom-8 left-0 right-0 mx-8";

  const handleCreate = async () => {
    await createTransaction(data);
    router.push(ROUTES.HOME);
  };

  const handleUpdate = () => {
    console.log("Update");
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  const ButtonsNoEditMode = () => {
    return (
      <CustomButton
        content="Create"
        onPress={handleCreate}
        className={classButton}
      />
    );
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

  return isEditMode ? ButtonsEditMode() : ButtonsNoEditMode();
}
