export interface ICategoryBodyHook {
  title: string;
  icon_name: string;
  icon_color: string;
}

export interface ICategoryParamsHook {
  id: string;
}

export interface ICategoryUpdateHook
  extends ICategoryBodyHook,
    ICategoryParamsHook {}
