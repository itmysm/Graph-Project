import { FiAlertOctagon, FiXOctagon, FiCheckCircle, FiX } from "react-icons/fi";

export default function AlertUi(props) {
  const iconTypes = [
    <FiXOctagon className="opacity-0 mr-3" size='22' key='error' />,
    <FiCheckCircle className="opacity-0 mr-3" size='22' key='success' />,
    <FiAlertOctagon className="opacity-0 mr-3" size='22' key='info' />
  ]

  const onHandelClose = () => {
    console.log('close');
  }

  return (
    <div className={`w-fit min-w-[180px] max-w-[280px] sm:max-w-[340px] md:max-w-[400px] position absolute top-4 right-4 bg-red z-[10] py-3 rounded-xl`}>
      <div className="flex items-center justify-start relative px-3">
        <FiAlertOctagon className="mr-3" size='22' />
        <h3 className="tracking-wide font-normal">{props.title}</h3>
        <FiX className="absolute right-3" size='22' onClick={onHandelClose} />
      </div>

      <div className="flex items-center justify-start relative pl-3 pr-6">
        <FiAlertOctagon className="opacity-0 mr-3" size='22' />
        <p className="text-sm md:text-[17px] leading-normal mt-2">{props.description}</p>
      </div>
    </div>
  )
}