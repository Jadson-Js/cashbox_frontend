import React from "react";
import { ICategoryData } from "../api/category";
import { useCategories } from "../context/CategoryContext";
import { ICategory, categoryService } from "../services/category.service";

export function useCategory() {
  const [error, setError] = React.useState<boolean>(false);
  const { setUpdate } = useCategories();

  const createCategory = async (body: ICategory): Promise<ICategoryData> => {
    try {
      const category = await categoryService.createCategory(body);

      setUpdate(true);

      return category;
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  return { error, createCategory };
}
