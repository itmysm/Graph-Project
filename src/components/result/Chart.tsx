"use client";

import ReactEcharts from "echarts-for-react";
import { CSSProperties, useMemo } from "react";
import { ChartOptions, ChartStructure } from "@/types/charts";
import useResultStore from "@/store/result";

type ChartProps = {
  chart: ChartStructure;
  styles?: CSSProperties;
  classes?: string;
};

export default function Chart({ chart, styles, classes }: ChartProps) {
  const { exportedMessages } = useResultStore();

  const chartOptions = useMemo(() => {
    const updatedOptions = { ...chart.options };
  }, []);

  return (
    <>
      <ReactEcharts className={`${classes}`} option={chart.options} style={styles} />
    </>
  );
}
