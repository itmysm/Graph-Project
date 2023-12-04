"use client";

import { ChartStructure, ChartsStructure } from "@/types/constant";
import { Periods } from "@/types/core";
import { Chart } from "@/types/locales";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";

type CardProps = {
  i18n: Chart["titles"];
  children: React.ReactNode;
  chartInfo: ChartStructure;
  classes: string;
};

export default function Card({ children, i18n, chartInfo, classes }: CardProps) {
  const isSupported = true;
  console.log(i18n);

  return (
    <div className={`rounded-xl p-4 relative overflow-hidden ${classes} ${isSupported ? "" : ""} bg-temp-for-chart-cards`}>
      <p className="text-xl tracking-wider ">{i18n[chartInfo.title]}</p>
      {children}
      <Pagination availablePeriods={["all", "month"]} />
      {!isSupported && <NotSupported />}
    </div>
  );
}

type PeriodsProps = {
  defaultSelectedItem?: string;
  availablePeriods: Periods[];
};

export function Pagination({ availablePeriods, defaultSelectedItem = "all" }: PeriodsProps) {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);
  const periods: { [key: string]: Periods } = {
    "24h": "24h",
    "1w": "week",
    "1m": "month",
    "6m": "sixMonth",
    "1y": "year",
    all: "all",
  };

  const onSelectNewPeriod = (key: string) => {
    setSelectedItem(periods[key]);
  };

  return (
    <div className={`flex items-center justify-start px-4`}>
      {Object.keys(periods).map((key, index) => (
        <div className="flex items-center" key={index}>
          {index > 0 && <Divider className="mx-1 !h-5" orientation="vertical" />}
          <Button
            className={`text-xs capitalize font-semibold tracking-wide ${selectedItem === periods[key] ? "text-info" : ""}`}
            isIconOnly
            variant="light"
            aria-label="1"
            size="sm"
            onClick={() => onSelectNewPeriod(key)}
            isDisabled={availablePeriods.includes(periods[key]) ? false : true}
          >
            {key}
          </Button>
        </div>
      ))}
    </div>
  );
}

export function NotSupported() {
  return <div className="absolute w-full h-full top-0 flex justify-center items-center">this is not work</div>;
}
