export interface ICategoryBodyRequest {
  title: string;
  icon_name: string;
  icon_color: string;
}

export interface ICategoryParamRequest {
  id: string;
}

export interface ICategoryUpdateService
  extends ICategoryBodyRequest,
    ICategoryParamRequest {}
