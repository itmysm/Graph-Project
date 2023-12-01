import React, { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "@/utils/tools/extractColorFromClass";
import ChartCard from "@/components/UI/Charts/ChartCard";
import { genTimeStamp } from "@/utils/tools";
import { ChartHandler } from "@/utils/core/handler";
import { defaultChartConfigs } from "@/utils/config/default.config";

const chartHandler = new ChartHandler();
const defaultChartStyle = {
  width: "100%", height: "280px"
}

export default function LineSmooth({ data, settings }) {
  const initialOptions = defaultChartConfigs.lineSmooth
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [defaultPeriod, setDefaultPeriod] = useState("year");
  const [chartKey, setChartKey] = useState(null);

  useEffect(() => {
    const color = extractColorFromClass("bg-secondary-active");
    setBackgroundColor(color);
  }, []);

  const chartOptions = useMemo(() => {
    if (!data) return initialOptions;

    const updatedOptions = { ...initialOptions };
    updatedOptions.backgroundColor = backgroundColor;
    updatedOptions.xAxis.data = chartHandler.xAxisGenerator(defaultPeriod);

    updatedOptions.series[0].data = chartHandler.dataExtractor(
      data,
      defaultPeriod,
      true
    );

    setChartKey(genTimeStamp());
    return updatedOptions;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, defaultPeriod]);

  const switchTimeFormat = (item = "day") => {
    setDefaultPeriod(item);
  };

  return (
    <ChartCard
      data={data}
      settings={settings}
      setFormatTime={switchTimeFormat}
    >
      <ReactEcharts
        key={chartKey}
        option={chartOptions}
        style={defaultChartStyle}
      ></ReactEcharts>
    </ChartCard>
  );
}
