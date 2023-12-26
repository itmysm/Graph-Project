"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/result/Card";
import Chart from "@/components/result/Chart";
import useAppStore from "@/store/app";
import { get } from "idb-keyval";
import { allCharts, chartsView, mainFlowMethods } from "@/constants";
import { TargetCharts } from "@/types/charts";
import { getClientSideLocales } from "@/lib/locales/clientSideLocales";
import { LocaleLabel } from "$/i18n.config";
import useResultStore from "@/store/result";

export default function Result({ params }: { params: { lang: LocaleLabel } }) {
  const router = useRouter();
  const { fileInfo } = useAppStore();
  const { updateExportedMessages } = useResultStore();
  const [isChartsReady, setIsChartsReady] = useState<Boolean>(false);
  const [targetCharts, setTargetCharts] = useState<TargetCharts>(
    allCharts["defaultStructure"]
  );
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    if (!fileInfo?.application) {
      router.push("/app");
    } else {
      setTargetCharts(allCharts[fileInfo.application]);
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
    updateExportedMessages(exportedMessages);
    setIsChartsReady(true);
  };

  return (
    translations && (
      <div className="w-full bg-primary bg-gradient-main flex justify-center min-h-full max-h-[fit-content] overflow-y-hidden">
        {/* <div className="flex flex-wrap gap-y-4 gap-x-2 md:gap-5 w-full container py-10 px-10 md:px-0">
          {isChartsReady &&
            Object.keys(targetCharts).map((chartKey: keyof TargetCharts, index) => (
              <Card key={index} i18n={translations.charts.titles} classes={chartsView[chartKey]} chartInfo={targetCharts[chartKey]}>
                <Chart chart={targetCharts[chartKey]} mainflow={mainFlowMethods[targetCharts[chartKey].target]} classes="w-full" />
              </Card>
            ))}
        </div> */}
      </div>
    )
  );
}
