import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCategories, IGetCategoriesResponse } from "../api/category";

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
}

export const categoryService = new CategoryService();
