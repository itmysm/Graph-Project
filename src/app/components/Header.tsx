import Link from "next/link";
import { Locale } from "$/i18n.config";
import { getLocales } from "@/lib/locales";
import LangSwitcher from "./LangSwitcher";
import { Button } from "@nextui-org/react";

export default async function Header({ lang }: { lang: Locale }) {
  const { app } = await getLocales(lang);

  return (
    <header className="w-full flex justify-center py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link className="font-semibold text-xl xl:text-2xl text-info tracking-wide" href={`/${lang}`}>
              {app.name}
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <LangSwitcher />
          <Button className="text-sm font-normal text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg">
            {app.about}
          </Button>
        </div>
      </nav>
    </header>
  );
}
