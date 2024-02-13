import { get } from "idb-keyval";

import {
  Button,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { use, useEffect, useState } from "react";
import {
  FiCheck,
  FiFilter,
  FiSearch,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";

type FilterResultProps = {
  applyFilter: (filter: ChartFilter) => void;
  rules: ChartRules;
};

import UserListModal from "./UserListModal";
import { ChartFilter, ChartRules } from "@/types/charts";
export function FilterResult({ applyFilter, rules }: FilterResultProps) {
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [modalStatus, setModalStatus] = useState(false);
  const [participation, setParticipation] = useState<
    { [key: string]: string } | {}
  >({});
  const [filters, setFilters] = useState<object | null>(null);
  const filterItems = [
    {
      name: "Top users",
      key: "topUsers",
      icon: <FiTrendingUp className="text-white text-lg" />,
    },
    {
      name: "Lowest users",
      key: "lowest",
      icon: <FiTrendingDown className="text-white text-lg" />,
    },
    {
      name: "Select users from list",
      key: "custom",
      icon: <FiSearch className="text-white text-lg" />,
    },
  ];

  const onGetParticipation = async () => {
    const list = (await get("allParticipationInChat")) || {};
    setParticipation(list);
  };

  useEffect(() => {
    onGetParticipation();
  }, []);

  const isParticipationListAvailable = (): Boolean => {
    return !!Object.keys(participation).length;
  };

  const setNewFilter = (key: string, index: number) => {
    setSelectedFilter(index);
    if (key == "custom") setModalStatus(true);
    else {
      onSetFilters(key);
    }
  };

  const onSetFilters = (keyName, items = []) => {
    applyFilter({ key: keyName, value: items });
  };
  return (
    <>
      <Dropdown onClick={() => setModalStatus(false)}>
        <DropdownTrigger>
          <Button
            isIconOnly
            color="default"
            variant="bordered"
            aria-label="close"
            isLoading={!isParticipationListAvailable()}
          >
            <FiFilter className="text-white/80 text-lg" strokeWidth="3" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {filterItems.map((item, index) => (
            <DropdownItem
              key={item.key}
              startContent={
                selectedFilter === index ? (
                  <FiCheck className="text-success text-lg" />
                ) : (
                  item.icon
                )
              }
              onClick={() => {
                setNewFilter(item.key, index);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {isParticipationListAvailable() && (
        <UserListModal
          participation={participation}
          onSetChanges={(items) => onSetFilters("custom", items)}
          modalStatus={modalStatus}
          onModelClose={() => setModalStatus(false)}
          rules={rules}
        />
      )}
    </>
  );
}
