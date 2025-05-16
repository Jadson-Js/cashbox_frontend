import { createContext, useContext, useEffect, useState } from "react";
import { IGetCategoriesResponse } from "../api/category";
import { categoryService } from "../services/category.service";

interface CategoriesContextType {
  categories: IGetCategoriesResponse;
  loading: boolean;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined,
);

export function CategoriesProvider({ children }: any) {
  const [categories, setCategories] = useState<IGetCategoriesResponse>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule ou chame sua API real aqui
    async function fetchCategories() {
      try {
        const data = await categoryService.getCategories();

        setCategories(data);
      } catch (error) {
        console.error("Search for categories failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, loading }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
}
