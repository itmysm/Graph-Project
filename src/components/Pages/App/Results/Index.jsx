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

const availableChartComponents = {
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

  const [selectedTab, setSelectedTab] = useState("General");
  const [chartSettings, setChartSettings] = useState(null);
  const [exportedResult, setExportedResultsFromIndexDb] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resultsStatus === 'done') {
      getResultFromIndexDB();
    }
  }, [resultsStatus]);

  useEffect(() => {
    setApplicationNameForGettingChartSettings();
  }, [exportedResult]);

  const handelChangeCategoryProccess = (index) => {
    setSelectedTab(Categories[index].title);
  };

  const setApplicationNameForGettingChartSettings = async () => {
    const applicationName = store.getState().process.app.name;
    const importedChartSettings = chartConfigs[applicationName]

    setChartSettings(importedChartSettings);
  };

  const getResultFromIndexDB = async () => {
    setLoading(true);
    try {
      const newResults = await get('result');
      setExportedResultsFromIndexDb(newResults);
    } catch (error) {
      console.error('Error while fetching data from IndexedDB:', error);
    }
    setLoading(false);
  };

  const renderCharts = () => {
    console.log(chartSettings && exportedResult);
    if (chartSettings != null && exportedResult != null) {
      return Object.keys(chartSettings).map((eachChart, index) => {
        const chartConfig = chartSettings[eachChart]
        const ChartComponent = availableChartComponents[chartConfig.chartName];
        const chartData = exportedResult[chartConfig.keyNameInIndexDB]
        return <ChartComponent settings={chartConfig} data={chartData} key={index} />;
      })
    }
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
            {renderCharts()}
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
