import React, { useState } from "react";
import { DEL_FILE } from "@/stores/reducers/file";
import { DESTROY_OPERATION } from "@/stores/reducers/process";
import { Button } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import ConfirmAlert from "@/components/UI/Confirm/Confirm";

export default function ProgressBar() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.process.step);
  const proccessLoading = useSelector((state) => state.process.loading);

  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const onHandelConfirm = () => {
    setVisibleConfirm(false);
    dispatch({ type: DEL_FILE });
    dispatch({ type: DESTROY_OPERATION });
  };

  const onHandelCancel = () => {
    return null;
  };

  return (
    <div
      className={`flex flex-col md:flex-row md:items-center justify-between bg-secondary-active w-10/12 sm:w-8/12 md:w-[750px] animate__animated border border-solid border-black/20 shadow ${proccessLoading ? "animate__fadeInDown" : "animate__fadeOut"
        } rounded-xl mt-3 py-4 px-4 z-[7]`}
    >
      <div>
        <p className="text-base tracking-wider text-primary dot">
          {getTitles()[currentStep].name}
        </p>
      </div>

      <div className="flex justify-between items-center mt-3 md:mt-0">
        <p className="font-semibold text-center text-primary text-sm mr-3 w-[40px]">
          {currentStep} / {getTitles().length - 1}{" "}
        </p>

        <ConfirmAlert
          onConfirm={onHandelConfirm}
          onCancel={onHandelCancel}
          showModal={visibleConfirm}
        />
      </div>
    </div>
  );
}

const getTitles = () => {
  return [
    { name: "Getting the file", step: 0 },
    { name: "Check the file extension", step: 1 },
    { name: "Identify the data structure", step: 2 },
    { name: "Detecting Application", step: 3 },
    { name: "Data conversion to standard format", step: 4 },
    { name: "Start analyzing and calculating data", step: 5 },
    { name: "Preparing the results", step: 6 },
    { name: "End of operation", step: 7 },
  ];
};
