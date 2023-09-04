import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

import { FiHelpCircle, FiUploadCloud, FiUsers } from "react-icons/fi";

export default function AppHeader() {
  return (
    <>
      <div className="flex justify-between items-center md:mt-0 px-5 md:px-10">
        <div className="flex justify-center md:items-start">
          <h1 className="text-3xl mb-0 tracking-wide">Results</h1>
          <Button className="ml-3" isIconOnly variant="light">
            <FiHelpCircle className="text-xl" />
          </Button>
        </div>

        <div className="flex">
          <Button
            className="ml-3 hidden md:flex"
            color="primary"
            variant="shadow"
          >
            <FiUploadCloud className="text-secondary" />
            <p className="text-secondary">Export Data</p>
          </Button>

          <Button
            className="flex md:hidden"
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
