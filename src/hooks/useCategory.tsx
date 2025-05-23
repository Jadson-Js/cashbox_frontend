import React from "react";
import { useCategories } from "../context/CategoryContext";
import { categoryService } from "../services/category.service";
import { ICategoryData } from "../types/api/categories.api";
import { ICategoryUpdateHook } from "../types/hooks/categories.hooks";
import {
  ICategoryBodyRequest,
  ICategoryParamRequest,
} from "../types/services/categories.service";

export function useCategory() {
  const [error, setError] = React.useState<boolean>(false);
  const { setUpdate } = useCategories();

  const createCategory = async (
    body: ICategoryBodyRequest,
  ): Promise<ICategoryData> => {
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

  const updateCategory = async (body: ICategoryUpdateHook): Promise<void> => {
    try {
      await categoryService.updateCategory(body);

      setUpdate(true);
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  const deleteCategory = async (body: ICategoryParamRequest): Promise<void> => {
    try {
      await categoryService.deleteCategory(body);

      setUpdate(true);
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  return { error, createCategory, updateCategory, deleteCategory };
}
