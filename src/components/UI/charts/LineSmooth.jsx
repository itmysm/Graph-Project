import React from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "../../../utils/tools/extractColorFromClass";
import { FiMaximize } from "react-icons/fi";

const options = {
  backgroundColor: extractColorFromClass("bg-secondary-active"),
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
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
    <Card
      className={`flex justify-center border-none shadow-md ${props.responsive}`}
    >
      <div className="flex justify-between items-center pt-3 px-4">
        <p className="text-xl font-semibold text-light tracking-wide">
          Each Person
        </p>

        <Button
          className="w-fit !px-2"
          color="transparent"
          aria-label="Take a photo"
          auto
        >
          <FiMaximize size={20} />
        </Button>
      </div>

      <ReactEcharts
        // option={...(options, (options.series[0].data = props.data))}
        option={options}
        style={{ width: "100%", height: "280px" }}
      ></ReactEcharts>

      <div className="">
        <Button
          className="text-sm w-fit !px-2 rounded-none"
          variant="light"
          color="transparent"
          auto
        >
          1y
        </Button>

        <Divider orientation="vertical" />
      </div>
    </Card>
  );
}
