import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  deleteCategory,
  getCategories,
  patchCategory,
  postCategory,
} from "../api/category";
import {
  IGetCategoriesResponse,
  IPatchCategoryRequest,
  IPostCategoryResponse,
} from "../types/api/categories.api";
import {
  ICategoryParamRequest,
  ICategoryUpdateService,
} from "../types/services/categories.service";

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

  public async createCategory(body: ICategory): Promise<IPostCategoryResponse> {
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

  public async updateCategory(
    body: ICategoryUpdateService,
  ): Promise<IPatchCategoryRequest> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await patchCategory({ ...body, token });

      if (response.status !== 200) {
        throw new Error("Update categories failed");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async deleteCategory(body: ICategoryParamRequest): Promise<void> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await deleteCategory({ ...body, token });

      if (response.status !== 204) {
        throw new Error("Delete categories failed");
      }
    } catch (error: any) {
      throw error;
    }
  }
}

export const categoryService = new CategoryService();
