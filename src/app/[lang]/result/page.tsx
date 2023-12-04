"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/result/Card";
import Chart from "@/components/result/Chart";
import useAppStore from "@/store/app";
import { get } from "idb-keyval";
import { chartsStructures, chartsView } from "@/constants";
import { ChartsStructure } from "@/types/constant";
import { getClientSideLocales } from "@/lib/locales/clientSideLocales";
import { LocaleLabel } from "$/i18n.config";

export default function Result({ params }: { params: { lang: LocaleLabel } }) {
  const { fileInfo } = useAppStore();
  const router = useRouter();
  const [isChartsReady, setIsChartsReady] = useState<Boolean>(false);
  const [chartsStructure, setChartsStructure] = useState<ChartsStructure>(chartsStructures["defaultStructure"]);
  const [messages, setMessages] = useState<ChartsStructure>();
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    if (!fileInfo?.application) {
      router.push("/app");
    } else {
      setChartsStructure(chartsStructures[fileInfo.application]);
      onGetChatsFromIndexDB();
    }
  }, []);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translationModule = await getClientSideLocales(params.lang);
        setTranslations(translationModule);
      } catch (error) {
        window.alert("Error loading translations");
        console.log("Error loading translations:", error);
      }
    };

    fetchTranslations();
  }, [params.lang]);

  const onGetChatsFromIndexDB = async () => {
    const exportedMessages = await get("exportedMessages");
    setMessages(exportedMessages);
    setIsChartsReady(true);
  };

  return (
    translations && (
      <div className="w-full bg-primary bg-gradient-main flex justify-center min-h-full max-h-[fit-content] overflow-y-hidden">
        <div className="flex flex-wrap gap-y-4 gap-x-2 md:gap-5 w-full container py-10 px-10 md:px-0">
          {messages &&
            isChartsReady &&
            Object.keys(chartsStructure).map((key, index) => (
              <Card key={index} i18n={translations.charts.titles} classes={chartsView[key]} chartInfo={chartsStructure[key]}>
                <Chart chart={chartsStructure[key]} messagesProp={messages} classes="w-full" />
              </Card>
            ))}
        </div>
      </div>
    )
  );
}
