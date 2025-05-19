import { AxiosResponse } from "axios";
import { TransactionType } from "../constants/enums";
import api from "./axios";

export interface IGetTransactionsRequest {
  token: string;
}
export type IGetTransactionsResponse = ITransactionData[];

export interface ICreateTransactionRequest {
  token: string;
  amount: number;
  type: (typeof TransactionType)[keyof typeof TransactionType];
  description: string;
  transaction_date: Date;
  category_id: string;
}
export type ICreateTransactionResponse = ITransactionData;

export interface ITransactionData {
  id: string;
  amount: number;
  type: (typeof TransactionType)[keyof typeof TransactionType];
  description: string;
  transaction_date: Date;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  category_id: string;
}

export const getTransactions = ({
  token,
}: IGetTransactionsRequest): Promise<AxiosResponse> => {
  return api.get("/transactions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postTransaction = ({
  token,
  amount,
  type,
  description,
  transaction_date,
  category_id,
}: ICreateTransactionRequest): Promise<AxiosResponse> => {
  return api.post(
    "/transactions",
    { amount, type, description, transaction_date, category_id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
