import { AxiosResponse } from "axios";
import {
  IDeleteCategoryRequest,
  IGetCategoriesRequest,
  IPatchCategoryRequest,
  IPostCategoryRequest,
} from "../types/api/categories.api";
import api from "./axios";

export const getCategories = ({
  token,
}: IGetCategoriesRequest): Promise<AxiosResponse> => {
  return api.get("/categories", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postCategory = ({
  token,
  title,
  icon_name,
  icon_color,
}: IPostCategoryRequest): Promise<AxiosResponse> => {
  return api.post(
    "/categories",
    { title, icon_name, icon_color },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const patchCategory = ({
  token,
  id,
  title,
  icon_name,
  icon_color,
}: IPatchCategoryRequest): Promise<AxiosResponse> => {
  return api.patch(
    "/categories/id/" + id,
    { title, icon_name, icon_color },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const deleteCategory = ({
  token,
  id,
}: IDeleteCategoryRequest): Promise<AxiosResponse> => {
  return api.delete("/categories/id/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
