import { ChartType } from "@/lib/charts/charts.map";
import useResultStore from "@/store/result";
import { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Pagination } from "./options/Pagination";
import { Periods } from "@/types/core";
import { getPeriods } from "@/util/general/getters";
import Selector from "./options/Selector";

type ChartProp = {
  chart: ChartType;
};

export default function Chart({ chart }: ChartProp) {
  const { results } = useResultStore();
  const [periods, setPeriods] = useState<Periods[]>(
    Object.values(getPeriods())
  );

  const [selectedPeriod, setSelectedPeriod] = useState<Periods>("all");
  const [finalResult, setFinalResult] = useState<[] | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [chartOptions, setChartOptions] = useState(chart.defaultOptions);

  let selectedPeriodVar = selectedPeriod;

  const onHandleResult = async () => {
    setLoading(true);
    let filteredList =
      selectedPeriodVar === "all"
        ? results
        : results.filter((msg) => msg.periods.includes(selectedPeriodVar));

    const res = chart.target(filteredList);

    setChartOptions(chart.func(res));
    setLoading(false);
  };

  const onPeriodChange = (period: Periods) => {
    selectedPeriodVar = period;
    setSelectedPeriod(selectedPeriodVar);
    onHandleResult();
  };

  useEffect(() => {
    onHandleResult();
  }, []);

  return (
    <>
      <ReactEcharts option={chartOptions} key={selectedPeriod} />
      <Pagination
        availablePeriods={periods}
        defaultSelectedItem={selectedPeriod}
        periodChanged={onPeriodChange}
      />
    </>
  );
}

export function barSmooth(results) {
  console.log(results);

  Object.keys(results.data).map((item) => results.data["item"]);
}
