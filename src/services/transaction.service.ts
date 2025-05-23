import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  deleteTransaction,
  getTransactions,
  patchTransaction,
  postTransaction,
} from "../api/transaction";
import {
  IGetTransactionsResponse,
  IPatchTransactionResponse,
  IPostTransactionResponse,
} from "../types/api/transactions.api";
import {
  ITransactionBodyRequest,
  ITransactionParamRequest,
  ITransactionUpdateService,
} from "../types/services/transactions.service";

class TransactionService {
  public async getTransactions(): Promise<IGetTransactionsResponse[]> {
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
    body: ITransactionBodyRequest,
  ): Promise<IPostTransactionResponse> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await postTransaction({ ...body, token });

      if (response.status !== 201) {
        throw new Error("Post transactions failed");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async updateTransaction(
    body: ITransactionUpdateService,
  ): Promise<IPatchTransactionResponse> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await patchTransaction({ ...body, token });

      if (response.status !== 200) {
        throw new Error("Update transactions failed");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async deleteTransaction(
    body: ITransactionParamRequest,
  ): Promise<void> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await deleteTransaction({ ...body, token });

      if (response.status !== 204) {
        throw new Error("Delete transactions failed");
      }
    } catch (error: any) {
      throw error;
    }
  }
}

export const transactionService = new TransactionService();
