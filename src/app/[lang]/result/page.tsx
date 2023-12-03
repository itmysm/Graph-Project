"use client";

import Card from "@/components/result/Card";
import Chart from "@/components/result/Chart";

export default function Result() {
  return (
    <div className="w-full h-full bg-primary bg-gradient-main flex justify-center">
      <div className="flex flex-wrap gap-1 md:gap-5 w-full container py-10 px-10 md:px-0 ">
        <Card classes="w-full sm:w-1/2 md:max-w-[350px] h-fit" dataInfo={{}}>
          <Chart config={{}} classes="w-full" />
        </Card>

        <Card classes="w-full max-w-[250px] h-fit" dataInfo={{}}>
          <Chart config={{}} classes="w-full" />
        </Card>
      </div>
    </div>
  );
}
