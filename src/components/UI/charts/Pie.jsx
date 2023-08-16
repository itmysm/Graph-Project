import React, { useState } from "react";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "../../../utils/tools/extractColorFromClass";
import { FiMaximize, FiMinimize } from "react-icons/fi";

const options = {
  backgroundColor: extractColorFromClass("bg-secondary-active"),
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
  return (
    <ReactEcharts
      // option={...(options, (options.series[0].data = props.info.data))}
      option={options}
      style={{ width: "100%", height: "280px" }}
    ></ReactEcharts>
  );
}

export default Pie;
