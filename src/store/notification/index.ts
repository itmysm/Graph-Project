import { NotificationStore, Notification } from "@/types/store";
import { create } from "zustand";

const useNotificationsStore = create<NotificationStore>((set) => ({
  listNotifications: [],

  addNewAlert: (newNotification: Notification) =>
    set((state) => ({
      listNotifications: [...state.listNotifications, newNotification],
    })),

  deleteAlertById: (notifId: number) =>
    set(({ listNotifications }) => ({
      listNotifications: listNotifications.filter((notif) => notif.id !== notifId),
    })),
}));

export default useNotificationsStore;
