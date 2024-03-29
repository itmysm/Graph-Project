import "animate.css"
import "@/styles/global.css";
import type { Metadata } from "next";
import { LocaleLabel, i18n } from "$/i18n.config";
import Header from "@/components/Header";
import { Inter, Vazirmatn } from "next/font/google";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import NotificationProvider from "@/components/notification/Provider";
const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Graph - App",
  description: "Graph Project",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale.label, dir: locale.dir }));
}

const detectDirection = (lang: LocaleLabel): string => {
  let dir = undefined;
  i18n.locales.forEach((eachLocale) => {
    if (lang === eachLocale.label) dir = eachLocale.dir;
  });

  return dir || "en";
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: LocaleLabel } }) {
  return (
    <html lang={params.lang} data-theme="dark" dir={detectDirection(params.lang)}>
      <body className={`bg-primary w-full ${params.lang == "fa" ? vazir.className : inter.className}`}>
        <Header lang={params.lang} />
        <NotificationProvider />
        <main className="h-screen pt-[96px]">{children}</main>
        <ThemeSwitcher />
      </body>
    </html>
  );
}
