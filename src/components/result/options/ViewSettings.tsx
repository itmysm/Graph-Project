import React, { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import useResultStore from "@/store/result";
import { Filters } from "@/types/store";

export default function App() {
  const { filters, updateFilters } = useResultStore();
  const [selectedKeys, setSelectedKeys] = useState(new Set([filters.view]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const dropDownItems = [
    {
      title: "View all",
      key: 1,
    },
    {
      title: "Tops",
      key: 2,
    },
    {
      title: "Active charts",
      key: 3,
    },
  ];

  const onChangeViewSetting = (key) => {
    const selected = [...key][0];
    setSelectedKeys(key);
    updateFilters({ ...filters, view: selected });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="capitalize">
          {dropDownItems[selectedValue].title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={onChangeViewSetting}
      >
        {dropDownItems.map((item, index) => (
          <DropdownItem className="flex" key={index}>
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
