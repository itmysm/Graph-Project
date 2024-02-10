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

import UserListModal from "./UserListModal";
export function FilterResult() {
  const [selectedItem, setSelectedItem] = useState<Number>(0);
  const [modalAction, setModalAction] = useState(false);
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

  const x64 = (ss) => {
    console.log(ss);
  };

  useEffect(() => {
    onGetParticipation();
  }, []);
  return (
    <>
      <Dropdown onClick={() => setModalAction(false)}>
        <DropdownTrigger>
          <Button
            isIconOnly
            color="default"
            variant="bordered"
            aria-label="close"
            isLoading={Object.keys(participation).length == 0}
          >
            <FiFilter className="text-white/80 text-lg" strokeWidth="3" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {filterItems.map((item, index) => (
            <DropdownItem
              key={item.key}
              startContent={
                selectedItem === index ? (
                  <FiCheck className="text-success text-lg" />
                ) : (
                  item.icon
                )
              }
              onClick={() => {
                setSelectedItem(index);
                item.key === "custom" && setModalAction(true);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <UserListModal
        participation={participation}
        onSetChanges={(items) => x64(items)}
        modalAction={modalAction}
        onModelClose={() => setModalAction(false)}
      />
    </>
  );
}
