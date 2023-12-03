"use client";

import ReactEcharts from "echarts-for-react";
import { chartsConfig } from "@/constants";
import { CSSProperties } from "react";

type ChartProps = {
  config: object;
  styles?: CSSProperties;
  classes?: string;
  lazyUpdate?: boolean;
  notMerge?: boolean;
};

export default function Chart({ config, styles, classes }: ChartProps) {
  return (
    <>
      <ReactEcharts className={`${classes}`} option={chartsConfig.pie} notMerge={true} lazyUpdate={true} style={styles} />
    </>
  );
}
