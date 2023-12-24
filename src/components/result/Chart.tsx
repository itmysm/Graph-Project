// "use client";

// import { useEffect, useState } from "react";
// import ReactEcharts from "echarts-for-react";
// import { CSSProperties, useMemo } from "react";
// import { StructureOfChartOptions, ChartStructure, AvailableCharts } from "@/types/charts";
// import useResultStore from "@/store/result";
// import { MessagesStructure } from "@/types/core";
// import { Button, Divider } from "@nextui-org/react";
// import { Periods } from "@/types/core";
// import { ChartResultType, chartsConfig } from "@/constants";
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
import { StructureOfChartOptions, ChartStructure, AvailableCharts } from "@/types/charts";
import { MessagesStructure } from "@/types/core";
import { CSSProperties, useMemo } from "react";
import { ChartResultType, chartsConfig } from "@/constants";

type ChartProps = {
  chart: ChartStructure;
  mainflow: (data: MessagesStructure[]) => ChartResultType;
  styles?: CSSProperties;
  classes?: string;
};

export default function Chart({ chart, styles, classes, mainflow }: ChartProps) {
  const { exportedMessages } = useResultStore();

  useMemo(() => {

  }, [exportedMessages]);

  return <>simple</>;
}
