import React from "react";
import { View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { style } from "twrnc";
import { CustomText } from "../ui/CustomText";

// Type definitions
type PieDataItem = {
  value: number;
  color: string;
  gradientCenterColor: string;
  focused?: boolean;
};

type LegendDataItem = {
  title: string;
  color: string;
  value: number;
};

// Data moved to outside of the component to avoid recreation on each render
const PIE_DATA: PieDataItem[] = [
  {
    value: 47,
    color: "#009FFF",
    gradientCenterColor: "#006DFF",
    focused: true,
  },
  { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
  { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
  { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
];

const LEGEND_DATA: LegendDataItem[] = [
  {
    title: "Excellent",
    color: "#006DFF",
    value: 47,
  },
  {
    title: "Okay",
    color: "#3BE9DE", // Fixed the color mapping to match pie chart
    value: 40,
  },
  {
    title: "Good",
    color: "#8F80F3", // Fixed the color mapping to match pie chart
    value: 16, // Fixed to match pie chart data
  },
  {
    title: "Poor",
    color: "#FF7F97",
    value: 3,
  },
];

// Components split for better readability
const LegendDot: React.FC<{ color: string }> = ({ color }) => {
  const styleDot = style(`w-4 h-4 rounded-full bg-[${color}]`);
  return <View style={styleDot} />;
};

const LegendItem: React.FC<{ item: LegendDataItem }> = ({ item }) => {
  return (
    <View className="flex flex-row items-center gap-4 ">
      <LegendDot color={item.color} />
      <CustomText content={`${item.title}: ${item.value}%`} size="S" />
    </View>
  );
};

const ChartLegend: React.FC = () => {
  return (
    <View className="flex flex-row justify-center items-center gap-4 flex-wrap">
      {LEGEND_DATA.map((item, index) => (
        <LegendItem key={index} item={item} />
      ))}
    </View>
  );
};

const CenterLabel: React.FC = () => {
  return (
    <View className="justify-center items-center">
      <CustomText content="47%" size="L" className="text-white" />
      <CustomText content="Excellent" size="M" className="text-white" />
    </View>
  );
};

export function Chart() {
  return (
    <View>
      <View>
        <View className="items-center">
          <PieChart
            data={PIE_DATA}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor="#232B5D"
            centerLabelComponent={() => <CenterLabel />}
          />
        </View>
        <ChartLegend />
      </View>
    </View>
  );
}
