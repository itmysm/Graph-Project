import React, { useMemo, useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import useResultStore from "@/store/result";
import { Filters } from "@/types/store";

export default function App() {
  const { filters, updateFilters } = useResultStore();
  const [selectedKeys, setSelectedKeys] = useState(new Set([filters.view]));

  const selectedValue = useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);
  const dropDownItems = [
    {
      title: "View all",
      key: "View all",
    },
    {
      title: "Tops",
      key: "Tops",
    },
    {
      title: "Active charts",
      key: "Active charts",
    },
  ];

  const onViewSettingChange = (key) => {
    const selected = [...key][0]
    setSelectedKeys(key);
    updateFilters({ ...filters, view: selected });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={onViewSettingChange}
      >
        {dropDownItems.map((item) => (
          <DropdownItem className="flex" key={item.key}>
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
