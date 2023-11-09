import { Locale } from "../../../i18n.config";
import { getLocales } from "../../lib/locales";

export default async function Home({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { page } = await getLocales(lang);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{page.home.title}</h1>
        <p className="text-gray-500">{page.home.description}</p>
      </div>
    </section>
  );
}
