import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTransactions, IGetTransactionsResponse } from "../api/transaction";

class TransactionService {
  public async getTransactions(): Promise<IGetTransactionsResponse> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await getTransactions({ token });

      if (response.status !== 200) {
        throw new Error("Get transactions failed");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}

export const transactionService = new TransactionService();
