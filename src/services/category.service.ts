import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getCategories,
  ICreateCategoryResponse,
  IGetCategoriesResponse,
  postCategory,
} from "../api/category";

export interface ICategory {
  title: string;
  icon_name: string;
  icon_color: string;
}

class CategoryService {
  public async getCategories(): Promise<IGetCategoriesResponse> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await getCategories({ token });

      if (response.status !== 200) {
        throw new Error("Get categories failed");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async createCategory(
    body: ICategory,
  ): Promise<ICreateCategoryResponse> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const data = {
        token,
        ...body,
      };

      const response = await postCategory(data);

      if (response.status !== 201) {
        throw new Error("Post category failed");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}

export const categoryService = new CategoryService();
