"use client";

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
      title: "Whatsapp ",
      path: "./",
    },
    {
      title: "Instagram",
      path: "./",
    },
    {
      title: "Telegram ",
      path: "./",
      badge: {
        background: "warning",
        content: "soon",
      },
    },
  ];

  if (appPaths.some((item) => currentPath.includes(item))) {
    return (
      <Navbar shouldHideOnScroll className="w-full container bg-primary" maxWidth="full">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand className="mr-3">
            <Link className="font-semibold text-3xl xl:text-2xl text-info tracking-wide" href="/app">
              {locale.name}
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
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
              {locale.name}
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
              <Button className="bg-transparent hover:!bg-transparent hover:text-info transition-all text-base font-semibold" variant="light">
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
            <Button className="text-sm text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg">{locale.about}</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }
}
