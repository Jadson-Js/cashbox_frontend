import React from "react";
import { TransactionType } from "../constants/enums";
import {
  ITransaction,
  transactionService,
} from "../services/transaction.service";

export function useAuth() {
  const [data, setData] = React.useState<ITransaction>({
    amount: 500,
    type: TransactionType.INCOME,
    description: "",
    transaction_date: new Date(),
    category_id: "",
  });
  const [error, setError] = React.useState<boolean>(false);

  const createTransaction = async (body: ITransaction): Promise<void> => {
    try {
      const response = await transactionService.createTransaction(body);

      setData(response);
    } catch (error) {
      setError(true);
      throw error;
    }
  };

  return { data, error, createTransaction };
}
