import { AxiosResponse } from "axios";
import api from "./axios";

export interface IGetCategoriesRequest {
  token: string;
}
export type IGetCategoriesResponse = ICategoryData[];

export interface ICreateCategorRequest {
  token: string;
  title: string;
  icon_name: string;
  icon_color: string;
}
export type ICreateCategoryResponse = ICategoryData;

export interface ICategoryData {
  id: string;
  title: string;
  icon_name: string;
  icon_color: string;
  created_at: Date;
  updated_at: Date;
}

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
}: ICreateCategorRequest): Promise<AxiosResponse> => {
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
