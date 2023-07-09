import { useSelector } from "react-redux"

export default function Tasks(props) {
  const currentStep = useSelector((state) => state.process.step)
  return (
    <div className="flex items-center justify-center w-full h-full absolute z-10">
      <ul className="flex flex-col items-center justify-center">
        {
          props.titles.map((item, index) => {
            if (currentStep == item.step) {
              return (
                <li className={`flex text-yellow opacity-100} scale-125 transition-all duration-300`} key={index}>
                  <p className="ml-2 tracking-wide font-light">{item.name}</p>
                  {/* <Loading color="secondary" textColor="secondary" type="spinner" size="lg" /> */}
                </li>
              )
            } else if (currentStep == item.step + 1 || currentStep == item.step - 1) {
              return (
                <li className={`flex text-yellow opacity-50 scale-100 transition-all duration-300 mb-3 mt-2`} key={index}>
                  <p className="ml-2 tracking-wide font-light">{item.name}</p>
                </li>
              )
            } else {
              return (
                <li className={`flex text-yellow opacity-25 scale-100 transition-all duration-300`} key={index}>
                  <p className="ml-2 tracking-wide font-light">{item.name}</p>
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  )
}