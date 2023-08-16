import React, { useEffect, useState } from "react";
import Pie from "../../UI/Charts/Pie";
import LineSmooth from "../../UI/Charts/LineSmooth";
import { Tabs, Tab } from "@nextui-org/react";
import ChartCard from "../../UI/Charts/ChartCard";
import StickLoading from "../../UI/Preloading/stick";

export default function Results() {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("General");
  const categories = [
    {
      title: "General",
    },
    {
      title: "AI",
    },
    {
      title: "Test",
    },
    {
      title: "Test 2",
    },
  ];

  function handelChangeCategoryProccess(index) {
    setSelectedTab(categories[index].title);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  }

  return (
    <>
      <div className="w-full p-4 md:p-5 lg:p-10">
        <div className="flex flex-col items-center md:items-start justify-center my-8 md:mt-0">
          <h1 className="text-3xl mb-0 tracking-wide">Results</h1>
          <p className="text-gray font-semibold tracking-wide	">
            There is some results i create for you
          </p>
        </div>

        <Tabs
          className="mb-5"
          variant="underlined"
          aria-label="Tabs variants"
          onSelectionChange={handelChangeCategoryProccess}
        >
          {categories.map((item, index) => (
            <Tab key={index} title={item.title} />
          ))}
        </Tabs>

        {selectedTab == "General" && (
          <div className="w-full flex flex-row flex-wrap">
            <ChartCard
              responsive={"w-full md:w-1/2 lg:max-w-[400px] m-3"}
              info={{ title: "Each Person" }}
            >
              <Pie />
            </ChartCard>
            <ChartCard
              responsive={"w-full md:w-1/2 lg:max-w-[400px] m-3"}
              info={{ title: "Each Person" }}
            >
              <LineSmooth />
            </ChartCard>
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
