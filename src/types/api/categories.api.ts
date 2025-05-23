// GET CATEGORIES
export interface IGetCategoriesRequest {
  token: string;
}
export type IGetCategoriesResponse = ICategoryData[];

// POST CATEGORIES
export interface IPostCategoryRequest {
  token: string;
  title: string;
  icon_name: string;
  icon_color: string;
}
export type IPostCategoryResponse = ICategoryData;

// PATCH CATEGORIES
export interface IPatchCategoryRequest {
  token: string;
  id: string;
  title: string;
  icon_name: string;
  icon_color: string;
}
export type IPatchCategoryResponse = ICategoryData;

// DELETE CATEGORIES
export interface IDeleteCategoryRequest {
  token: string;
  id: string;
}

// CATEGORY DATA
export interface ICategoryData {
  id: string;
  title: string;
  icon_name: string;
  icon_color: string;
  created_at: Date;
  updated_at: Date;
}
