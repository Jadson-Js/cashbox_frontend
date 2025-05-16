import { AxiosResponse } from "axios";
import api from "./axios";

export interface IGetCategoriesRequest {
  token: string;
}

export type IGetCategoriesResponse = ICategory[];

export interface ICategory {
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
