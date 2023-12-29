"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/result/Card";
import Chart from "@/components/result/Chart";
import useAppStore from "@/store/app";
import { getClientSideLocales } from "@/lib/locales/clientSideLocales";
import { LocaleLabel } from "$/i18n.config";
import { get } from "idb-keyval";
import useResultStore from "@/store/result";
import { MessagesStructure } from "@/types/core";
import { ChartType, charts } from "@/lib/charts/charts.map";
import { SupportedApplications } from "@/types/core";
import Selector from "@/components/result/options/Selector";
import { Divider } from "@nextui-org/react";

export default function Result({ params }: { params: { lang: LocaleLabel } }) {
  const router = useRouter();
  const { fileInfo } = useAppStore();
  const { results } = useResultStore();

  const application = fileInfo.application;
  const [data, setData] = useState<MessagesStructure[] | null>();
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    if (results) {
      setData(data);
    } else {
      router.push("/app");
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
    translations &&
    application && (
      <div className="w-full bg-primary bg-gradient-main flex flex-col items-center min-h-full max-h-[fit-content] overflow-y-hidden">
        <div className="w-full flex justify-start container">
          <Selector />
        </div>

        {/* <Divider className="w-full border border-gray/20 container" /> */}

        <div className="flex flex-wrap gap-y-4 gap-x-2 md:gap-5 w-full container py-10 px-10 md:px-0">
          {Object.keys(charts[application]).map((key, index) => {
            return (
              <Card
                key={index}
                cardTitle={charts[application][key].title}
                classes={charts[application][key].styles}
                i18n={translations.charts.titles}
              >
                <Chart chart={charts[application][key]} />
              </Card>
            );
          })}
        </div>
      </div>
    )
  );
}
