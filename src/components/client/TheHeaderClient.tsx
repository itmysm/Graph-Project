"use client";

import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function TheHeaderClient({ locale }: { locale: any }) {
  const currentPath = usePathname();
  const appPaths = ["/app", "/results"];

  if (appPaths.some(item => currentPath.includes(item))) {
    return (
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link className="font-semibold text-xl xl:text-2xl text-info tracking-wide" href="/app">
              {locale.name}
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <LangSwitcher />
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link className="font-semibold text-xl xl:text-2xl text-info tracking-wide" href="/app">
              {locale.name}
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <LangSwitcher />
          <Button className="text-sm text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg">{locale.about}</Button>
        </div>
      </nav>
    );
  }
}
