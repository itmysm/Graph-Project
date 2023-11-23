"use client";

import { bytesToKb, shortFileNameWithExtension } from "@/lib/general";
import useAppStore from "@/store/app";
import useNotificationsStore from "@/store/notification";
import { Alert, Page } from "@/types/locales";
import { Button, Chip, Spinner, Tooltip } from "@nextui-org/react";
import { FiCheck, FiClock, FiRotateCw } from "react-icons/fi";

const steps = [
  { title: "Checking the extension of the uploaded file.", step: 0 },
  { title: "Checking the textual structure of the file", step: 1 },
  { title: "Convert file structure to standard format", step: 2 },
  { title: "Analyzing data and save the results", step: 3 },
  { title: "Generating charts based results", step: 3 },
];

type Props = {
  i18n: Alert
  extraClasses: string;
};

export default function Progresser({ i18n, extraClasses }: Props) {
  const { status, reset, fileInfo } = useAppStore();
  const { addNewAlert } = useNotificationsStore();

  console.log(i18n);
  

  const onResetState = () => {
    addNewAlert({
      type: "warning",
      title: `${i18n.fileRemoved}`,
      content: ``,
      id: new Date().getTime(),
    });

    reset();
  };

  return (
    <div className={`flex-col justify-center items-center px-4 lg:py-20 ${extraClasses}`}>
      {/* <div className="mb-4 md:mb-6 lg:mb-10">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-info"></p>
        <p className="text-center font-semibold text-info/70 mt-4 tracking-widest">Simple, Secure, Offline</p>
      </div> */}

      <div className="bg-primary/40 shadow-lg rounded-xl w-full md:w-[440px] h-fit md:h-fit backdrop-blur-md">
        <div className="flex justify-between p-3 text-contrast border border-gray/50 rounded-xl">
          <span className="flex items-center">
            <p className="text-base tracking-wide">{shortFileNameWithExtension(fileInfo?.name, 15)}</p>
            <p className="text-gray/90 text-xs ml-2">{bytesToKb(fileInfo?.size)}</p>
          </span>

          <Tooltip radius="md" content="upload new file" color="secondary">
            <Button isIconOnly color="danger" variant="light" aria-label="close" onClick={onResetState}>
              <FiRotateCw className="text-xl" strokeWidth="3" />
            </Button>
          </Tooltip>
        </div>

        <ul>
          {steps.map((item, index) => {
            return (
              <li className="flex text-primary justify-between p-4 my-1" key={index}>
                <span className="flex flex-col">
                  <p className="text-contrast font-semibold tracking-wide text-sm">{item.title}</p>
                  <Chip
                    className="mt-2"
                    color={(item.step == status.state && "danger") || (item.step < status.state && "success") || (item.step > status.state && "secondary")}
                    variant="shadow"
                    size="sm"
                  >
                    <p className="text-[10px] text-contrast">
                      {(item.step == status.state && "in progress") || (item.step < status.state && "done") || (item.step > status.state && "in queue")}
                    </p>
                  </Chip>
                </span>
                <Button isIconOnly color="success" variant="light" aria-label="close">
                  {(item.step == status.state && <Spinner size="sm" color="danger" />) ||
                    (item.step < status.state && <FiCheck className="text-xl" strokeWidth="3" />) ||
                    (item.step > status.state && <FiClock className="text-xl" strokeWidth="3" />)}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
