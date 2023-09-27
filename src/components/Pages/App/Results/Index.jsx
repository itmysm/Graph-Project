import React, { useEffect, useMemo, useState } from "react";
import { Divider } from "@nextui-org/divider";
import { Tabs, Tab } from "@nextui-org/tabs";
import Pie from "@/components/UI/charts/Pie";
import LineSmooth from "@/components/UI/Charts/LineSmooth";
import StickLoading from "@/components/UI/Preloading/stick";
import HeaderApp from "@/components/Pages/App/Results/Header";
import { useSelector } from "react-redux";
import { get } from 'idb-keyval';
import { chartConfigs } from "@/utils/config/chart.config";
import store from "@/stores/index";

const responsiveSettingForChartCards = 'w-10/12 md:w-1/2 lg:max-w-[350px] m-3';
const allCharts = {
  Pie,
  LineSmooth
};

const Categories = [
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

const Results = () => {
  const resultsStatus = useSelector((state) => state.process.status);
  const [chartConfig, setChartConfig] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exportedResult, setExportedResult] = useState(null);
  const [selectedTab, setSelectedTab] = useState("General");

  useEffect(() => {
    if (resultsStatus === 'done') {
      getResultFromIndexDB();
    }
  }, [resultsStatus]);

  useEffect(() => {
    setRecommendedChartConfig();
  }, [exportedResult, chartConfig]);

  const handelChangeCategoryProccess = (index) => {
    setSelectedTab(Categories[index].title);
  };

  const setRecommendedChartConfig = async () => {
    const application = store.getState().process.app.name;
    setChartConfig(chartConfigs[application]);
  };

  const getResultFromIndexDB = async () => {
    setLoading(true);
    try {
      const newResults = await get('result');
      setExportedResult(newResults);
    } catch (error) {
      console.error('Error while fetching data from IndexedDB:', error);
    }
    setLoading(false);
  };

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
            {Categories.map((item, index) => (
              <Tab
                className="text-md font-semibold tracking-wide"
                key={index}
                title={item.title}
              />
            ))}
          </Tabs>
        </div>

        {selectedTab === "General" && (
          <div className="flex items-center px-5">
            {chartConfig && exportedResult &&
              Object.keys(chartConfig).map((key, index) => {
                const chartCfg = chartConfig[key];
                const cardInfo = { title: chartCfg.title };
                const Chart = allCharts[chartCfg.chartType];
                const specificResult = exportedResult[chartCfg.keyNameInIndexDB]
                return <Chart data={specificResult} cardInfo={cardInfo} responsive={responsiveSettingForChartCards} key={index} />;
              })}
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
};

export default Results;
