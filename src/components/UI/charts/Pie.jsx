import React, { useEffect, useState, useMemo } from "react";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "@/utils/tools/extractColorFromClass";

const initialOptions = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "transparent",
        borderWidth: 0,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: false,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

function Pie({ data, identifier }) {
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

  return (
    <ReactEcharts
      option={chartOptions}
      style={{ width: "100%", height: "280px" }}
    ></ReactEcharts>
  );
}

export default Pie;
