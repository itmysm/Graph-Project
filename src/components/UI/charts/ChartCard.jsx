import React, { useEffect, useState } from "react";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { FiMaximize, FiXOctagon } from "react-icons/fi";
import { formatTimePeriods } from "@/utils/constants";
import { cardSettings } from "@/utils/config/card.settings";

function ChartCard({ data, settings, children, setFormatTime }) {
  const [support, setSupport] = useState(true);
  const [supportedFormats, setSupportedFormats] = useState({});
  const [selectedFormat, setSelectedFormat] = useState(null);

  function handleNotSupport() {
    setSupport(false);
  }

  useEffect(() => {
    const supportedFormatsData = Object.keys(data).reduce((formats, itemKey) => {
      if (formatTimePeriods[itemKey].key === itemKey) {
        formats[itemKey] = formatTimePeriods[itemKey];

        if (selectedFormat === null) {
          setFormatTime(itemKey);
          setSelectedFormat(itemKey);
        }
      }
      return formats;
    }, {});

    setSupportedFormats(supportedFormatsData);
  }, [data]);

  const onSelectNewFormat = (key) => {
    setFormatTime(key);
    setSelectedFormat(key);
  };

  return (
    <Card
      className={`flex justify-center border-none shadow-md h-full py-5 transition-all duration-700 ease-out origin-top-left relative ${cardSettings.responsive}`}
    >
      <div className="flex justify-between items-center px-5">
        <p className="text-xl font-semibold text-light tracking-wide">
          {settings.chartTitle}
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

      {children}

      <div className={`flex items-center justify-start px-4`}>
        {Object.keys(formatTimePeriods).map((key, index) => (
          <div className="flex items-center" key={index}>
            {index > 0 && (
              <Divider className="mx-1 !h-5" orientation="vertical" />
            )}
            <Button
              className={`${selectedFormat === key ? 'text-info' : ''}`}
              isDisabled={!supportedFormats[key]}
              isIconOnly
              color="warning"
              variant="text"
              aria-label="1"
              size="sm"
              onClick={() => onSelectNewFormat(key, index)}
            >
              {formatTimePeriods[key].title}
            </Button>
          </div>
        ))}
      </div>

      {!support && (
        <div className="w-full h-full flex flex-col justify-center items-center absolute support bg-secondary-active/90 px-14 text-center text-gray">
          <FiXOctagon className="text-warning mb-2" size={32} />
          <p className="tracking-wide text-warning font-semibold">
            This chart is not supported for your data!
          </p>
        </div>
      )}
    </Card>
  );
}

export default ChartCard;
