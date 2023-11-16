import { Notification } from "@/types/store";

import useNotificationsStore from "@/store/notification";
import { useEffect, useState } from "react";
import { FiFile, FiX } from "react-icons/fi";

export default function Notif({ notif }: { notif: Notification }) {
  const { deleteAlertById } = useNotificationsStore();

  const defaultTimeout = 5000;

  const [onVisible, setOnVisible] = useState(true);

  const alertTypes = {
    error: { bg: "error", text: "white", icon: "" },
    // success: { bg: "success", text: "white" },
    // info: { bg: "info", text: "white" },
    // warning: { bg: "warning", text: "error" },
  };

  const onHandelClose = () => {
    setOnVisible((current) => !current);
    setTimeout(() => {
      deleteAlertById(notif.id);
    }, 1500);
  };

  setTimeout(() => {
    onVisible && onHandelClose();
  }, defaultTimeout);

  return (
    <div
      className={`${
        `light flex justify-between items-center min-w-[300px] bg-` + alertTypes['error'].bg
      } px-3 py-5 rounded-xl transition-all animate__animated ${
        onVisible ? "animate__fadeInDown" : "animate__fadeOutUp"
      }`}
    >
      <p className={`${`tracking-wide leading-relaxed text-` + alertTypes['error'].text} `}>{notif.title}</p>
      <FiX className="ml-3 cursor-pointer hover:text-white/80" size={20} onClick={onHandelClose} />
    </div>
  );
}
