import React, { useState } from "react";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { FiMaximize, FiXOctagon } from "react-icons/fi";

const timeFormats = [
  { title: "24h", key: "" },
  { title: "1w", key: "" },
  { title: "1m", key: "" },
  { title: "6m", key: "" },
  { title: "1y", key: "" },
];

function ChartCard(props) {
  const [support, setSupport] = useState(true);

  function handelNotSupport () {
    setSupport(true)
  }

  return (
    <>
      <Card
        className={`flex justify-center border-none shadow-md h-full py-5 transition-all duration-700 ease-out origin-top-left relative ${props.responsive}`}
      >
        <div className="flex justify-between items-center px-5">
          <p className="text-xl font-semibold text-light tracking-wide">
            {props.info.title}
          </p>

          <Button
            className="w-fit"
            color="transparent"
            isIconOnly
            isDisabled={true}
            variant="text"
            aria-label="Take a photo"
            size="sm"
          >
            <FiMaximize size={20} />
          </Button>
        </div>

        {props.children}

        <div
          className={`flex items-center justify-start px-4 ${
            timeFormats.length < 1 ? "opacity-0" : ""
          }`}
        >
          {timeFormats.map((item, index) => (
            <>
              {index > 0 && (
                <Divider className="mx-1 !h-5" orientation="vertical" />
              )}
              <Button
                key={index}
                isDisabled={true}
                isIconOnly
                color="warning"
                variant="text"
                aria-label="1"
                size="sm"
              >
                {item.title}
              </Button>
            </>
          ))}
        </div>

        {support && (
          <div className="w-full h-full flex flex-col justify-center items-center absolute support bg-secondary-active/90 px-14 text-center text-gray">
            <FiXOctagon className="text-warning mb-2" size={32} />
            <p className="tracking-wide text-warning font-semibold">
              This chart is not supported for your data!
            </p>
          </div>
        )}
      </Card>
    </>
  );
}

export default ChartCard;
