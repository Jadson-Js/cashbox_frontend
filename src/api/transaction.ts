import { AxiosResponse } from "axios";
import {
  IDeleteTransactionRequest,
  IGetTransactionsRequest,
  IPatchTransactionRequest,
  IPostTransactionRequest,
} from "../types/api/transactions.api";
import api from "./axios";

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
}: IPostTransactionRequest): Promise<AxiosResponse> => {
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

export const patchTransaction = ({
  token,
  id,
  amount,
  type,
  description,
  transaction_date,
  category_id,
}: IPatchTransactionRequest): Promise<AxiosResponse> => {
  return api.patch(
    "/transactions/id/" + id,
    { amount, type, description, transaction_date, category_id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const deleteTransaction = ({
  token,
  id,
}: IDeleteTransactionRequest): Promise<AxiosResponse> => {
  return api.delete("/transactions/id/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
