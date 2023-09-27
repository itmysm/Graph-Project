import React, { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "@/utils/tools/extractColorFromClass";
import ChartCard from "@/components/UI/Charts/ChartCard";
import { genTimeStamp } from "@/utils/tools";
import { timeConstants } from "@/utils/constants";
import { ChartHandler } from "@/utils/core/handler";

const chartHandler = new ChartHandler();

const initialOptions = {
  backgroundColor: "transparent",
  grid: {
    left: "15%",
    right: "12%",
    top: "17%",
    bottom: "17%",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    },
  ],
};

export default function LineSmooth({ data, cardInfo, responsive }) {
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
  }, [data, backgroundColor, defaultPeriod]);

  const switchTimeFormat = (item = "day") => {
    setDefaultPeriod(item);
  };

  return (
    <ChartCard
      responsive={responsive}
      data={data}
      cardInfo={cardInfo}
      setFormatTime={switchTimeFormat}
    >
      <ReactEcharts
        key={chartKey}
        option={chartOptions}
        style={{ width: "100%", height: "280px" }}
      ></ReactEcharts>
    </ChartCard>
  );
}
