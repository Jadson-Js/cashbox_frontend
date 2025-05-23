import React from "react";
import { useTransactions } from "../context/TransactionContext";
import { transactionService } from "../services/transaction.service";
import {
  ITransactionBodyHook,
  ITransactionUpdateHook,
} from "../types/hooks/transactions.hooks";
import { ITransactionParamRequest } from "../types/services/transactions.service";

export function useTransaction() {
  const { setUpdate } = useTransactions();
  const [error, setError] = React.useState<boolean>(false);

  const createTransaction = async (
    body: ITransactionBodyHook,
  ): Promise<void> => {
    try {
      console.log(body);
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
    body: ITransactionUpdateHook,
  ): Promise<void> => {
    try {
      await transactionService.updateTransaction({
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

  const deleteTransaction = async (
    body: ITransactionParamRequest,
  ): Promise<void> => {
    try {
      await transactionService.deleteTransaction(body);

      setUpdate(true);
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  return { error, createTransaction, updateTransaction, deleteTransaction };
}
