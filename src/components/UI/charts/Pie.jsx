import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "../../../utils/tools/extractColorFromClass";

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

function Pie(props) {
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    const color = extractColorFromClass("bg-secondary-active");

    setOptions((prevOptions) => ({
      ...prevOptions,
      backgroundColor: color,
    }));
  }, []);
  return (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "280px" }}
    ></ReactEcharts>
  );
}

export default Pie;
