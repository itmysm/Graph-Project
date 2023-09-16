import React, { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "@/utils/tools/extractColorFromClass";
import ChartCard from "@/components/UI/Charts/ChartCard";

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

export default function LineSmooth({ data, identifier, responsive }) {
  const [backgroundColor, setBackgroundColor] = useState(null);

  useEffect(() => {
    const color = extractColorFromClass("bg-secondary-active");
    setBackgroundColor(color);
  }, []);

  const chartOptions = useMemo(() => {
    if (!data) return initialOptions;

    const updatedOptions = { ...initialOptions };
    updatedOptions.backgroundColor = backgroundColor;
    updatedOptions.series[0].data = Object.values(data[identifier]);

    return updatedOptions;
  }, [data, backgroundColor, identifier]);

  const switchFormatTime = (item) => {
    console.log(item);
  }

  return (
    <ChartCard responsive={responsive}
      data={{ title: "Each Person" }}
      setFormatTime={switchFormatTime}>
      <ReactEcharts
        option={chartOptions}
        style={{ width: "100%", height: "280px" }}
      ></ReactEcharts>
    </ChartCard>
  );
}
