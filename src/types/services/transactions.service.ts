import { TransactionType } from "@/src/constants/enums";

export interface ITransactionBodyRequest {
  amount: number;
  type: (typeof TransactionType)[keyof typeof TransactionType];
  description: string;
  transaction_date: Date;
  category_id: string;
}

export interface ITransactionParamRequest {
  id: string;
}

export interface ITransactionUpdateService
  extends ITransactionBodyRequest,
    ITransactionParamRequest {}
