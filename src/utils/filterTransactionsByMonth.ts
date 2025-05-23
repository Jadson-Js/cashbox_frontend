import { IGetTransactionsResponse } from "../types/api/transactions.api";

export function filterTransactionsByMonth(
  transactions: IGetTransactionsResponse,
  month: number,
) {
  return transactions.filter((item) => {
    const date = new Date(item.transaction_date);
    return date.getMonth() === month;
  });
}
