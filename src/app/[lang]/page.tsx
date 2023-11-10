import { Locale } from "$/i18n.config";
import { getLocales } from "@/lib/locales";

export default async function Home({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { page } = await getLocales(lang);

  return <section className="py-24">123</section>;
}
