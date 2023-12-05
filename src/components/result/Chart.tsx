"use client";

import ReactEcharts from "echarts-for-react";
import { CSSProperties, useMemo } from "react";
import { StructureOfChartOptions, ChartStructure } from "@/types/charts";
import useResultStore from "@/store/result";
import { MessagesStructure } from "@/types/core";

type ChartProps = {
  chart: ChartStructure;
  target: (data: MessagesStructure[]) => void;
  styles?: CSSProperties;
  classes?: string;
};

export default function Chart({ chart, styles, classes, target }: ChartProps) {
  const { exportedMessages } = useResultStore();
  console.log(target(exportedMessages));

  const chartOptions = useMemo(() => {
    const updatedOptions = { ...chart.options };
  }, []);

  return (
    <>
      <ReactEcharts className={`${classes}`} option={chart.options} style={styles} />
    </>
  );
}
