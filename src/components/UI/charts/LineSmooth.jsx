import React from "react";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "../../../utils/tools/extractColorFromClass";

/** @type EChartsOption **/

const options = {
  backgroundColor: extractColorFromClass("bg-secondary-active"),
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

export default function LineSmooth(props) {
  return (
    <ReactEcharts
      // option={...(options, (options.series[0].data = props.data))}
      option={options}
      style={{ width: "100%", height: "280px" }}
    ></ReactEcharts>
  );
}
