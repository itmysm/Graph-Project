import { ChartType } from "@/lib/charts/charts.map";
import useResultStore from "@/store/result";
import { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Pagination } from "./options/Pagination";
import { Periods } from "@/types/core";
import { getPeriods } from "@/util/general/getters";
import { FilterResult } from "./FilterResult";
import { ChartFilter } from "@/types/charts";

type ChartProp = {
  chart: ChartType;
};

export default function Chart({ chart }: ChartProp) {
  const { results, filters } = useResultStore();
  const [periods, setPeriods] = useState<Periods[]>(
    Object.values(getPeriods())
  );

  const [selectedPeriod, setSelectedPeriod] = useState<Periods>("all");
  const [loading, setLoading] = useState<Boolean>(true);
  const [chartOptions, setChartOptions] = useState(chart.defaultOptions);
  const [chartGenId, setChartGenId] = useState(Math.random());
  const [filter, setFilter] = useState<ChartFilter>({
    key: "topUsers",
    value: [],
  });
  let selectedPeriodVar = selectedPeriod;

  const onHandleResult = async (incomingFilter = filter) => {
    setChartGenId(Math.random());
    setLoading(true);
    let filteredList =
      selectedPeriodVar === "all"
        ? results
        : results.filter((msg) => msg.periods.includes(selectedPeriodVar));

    chart.target(filteredList, incomingFilter);
    setLoading(false);
  };

  useEffect(() => {
    console.log("filters updated");
  }, [filters]);

  const onPeriodChange = (period: Periods) => {
    selectedPeriodVar = period;
    setSelectedPeriod(selectedPeriodVar);
    onHandleResult();
  };

  useEffect(() => {
    onHandleResult();
  }, []);

  const applyFilters = (incomingFilter: ChartFilter) => {
    setFilter(incomingFilter);
    onHandleResult(incomingFilter);
  };

  return (
    <>
      <ReactEcharts option={chartOptions} key={chartGenId} />

      <div className="flex justify-between items-center">
        <Pagination
          availablePeriods={periods}
          defaultSelectedItem={selectedPeriod}
          periodChanged={onPeriodChange}
        />

        <FilterResult
          applyFilter={(filter) => applyFilters(filter)}
          rules={chart.rules}
        />
      </div>
    </>
  );
}
