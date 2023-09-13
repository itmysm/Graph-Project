import React, { useEffect, useState } from "react";
import { FiHelpCircle, FiUploadCloud, FiUsers } from "react-icons/fi";
import { Divider } from "@nextui-org/divider";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import ChartCard from "@/components/UI/Charts/ChartCard";
import Pie from "@/components/UI/Charts/Pie";
import LineSmooth from "@/components/UI/Charts/LineSmooth";
import StickLoading from "@/components/UI/Preloading/stick";
import Board from "@/components/UI/Board/Board";
import CustomDropDown from "@/components/UI/Dropdown";
import HeaderApp from "@/components/Pages/App/Results/Header";

export default function Results() {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("General");
  const categories = [
    {
      title: "General",
    },
    {
      title: "Facts",
    },
    {
      title: "AI",
    },
  ];

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  function handelChangeCategoryProccess(index) {
    setSelectedTab(categories[index].title);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  }

  return (
    <>
      <div className="w-full py-5">
        <HeaderApp />
        <Divider className="mt-5 mb-8" />

        <div className="flex w-full justify-center">
          <Tabs
            className="mb-5"
            variant="underlined"
            aria-label="Tabs variants"
            onSelectionChange={handelChangeCategoryProccess}
          >
            {categories.map((item, index) => (
              <Tab
                className="text-md font-semibold tracking-wide"
                key={index}
                title={item.title}
              />
            ))}
          </Tabs>
        </div>

        {selectedTab == "General" && (
          <div className="flex flex-col items-center px-5">
            <div className="w-full flex justify-center">{/* <Board /> */}</div>

            <div className="w-full flex flex-row flex-wrap justify-center md:justify-start">
              <ChartCard
                key="1"
                responsive={"w-10/12 md:w-1/2 lg:max-w-[350px] m-3"}
                info={{ title: "Each Person" }}
              >
                <Pie />
              </ChartCard>
              <ChartCard
                key="2"
                responsive={"w-10/12 md:w-1/2 lg:max-w-[350px] m-3"}
                info={{ title: "Each Person" }}
              >
                <LineSmooth />
              </ChartCard>
            </div>
          </div>
        )}
      </div>
      {loading && (
        <div className="w-full h-full absolute top-0 left-0 bg-[#000000]/70">
          <StickLoading />
        </div>
      )}
    </>
  );
}
