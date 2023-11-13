"use client";

import extractColorFromClass from "@/util/general/extractColorFromClass";
import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const initialChartOptions = {
  grid: {
    left: "20",
    right: "20",
    top: "60",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["0", "2", "4", "6", "8", "10", "12"],
    axisTick: {
      show: false,
    },

    axisLine: {
      show: false,
    },
  },
  yAxis: {
    show: true,
    axisLabel: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: "#fff",
      },
    },
  },
  series: [
    {
      data: [8, 1, 4, 2, 9, 6, 6],
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 4,
        color: "#fff",
      },
    },
  ],
};

const items = [
  {
    title: "messages",
    count: "21K",
    percent: 31,
  },
  {
    title: "months",
    count: "7",
    percent: 0,
  },
  {
    title: "people",
    count: "231",
    percent: 10,
  },
  {
    title: "robots",
    count: "5",
    percent: -5,
  },
  {
    title: "admins",
    count: "5",
    percent: 0,
  },
];

const defaultChartStyle = {
  width: "100%",
};

export default function ChartPreView() {
  const [chartOptions, setChartOptions] = useState(initialChartOptions);

  useEffect(() => {
    const updatedOptions = { ...initialChartOptions };
    updatedOptions.yAxis.splitLine.lineStyle.color = "#beb9cf33"; // extractColorFromClass("bg-gray/20");
    updatedOptions.series[0].lineStyle.color = "#7f5eff"; // extractColorFromClass("bg-info");

    setChartOptions(updatedOptions);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[90%] xl:max-w-[1200px] border border-gray/20 rounded-xl h-full pb-10 bg-gradient-custom relative -top-80">
      <ReactEcharts className="!h-[300px] lg:!h-[400px]" option={chartOptions} notMerge={true} lazyUpdate={true} style={defaultChartStyle} />

      <div className={`flex justify-between px-10 xl:px-20 capitalize `}>
        {items.map((item, index) => {
          return (
            <div key={index} className={`flex flex-col justify-center items-center ${index > 2 ? 'hidden lg:flex' : ''}`}>
              <p className="text-sm lg:text-sm font-semibold text-gray">{item.title}</p>
              <p className="text-sm lg:text-xl font-semibold text-contrast/80 my-2">{item.count}</p>
              <p className="flex items-center justify-center font-semibold text-contrast text-xs lg:text-sm">
                <span className={`p-[2px] ${item.percent < 0 ? "bg-error rotate-180" : "bg-success"} rounded-full`}>
                  <FiArrowUp className="text-[12px]" />
                </span>
                <span className="ml-1">{item.percent}%</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
