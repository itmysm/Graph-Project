"use client";

import { Periods, Structures } from "@/types/core";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
export default function Card() {
  const isSupported = true;

  return (
    <div className={`rounded-lg py-4 px-1 w-1/2 md:w-1/3 xl:w-1/4 relative overflow-hidden ${isSupported ? "bg-[#222]" : "bg-[#222]/50"}`}>
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
            className={`${selectedItem === periods[key] ? "text-info" : ""}`}
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
  return <div className="absolute w-full h-full top-0 flex justify-center items-center">
    this is not work
  </div>;
}
