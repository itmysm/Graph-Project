"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/result/Card";
import Chart from "@/components/result/Chart";
import useAppStore from "@/store/app";
import { get } from "idb-keyval";
import { ResponseMainFlowMethods, allCharts, chartsView } from "@/constants";
import { TargetCharts } from "@/types/charts";
import { getClientSideLocales } from "@/lib/locales/clientSideLocales";
import { LocaleLabel } from "$/i18n.config";
import useResultStore from "@/store/result";

export default function Result({ params }: { params: { lang: LocaleLabel } }) {
  const router = useRouter();
  const { fileInfo } = useAppStore();
  const { updateExportedMessages, results } = useResultStore();
  const [data, setData] = useState<[ResponseMainFlowMethods[keyof ResponseMainFlowMethods] | null]>(results);
  const [isChartsReady, setIsChartsReady] = useState<Boolean>(false);
  const [targetCharts, setTargetCharts] = useState<TargetCharts | null>(null);
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    if (!results) {
      router.push("/app");
    } else {
      setTargetCharts(allCharts[fileInfo.application]);
      setIsChartsReady(true);
      Object.keys(allCharts[fileInfo.application]).map((chartKey: keyof TargetCharts, index) =>
        console.log(allCharts[fileInfo.application][chartKey], index)
      );
    }
  }, [results]);

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

  return (
    translations && (
      <div className="w-full bg-primary bg-gradient-main flex justify-center min-h-full max-h-[fit-content] overflow-y-hidden">
        <div className="flex flex-wrap gap-y-4 gap-x-2 md:gap-5 w-full container py-10 px-10 md:px-0">
          {isChartsReady &&
            targetCharts &&
            Object.keys(targetCharts).map((chartKey: keyof TargetCharts, index) => (
              <Card key={index} i18n={translations.charts.titles} classes={chartsView[chartKey]} chartInfo={targetCharts[chartKey]}>
                <Chart target={targetCharts[chartKey].target} />
              </Card>
            ))}
        </div>
      </div>
    )
  );
}
