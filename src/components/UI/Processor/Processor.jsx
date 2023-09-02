import React, { useState } from "react";
import { DEL_FILE } from "src/stores/reducers/file";
import { DESTROY_OPERATION } from "src/stores/reducers/process";
import { Button } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import ConfirmAlert from "../Confirm/Confirm";

export default function Processor() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.process.step);
  const proccessLoading = useSelector((state) => state.process.loading);

  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const onHandelCancel = () => {
    dispatch({ type: DEL_FILE });
    dispatch({ type: DESTROY_OPERATION });
  };

  const onHandelVisibleConfirm = () => {
    setVisibleConfirm((current) => !current);
    console.log(visibleConfirm);
  };

  const onHandelConfirm = (confirmed = false) => {
    if (confirmed) onHandelCancel();
    setVisibleConfirm(false);
  };

  return (
    <div
      className={`flex flex-col md:flex-row md:items-center justify-between bg-secondary-active w-10/12 sm:w-8/12 md:w-[750px] animate__animated ${
        proccessLoading ? "animate__fadeInDown" : "animate__fadeOutUp"
      } rounded-xl mt-3 py-4 px-4 z-[7]`}
    >
      <div>
        <p className="text-base tracking-wider dot">
          {getTitles()[currentStep].name}
        </p>
      </div>

      <div className="flex justify-between items-center mt-3 md:mt-0">
        <p className="font-semibold text-center text-sm mr-3 w-[30px]">
          {currentStep + 1} / {getTitles().length + 1}{" "}
        </p>
        {/* <Button  onPress={onHandelVisibleConfirm} auto>
          Cancel
        </Button> */}

        <Button
          className="text-primary w-fit bg-red rounded-lg relative z-[9] py-3 md:p-auto"
          size="sm"
          color="primary"
          auto
          onConfirmAnswer={onHandelConfirm}
          showModal={visibleConfirm}
          onClick={onHandelVisibleConfirm}
        >
          Close
        </Button>
      </div>

      <ConfirmAlert
        onConfirmAnswer={onHandelConfirm}
        showModal={visibleConfirm}
      />
    </div>
  );
}

const getTitles = () => {
  return [
    { name: "Getting the file", step: 0 },
    { name: "Check the file extension", step: 1 },
    { name: "Identify the data structure", step: 2 },
    { name: "Data conversion to standard format", step: 3 },
    { name: "Start analyzing and calculating data", step: 4 },
    { name: "Preparing the results", step: 5 },
  ];
};
