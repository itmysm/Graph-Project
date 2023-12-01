import { Locale, LocaleLabel } from "$/i18n.config";
import { getLocales } from "@/lib/locales";
import TheHeaderClient from "@/components/client/TheHeaderClient";

export default async function Header({ lang }: { lang: LocaleLabel }) {
  const { navigation, additional } = await getLocales(lang);
  return (
    <header className="w-full flex justify-center py-4 fixed">
      <TheHeaderClient locale={{navigation, additional}} />
    </header>
  );
}
