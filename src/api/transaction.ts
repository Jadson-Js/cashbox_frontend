import { AxiosResponse } from "axios";
import api from "./axios";

export interface IGetTransactionsRequest {
  token: string;
}

export type IGetTransactionsResponse = ITransaction[];

export interface ITransaction {
  id: string;
  amount: number;
  type: string;
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
