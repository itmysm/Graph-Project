"use client";

import { ChartStructure, ChartsTarget } from "@/types/charts";
import { Chart } from "@/types/locales";

type CardProps = {
  i18n: Chart["titles"];
  children: React.ReactNode;
  chartInfo: ChartStructure;
  classes: string;
};

export default function Card({ children, i18n, chartInfo, classes }: CardProps) {
  const isSupported = true;
  return (
    <div className={`rounded-xl p-4 relative overflow-hidden ${classes} ${isSupported ? "" : ""} bg-temp-for-chart-cards`}>
      <p className="text-xl tracking-wider ">{i18n[chartInfo.title]}</p>
      {children}
      {!isSupported && <NotSupported />}
    </div>
  );
}

export function NotSupported() {
  return <div className="absolute w-full h-full top-0 flex justify-center items-center">this is not work</div>;
}
