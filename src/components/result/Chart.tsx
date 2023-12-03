"use client";

import ReactEcharts from "echarts-for-react";
import { chartsConfig } from "@/constants";
import { CSSProperties, useEffect, useState } from "react";

type ChartProps = {
  config: object;
  messagesProp: [];
  styles?: CSSProperties;
  classes?: string;
  lazyUpdate?: boolean;
  notMerge?: boolean;
};

export default function Chart({ config, messagesProp, styles, classes }: ChartProps) {
  const [messages, setMessages] = useState(messagesProp);

  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <>
      <ReactEcharts className={`${classes}`} option={chartsConfig.pie} notMerge={true} lazyUpdate={true} style={styles} />
    </>
  );
}
