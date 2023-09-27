import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

import { FiHelpCircle, FiUploadCloud, FiRefreshCcw } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { DESTROY_OPERATION } from "@/stores/reducers/process.ts";
import { DEL_FILE } from "@/stores/reducers/file";

export default function AppHeader() {
  const dispatch = useDispatch()

  const onHandelResetApp = () => {
    dispatch({ type: DEL_FILE });
    dispatch({ type: DESTROY_OPERATION })
  }

  return (
    <>
      <div className="flex justify-between items-center md:mt-0 px-5 md:px-10">
        <div className="flex justify-center items-center">
          <h1 className="text-primary text-2xl font-black mb-0 tracking-wide">Results</h1>
          <Button className="ml-3" isIconOnly variant="light">
            <FiHelpCircle className="text-xl" />
          </Button>
        </div>

        <div className="flex">
          <Button
            className="flex"
            color="primary"
            variant="shadow"
            onClick={onHandelResetApp}
            isIconOnly
          >
            <FiRefreshCcw className="text-secondary" />
          </Button>

          <Button
            className="ml-3 hidden md:flex shadow-md"
            color="primary"
            variant="shadow"
          >
            <FiUploadCloud className="text-secondary" />
            <p className="text-secondary">Export Result</p>
          </Button>

          <Button
            className="flex ml-3 md:hidden"
            color="primary"
            variant="shadow"
            isIconOnly
          >
            <FiUploadCloud className="text-secondary" />
          </Button>
        </div>
      </div>
    </>
  );
}
