"use client";

import ReactEcharts from "echarts-for-react";
import { chartsConfig } from "@/constants";
import { CSSProperties, useEffect, useState } from "react";
import { ChartStructure } from "@/types/constant";

type ChartProps = {
  chart: ChartStructure;
  messagesProp: [];
  styles?: CSSProperties;
  classes?: string;
};

export default function Chart({ chart, messagesProp, styles, classes }: ChartProps) {
  const [messages, setMessages] = useState(messagesProp);

  useEffect(() => {}, [messages]);
  return (
    <>
      <ReactEcharts className={`${classes}`} option={chart.options} style={styles} />
    </>
  );
}
