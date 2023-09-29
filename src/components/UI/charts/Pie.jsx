import React, { useEffect, useState, useMemo } from "react";
import ReactEcharts from "echarts-for-react";
import extractColorFromClass from "@/utils/tools/extractColorFromClass";
import ChartCard from "@/components/UI/Charts/ChartCard";
import { genTimeStamp } from "@/utils/tools";
import { defaultChartConfigs } from "@/utils/config/default.config";
import { cardSettings } from "@/utils/config/card.settings";

function Pie({ data, settings }) {
  const initialChartOptions = defaultChartConfigs.pie
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [defaultPeriod, setDefaultPeriod] = useState('year')
  const [chartKey, setChartKey] = useState(null);

  useEffect(() => {
    const color = extractColorFromClass("bg-secondary-active");
    setBackgroundColor(color);
  }, []);

  const chartOptions = useMemo(() => {
    if (!data) return initialChartOptions;

    const updatedOptions = { ...initialChartOptions };
    updatedOptions.series[0].name = settings.blocksName
    updatedOptions.backgroundColor = backgroundColor;
    updatedOptions.series[0].data = Object.values(data[defaultPeriod])

    setChartKey(genTimeStamp())
    return updatedOptions;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, defaultPeriod]);

  const switchTimeFormat = (item = 'day') => {
    setDefaultPeriod(item)
  }

  return (
    <ChartCard
      data={data}
      settings={settings}
      setFormatTime={switchTimeFormat}>
      <ReactEcharts
        key={chartKey}
        option={chartOptions}
        style={cardSettings.defaultChartStyle}
      ></ReactEcharts>
    </ChartCard>
  );
}

export default Pie;
