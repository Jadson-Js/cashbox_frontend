import React from "react";
import { useTransactions } from "../context/TransactionContext";
import { transactionService } from "../services/transaction.service";
import { ITransactionBodyHook } from "../types/hooks/transactions.hooks";
import { ITransactionUpdateService } from "../types/services/transactions.service";

export function useTransaction() {
  const { setUpdate } = useTransactions();
  const [error, setError] = React.useState<boolean>(false);

  const createTransaction = async (
    body: ITransactionBodyHook,
  ): Promise<void> => {
    try {
      await transactionService.createTransaction({
        ...body,
        transaction_date: new Date(body.transaction_date),
      });

      setUpdate(true);
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  const updateTransaction = async (
    body: ITransactionUpdateService,
  ): Promise<void> => {
    try {
      await transactionService.updateTransaction(body);
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  return { error, createTransaction, updateTransaction };
}
