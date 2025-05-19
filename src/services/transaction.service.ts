import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getTransactions,
  ICreateTransactionResponse,
  IGetTransactionsResponse,
  postTransaction,
} from "../api/transaction";
import { TransactionType } from "../constants/enums";

export interface ITransaction {
  amount: number;
  type: (typeof TransactionType)[keyof typeof TransactionType];
  description: string;
  transaction_date: Date;
  category_id: string;
}

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

  public async createTransaction(
    body: ITransaction,
  ): Promise<ICreateTransactionResponse> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await postTransaction({ token, ...body });

      if (response.status !== 201) {
        throw new Error("Post transactions failed");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}

export const transactionService = new TransactionService();
