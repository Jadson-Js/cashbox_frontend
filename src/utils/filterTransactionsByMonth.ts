import { ITransaction } from "../api/transaction";

export function filterTransactionsByMonth(
  transactions: ITransaction[],
  month: number,
) {
  return transactions.filter((item) => {
    const date = new Date(item.transaction_date);
    return date.getMonth() === month;
  });
}
