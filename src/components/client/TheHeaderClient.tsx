"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Badge } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";

export default function TheHeaderClient({ locale }: { locale: any }) {
  const currentPath = usePathname();
  const appPaths = ["/app", "/results"];

  const paths = [
    {
      title: locale.navigation.links.instagram,
      path: "./",
    },
    {
      title: locale.navigation.links.whatsapp,
      path: "./",
    },
    {
      title: locale.navigation.links.telegram,
      path: "./",
      badge: {
        background: "warning",
        content: locale.additional.soon,
      },
    },
  ];

  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const selectedValue = useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);

  if (appPaths.some((item) => currentPath.includes(item))) {
    return (
      <Navbar shouldHideOnScroll className="w-full container bg-primary" maxWidth="full">
        <NavbarBrand className="flex justify-center md:justify-start mr-3">
          <Link className="font-bold text-4xl md:text-3xl xl:text-2xl text-info tracking-wide" href="/app">
            {locale.navigation.brand}
          </Link>
        </NavbarBrand>
        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" className="bg-transparent hover:!bg-transparent hover:text-info transition-all text-base font-semibold">
                <p className="mr-1"> {selectedValue}</p>
                <FiChevronDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={() => setSelectedKeys}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent> */}
        <NavbarContent className="" justify="end">
          <NavbarItem className="lg:flex">
            <LangSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  } else {
    return (
      <Navbar shouldHideOnScroll className="w-full container bg-primary" maxWidth="full">
        <NavbarContent className="flex items-center gap-4" justify="center">
          <NavbarBrand className="mr-1 lg:mr-3">
            <Link className="font-semibold text-3xl text-info tracking-wide" href="/app">
              {locale.navigation.brand}
            </Link>
          </NavbarBrand>
          {paths.map((path, index) => (
            <NavbarItem key={index} className="hidden lg:flex mt-1">
              <Badge isInvisible={!path.badge} content={path.badge?.content} color={path.badge?.background} size="sm">
                <Link className="text-sm font-semibold" color="foreground" href="#">
                  {path.title}
                </Link>
              </Badge>
            </NavbarItem>
          ))}

          <Dropdown className="lg:!hidden">
            <DropdownTrigger className="lg:!hidden mt-1">
              <Button
                className="bg-transparent hover:!bg-transparent hover:text-info transition-all text-base font-semibold"
                variant="light"
              >
                <p className="mr-1">More</p>
                <FiChevronDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={paths}>
              {(path) => (
                <DropdownItem key={path.path} color="default">
                  {path.title}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <LangSwitcher />
          </NavbarItem>

          <NavbarItem className="hidden lg:flex">
            <Button className="text-sm text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg">
              {locale.navigation.about}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }
}
