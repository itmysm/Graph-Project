// "use client";

import { useEffect, useState } from "react";
// import ReactEcharts from "echarts-for-react";
// import { CSSProperties, useMemo } from "react";
// import { StructureOfChartOptions, ChartStructure, AvailableCharts } from "@/types/charts";
// import { MessagesStructure } from "@/types/core";
// import { Button, Divider } from "@nextui-org/react";
// import { Periods } from "@/types/core";
// import {  chartsConfig } from "@/constants";
// import { Pagination } from "@/components/result/options/Pagination";

// type ChartProps = {
//   chart: ChartStructure;
//   mainflow: (data: MessagesStructure[]) => ChartResultType;
//   styles?: CSSProperties;
//   classes?: string;
// };

// export default function Chart({ chart, styles, classes, mainflow }: ChartProps) {
//   const { exportedMessages } = useResultStore();
//   const [result, setResult] = useState<ChartResultType["data"]>(null);
//   const [periods, setPeriods] = useState<Periods[]>(["all"]);
//   const [selectedPeriod, setSelectedPeriod] = useState<Periods>("all");

//   useEffect(() => {
//     const fetchData = async () => {
//       const finalResult = await mainflow(exportedMessages);
//       setResult(finalResult.data);
//       setPeriods(finalResult.periods);
//     };

//     fetchData();
//   }, [mainflow, exportedMessages]);

//   const onPeriodChange = (period: Periods) => {
//     setSelectedPeriod(period);
//   };

//   const chartOptions = useMemo(() => {
//     const updatedOptions = extractTheCorrectPathBaseOnChart(chart.chart, result);
//   }, [selectedPeriod]);

//   return (
//     <>
//       <ReactEcharts className={`${classes}`} option={chart.options} style={styles} />
//       <Pagination availablePeriods={periods} defaultSelectedItem={selectedPeriod} periodChanged={onPeriodChange} />
//     </>
//   );
// }

// function extractTheCorrectPathBaseOnChart(chartName: AvailableCharts, updatedData) {
//   let selectedOption;
//   switch (chartName) {
//     case "pie":
//       return (chartsConfig["pie"].series[0].data = updatedOptions);
//       break;

//     default:
//       break;
//   }
// }

import useResultStore from "@/store/result";
import useAppStore from "@/store/app";
import { TargetCharts } from "@/types/charts";
import EChartsReact from "echarts-for-react";
import { chartsConfig } from "@/constants";

type ChartStatus = "initial" | "initialized" | "disabled";
type ChartProps = {
  target: string;
};

export default function Chart({ target }: ChartProps) {
  const { results } = useResultStore();
  const [chartStatus, setChartStatus] = useState<ChartStatus>("initial");

  useEffect(() => {
    let localChartStatus: ChartStatus = chartStatus;

    if (results[target]) {
      localChartStatus = "initialized";
      barSmooth(results[target]);
    } else {
      localChartStatus = "disabled";
    }

    setChartStatus(localChartStatus);
  }, [results]);

  return <>simple</>;
}

export function barSmooth(results) {
  console.log(results);

  Object.keys(results.data).map((item) => results.data["item"]);
}
