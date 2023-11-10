import { Locale } from "$/i18n.config";
import { getLocales } from "@/lib/locales";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default async function Home({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { page } = await getLocales(lang);

  return (
    <div className="w-full flex justify-center pt-24">
      <div className="container">
        <section className="flex flex-col items-center">
          <p className="w-full md:w-4/6 lg:w-3/6 xl:w-3/6 text-3xl lg:text-4xl xl:text-6xl font-black text-contrast text-center leading-[1.5] md:leading-[1.6] xl:leading-tight">
            <span className="text-info">{page.home.title1}</span>
            {page.home.title2}
          </p>

          <p className="text-gray xl:text-lg mt-3 xl:mt-6 text-center">{page.home.description}</p>

          <Button
            href="/app"
            className="text-primary font-semibold bg-contrast hover:bg-contrast/90 rounded-lg mt-10"
            size="lg"
          >
            Start Analyzing
          </Button>

          <div className="flex mt-12">
            {Array.from({ length: 3 }).map((_, index) => (
              <Image
                className={`relative left-[${10}px]`}
                src="/src/assets/avatars/1.png"
                key={index}
                width={40}
                height={40}
                alt="Picture of the author"
              />
            ))}

            <a href="/src/assets/avatars/1.png">234234</a>
          </div>
          <p className="text-success font-semibold text-sm tracking-widest mt-6">
            {page.home.reward}
          </p>
        </section>
      </div>
    </div>
  );
}
