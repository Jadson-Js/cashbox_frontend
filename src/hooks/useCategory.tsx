import React from "react";
import { ICategoryData } from "../api/category";
import { ICategory, categoryService } from "../services/category.service";

export function useCategory() {
  const [error, setError] = React.useState<boolean>(false);

  const createCategory = async (body: ICategory): Promise<ICategoryData> => {
    try {
      const category = await categoryService.createCategory(body);
      return category;
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  return { error, createCategory };
}
