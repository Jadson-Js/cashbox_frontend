import { TransactionType } from "../../constants/enums";

// GET TRANSACTIONS
export interface IGetTransactionsRequest {
  token: string;
}
export type IGetTransactionsResponse = ITransactionData[];

// POST TRANSACTIONS
export interface IPostTransactionRequest {
  token: string;
  amount: number;
  type: (typeof TransactionType)[keyof typeof TransactionType];
  description: string;
  transaction_date: Date;
  category_id: string;
}
export type IPostTransactionResponse = ITransactionData;

// PATCH TRANSACTIONS
export interface IPatchTransactionRequest {
  token: string;
  id: string;
  amount: number;
  type: (typeof TransactionType)[keyof typeof TransactionType];
  description: string;
  transaction_date: Date;
  category_id: string;
}
export type IPatchTransactionResponse = ITransactionData;

// TRANSACTION DATA
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
