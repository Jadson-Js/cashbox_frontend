import { TransactionType } from "@/src/constants/enums";

export interface ITransactionBodyHook {
  amount: number;
  type: (typeof TransactionType)[keyof typeof TransactionType];
  description: string;
  transaction_date: string;
  category_id: string;
}

export interface ITransactionParamsHook {
  id: string;
}

export interface ITransactionUpdateHook
  extends ITransactionParamsHook,
    ITransactionBodyHook {}
