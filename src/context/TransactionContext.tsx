import { createContext, useContext, useEffect, useState } from "react";
import { IGetTransactionsResponse } from "../api/transaction";
import { transactionService } from "../services/transaction.service";

interface TransactionsContextType {
  transactions: IGetTransactionsResponse;
  loading: boolean;
  setUpdate: (value: boolean) => void;
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
  undefined,
);

export function TransactionsProvider({ children }: any) {
  const [transactions, setTransactions] = useState<IGetTransactionsResponse>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    // Simule ou chame sua API real aqui
    async function fetchTransactions() {
      try {
        const data = await transactionService.getTransactions();

        setTransactions(data);
      } catch (error) {
        console.error("Search for transactions failed:", error);
      } finally {
        setLoading(false);
      }
    }

    console.log("update", update);
    fetchTransactions();

    setUpdate(false);
  }, [update]);

  return (
    <TransactionsContext.Provider value={{ transactions, loading, setUpdate }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (context === undefined) {
    throw new Error(
      "useTransactions must be used within a TransactionsProvider",
    );
  }
  return context;
}
