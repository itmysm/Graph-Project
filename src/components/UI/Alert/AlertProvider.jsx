import { useSelector } from "react-redux"
import Alert from "./Alert";
import { useEffect, useState } from "react";

export default function AlertProvider() {
  const alerts = useSelector((state) => state.alert.alerts)

  return (<div className="absolute top-4 right-4">
    {
      alerts.length > 0 && <Alert alert={alerts[0]} key={alerts[0].id} />
    }
  </div>)
}