"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/result/Card";
import Chart from "@/components/result/Chart";
import useAppStore from "@/store/app";
import { get } from "idb-keyval";
import { chartsStructures } from "@/constants";
import { ChartsStructure } from "@/types/constant";

export default function Result() {
  const { fileInfo } = useAppStore();
  const router = useRouter();
  const [isChartsReady, setIsChartsReady] = useState<Boolean>(false);
  const [chartsStructure, setChartsStructure] = useState<ChartsStructure>(chartsStructures["defaultStructure"]);
  const [messages, setMessages] = useState<ChartsStructure>();

  const onGetChatsFromIndexDB = async () => {
    const exportedMessages = await get("exportedMessages");
    setMessages(exportedMessages);
    setIsChartsReady(true);
  };

  useEffect(() => {
    if (!fileInfo?.application) {
      router.push("/app");
    } else {
      setChartsStructure(chartsStructures[fileInfo.application]);
      onGetChatsFromIndexDB();
    }
  }, []);
  return (
    <div className="w-full h-full bg-primary bg-gradient-main flex justify-center">
      <div className="flex flex-wrap gap-1 md:gap-5 w-full container py-10 px-10 md:px-0 ">
        {messages &&
          isChartsReady &&
          Object.keys(chartsStructure).map((key, index) => (
            <Card key={index} classes="w-full max-w-[250px] h-fit" chartInfo={chartsStructure[key]}>
              <Chart config={{}} messagesProp={messages} classes="w-full" />
            </Card>
          ))}
      </div>
    </div>
  );
}
