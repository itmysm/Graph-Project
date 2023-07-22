import { DEL_ALERT_BY_ID } from "@/stores/reducers/alert"
import { useEffect, useState } from "react"
import { FiFile, FiX } from "react-icons/fi"
import { useDispatch } from "react-redux"

export default function Alert({ alert }) {
  const dispatch = useDispatch()
  const defaultTimeout = 5000

  const [onVisible, setOnVisible] = useState(true)

  const alertTypes = {
    error: { bg: 'red', icon: '' },
    success: { bg: 'success' },
    info: { bg: 'info' },
  }

  const onHandelClose = () => {
    setOnVisible((current) => !current)
    setTimeout(() => {
      dispatch({ type: DEL_ALERT_BY_ID, payload: { id: alert.id } });
    }, 1500);
  }
  
  setTimeout(() => {
    onVisible && onHandelClose()
  }, defaultTimeout);

  return (
    <div className={`flex justify-between items-center min-w-[300px] ${'bg-' + alertTypes[alert.type].bg} px-3 py-5 rounded-xl transition-all animate__animated ${onVisible ? 'animate__fadeInDown' : 'animate__fadeOutUp'}`}>
      <p className="tracking-wide leading-relaxed">{alert.title}</p>
      <FiX className="ml-3 cursor-pointer hover:text-white/80" size={20} onClick={onHandelClose} />
    </div>
  )
}