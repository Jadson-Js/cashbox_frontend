import React from "react";
import {
  ITransaction,
  transactionService,
} from "../services/transaction.service";

export function useTransaction() {
  const [error, setError] = React.useState<boolean>(false);

  const createTransaction = async (body: ITransaction): Promise<void> => {
    try {
      await transactionService.createTransaction(body);
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  return { error, createTransaction };
}
