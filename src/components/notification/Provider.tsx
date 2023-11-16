"use client";

import { useEffect, useState } from "react";
import Notif from "./Notif";
import useNotificationsStore from "@/store/notification";

export default function NotificationProvider() {
  const { listNotifications } = useNotificationsStore();
  return (
    <div className="absolute top-4 right-4">
      {listNotifications.length > 0 && <Notif notif={listNotifications[0]} key={listNotifications[0].id} />}
    </div>
  );
}
