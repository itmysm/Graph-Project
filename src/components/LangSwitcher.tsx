"use client";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { i18n } from "$/i18n.config";

export default function LangSwitcher() {
  const pathName = usePathname();
  const defaultLang = pathName.split("/")[1];
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([defaultLang]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);

  const handleSelectionChange = (newSelectedKeys: any) => {
    Array.from(newSelectedKeys).join(", ").replaceAll("_", " ");
    setSelectedKeys(newSelectedKeys);
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize min-w-[fit-content]">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        {i18n.locales.map((locale) => (
          <DropdownItem key={locale} href={redirectedPathName(locale)}>
            {locale}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
