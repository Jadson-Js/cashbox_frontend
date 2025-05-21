import { ICategoryData } from "../api/category";
import { ITransactionData } from "../api/transaction";
import { colors } from "../constants/colors";
import { TransactionType } from "../constants/enums";

export interface IMetricsCalcs {
  transactionsByMonth: ITransactionData[];
  type: TransactionType;
  categories: ICategoryData[];
}

export interface IGetColorCategory {
  primary: string;
  secundary: string;
}

export interface IPieDataItem {
  value: number;
  color: string;
  gradientCenterColor: string;
}

export interface ILegendDataItem {
  title: string;
  color: string;
  value: number;
}

export class MetricsCalcs {
  private _transactionsByMonth: ITransactionData[];
  private _type: TransactionType;
  private _categories: ICategoryData[];
  private _transactionsFiltered: ITransactionData[];
  private _totalTransactionsValueByType: number;

  constructor({ transactionsByMonth, type, categories }: IMetricsCalcs) {
    this._transactionsByMonth = transactionsByMonth;
    this._type = type;
    this._categories = categories;

    this._transactionsFiltered = this.transactionsFiltered();
    this._totalTransactionsValueByType =
      this.totalTransactionsValueByType(type);
  }

  private transactionsFiltered(): ITransactionData[] {
    return this._transactionsByMonth.filter((item) => item.type === this._type);
  }

  private totalTransactionsValueByType(type: TransactionType): number {
    return this._transactionsByMonth.reduce((acc, item) => {
      if (item.type === type) return acc + Number(item.amount);
      return acc;
    }, 0);
  }

  static execute({
    transactionsByMonth,
    type,
    categories,
  }: IMetricsCalcs): MetricsCalcs {
    return new MetricsCalcs({ transactionsByMonth, type, categories });
  }

  private getColorCategory(categoryId: string): IGetColorCategory {
    const category = this._categories.find((item) => item.id === categoryId);
    if (!category)
      return { primary: colors.primary, secundary: colors.primary + "40" };

    return {
      primary: category.icon_color,
      secundary: category.icon_color + "40",
    };
  }

  private counterTransactionsValueByCategory(categoryId: string): number {
    const counter = this._transactionsFiltered.reduce((acc, item) => {
      if (item.category_id === categoryId) return acc + Number(item.amount);
      return acc;
    }, 0);

    return counter;
  }

  public getPieData(): IPieDataItem[] {
    const pieData: IPieDataItem[] = [];

    this._categories.forEach((category) => {
      const { primary, secundary } = this.getColorCategory(category.id);
      const counter = this.counterTransactionsValueByCategory(category.id);

      pieData.push({
        value: counter,
        color: primary,
        gradientCenterColor: secundary,
      });
    });

    return pieData;
  }

  public getSpendingOverIncome(): number {
    const incomeCounter = this._transactionsByMonth.reduce((acc, item) => {
      if (item.type === TransactionType.INCOME)
        return acc + Number(item.amount);
      return acc;
    }, 0);

    const expenseCounter = this._transactionsByMonth.reduce((acc, item) => {
      if (item.type === TransactionType.EXPENSE)
        return acc + Number(item.amount);
      return acc;
    }, 0);

    const getSpendingOverIncome = (100 * expenseCounter) / incomeCounter;

    return getSpendingOverIncome;
  }

  public getLegendData(): ILegendDataItem[] {
    const legendData: ILegendDataItem[] = [];

    this._categories.forEach((category) => {
      const { primary } = this.getColorCategory(category.id);

      const value =
        (100 * this.counterTransactionsValueByCategory(category.id)) /
        this._totalTransactionsValueByType;

      legendData.push({
        title: category.title,
        color: primary,
        value,
      });
    });

    return legendData;
  }
}
