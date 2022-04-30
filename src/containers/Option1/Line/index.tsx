import React from "react";
import { Line } from "@ant-design/plots";

export interface LineChartProps {
  data: any[];
}

export default function LineChart({ data }: LineChartProps) {
  const config = {
    data,
    padding: 50,
    xField: "Date",
    yField: "scales",
    xAxis: {
      tickCount: 5,
    },
  };
  return <Line {...config} />;
}
