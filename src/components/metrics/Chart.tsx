import { TransactionType } from "@/src/constants/enums";
import { useCategories } from "@/src/context/CategoryContext";
import { useTransactions } from "@/src/context/TransactionContext";
import { filterTransactionsByMonth } from "@/src/utils/filterTransactionsByMonth";
import { MetricsCalcs } from "@/src/utils/metricsCalcs";
import React from "react";
import { FlatList, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import tw from "twrnc";
import { CustomText } from "../ui/CustomText";

export interface IChart {
  selectMonth: number;
  type: TransactionType;
}

// Type definitions
interface PieDataItem {
  value: number;
  color: string;
  gradientCenterColor: string;
  focused?: boolean;
}

interface LegendDataItem {
  title: string;
  color: string;
  value: number;
}

export function Chart({ type, selectMonth }: IChart) {
  const { transactions } = useTransactions();
  const { categories } = useCategories();
  const transactionsByMonth = filterTransactionsByMonth(
    transactions,
    selectMonth,
  );
  const metricsCalcs = MetricsCalcs.execute({
    transactionsByMonth,
    type,
    categories,
  });

  // Data moved to outside of the component to avoid recreation on each render
  const PIE_DATA: PieDataItem[] = metricsCalcs.getPieData();

  const CenterLabel: React.FC = () => {
    return (
      <View className="justify-center items-center">
        <CustomText
          content={metricsCalcs.getSpendingOverIncome().toFixed(0) + "%"}
          size="L"
          className="text-white"
        />
        <CustomText
          content="Spending over income"
          size="M"
          className="text-white text-center capitalize"
        />
      </View>
    );
  };

  const LEGEND_DATA: LegendDataItem[] = metricsCalcs.getLegendData();

  // Components split for better readability
  const LegendDot: React.FC<{ color: string }> = ({ color }) => {
    return <View style={tw`w-4 h-4 rounded-full bg-[${color}]`} />;
  };

  const LegendItem: React.FC<{ item: LegendDataItem }> = ({ item }) => {
    if (item.value === 0) return null;

    return (
      <View className="flex flex-row items-center gap-2 ">
        <LegendDot color={item.color} />
        <CustomText content={`${item.title}: ${item.value}%`} size="S" />
      </View>
    );
  };

  const ChartLegend: React.FC = () => {
    return (
      <FlatList
        data={LEGEND_DATA}
        keyExtractor={(_, index) => index.toString()}
        contentContainerClassName="flex flex-row flex-wrap gap-4 justify-center"
        renderItem={({ item }) => <LegendItem item={item} />}
      />
    );
  };

  return (
    <View>
      <View>
        <View className="flex items-center mb-4">
          <PieChart
            data={PIE_DATA}
            donut
            showGradient
            sectionAutoFocus
            radius={120}
            innerRadius={80}
            innerCircleColor="#232B5D"
            centerLabelComponent={() => <CenterLabel />}
          />
        </View>
        <ChartLegend />
      </View>
    </View>
  );
}
