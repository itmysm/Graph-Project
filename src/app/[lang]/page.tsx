import { Locale, LocaleLabel } from "$/i18n.config";
import { getLocales } from "@/lib/locales";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import FeatureShapeGenerator from "@/components/home/FeatureShapeGenerator";
import { FiLock, FiDollarSign, FiPenTool, FiCoffee, FiActivity, FiCloudLightning, FiWifiOff } from "react-icons/fi";
import ChartPreView from "@/components/home/ChartPreview";

export default async function Home({ params: { lang } }: { params: { lang: LocaleLabel } }) {
  const { page } = await getLocales(lang);
  const items = [
    {
      icon: <FiCoffee />,
      description: "this is a test",
    },
    {
      icon: <FiDollarSign />,
      description: "this is a test",
    },
    {
      icon: <FiLock />,
      description: "this is a test",
    },
    {
      icon: <FiActivity />,
      description: "this is a test",
    },
    {
      icon: <FiCloudLightning />,
      description: "this is a test",
    },
    {
      icon: <FiWifiOff />,
      description: "this is a test",
    },
  ];

  return (
    <div className="bg-primary">
      <div className="w-full flex flex-col items-center justify-center pt-24 pb-[18rem] bg-gradient-main">
        <section className="container flex flex-col items-center">
          <p className="w-full md:w-4/6 lg:w-3/6 xl:w-3/6 text-3xl lg:text-4xl xl:text-6xl font-black text-contrast text-center leading-[1.5] md:leading-[1.6] xl:leading-tight">
            <span className="text-info">{page.home.title1}</span>
            {page.home.title2}
          </p>

          <p className="text-gray text-xl font-semibold my-4 xl:my-6 text-center">{page.home.description}</p>

          <div className="flex gap-x-5">
            <Link href="/app">
              <Button href="/app" className="text-contrast font-semibold bg-info hover:bg-info/90 hover:text-contrast/80 rounded-lg mt-10" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button className="text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg mt-10" size="lg">
                What Is Graph?
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center my-20">
            <div className="flex">
              {Array.from({ length: 3 }).map((_, index) => (
                <Image
                  className={`relative left-[${10}px]`}
                  src={`${process.env.AVATAR_API}${index}.png` + `${process.env.AVATAR_KEY}`}
                  key={index}
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              ))}
            </div>
            <p className="text-success font-semibold text-sm tracking-widest mt-6">{page.home.reward}</p>
          </div>
        </section>

        {/* 
        <div className="flex items-start">
            <FeatureShapeGenerator features={items} styles={`scale-x-[-1]`} />
            <div className="flex flex-col items-center">
              <Image src={require("public/shield.svg")} className="mx-10" width={400} height={400} alt="shield" />

              <div className="text-center">
                <p className="text-2xl text-active font-semibold mt-4">Graph v1</p>
                <p className="text-2xl text-info font-semibold mt-4">Support All Social Media</p>
                <p className="text-2xl text-purple-300 font-semibold mt-4">Handel large files up to 100mb</p>
                <p className="text-2xl text-purple-400 font-semibold mt-4">create different charts and AI results</p>
              </div>
            </div>
            <FeatureShapeGenerator features={items} />
          </div> */}
      </div>

      <div className="w-full bg-contrast py-20 flex justify-center">
        <div className="container flex justify-center relative">
          <ChartPreView />
        </div>
      </div>
    </div>
  );
}
