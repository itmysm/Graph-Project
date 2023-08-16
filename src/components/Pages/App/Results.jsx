import React, { useEffect, useState } from "react";
import Pie from "../../UI/charts/Pie";
import LineSmooth from "../../UI/charts/LineSmooth";

export default function Results() {
  return (
    <div className="w-full p-10">
      <div className="mb-8">
        <h1 className="text-3xl mb-0 tracking-wide">Results</h1>
        <p className="text-gray font-semibold tracking-wide	">
          There is some results i create for you
        </p>
      </div>

      <div className="w-full flex">
        <Pie responsive={"max-w-[300px]"} data={[]} />
        <LineSmooth responsive={"max-w-[300px]"} data={[]} />
      </div>
    </div>
  );
}
