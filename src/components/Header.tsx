import { Locale } from "$/i18n.config";
import { getLocales } from "@/lib/locales";
import TheHeaderClient from "@/components/client/TheHeaderClient";

export default async function Header({ lang }: { lang: Locale }) {
  const { app } = await getLocales(lang);

  return (
    <header className="w-full flex justify-center py-6">
      <TheHeaderClient locale={app} />
    </header>
  );
}
