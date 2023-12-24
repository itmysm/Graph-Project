import { useState } from "react";
import { Periods } from "@/types/core";
import { Button, Divider } from "@nextui-org/react";
import { getPeriods } from "@/util/general/getters";

type PeriodsProps = {
  defaultSelectedItem?: Periods;
  availablePeriods: Periods[];
  periodChanged: (period: Periods) => void;
};

export function Pagination({ availablePeriods, periodChanged, defaultSelectedItem = "all" }: PeriodsProps) {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);
  const periods = getPeriods();
  const onSelectNewPeriod = (key: string) => {
    setSelectedItem(periods[key]);
    periodChanged(periods[key]);
  };

  return (
    <div className={`flex items-center justify-start px-4`}>
      {Object.keys(periods).map((key, index) => (
        <div className="flex items-center" key={index}>
          {index > 0 && <Divider className="mx-1 !h-5" orientation="vertical" />}
          <Button
            className={`text-xs capitalize font-semibold tracking-wide ${selectedItem === periods[key] ? "text-info" : ""}`}
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
