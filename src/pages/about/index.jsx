import { GroupByTime } from "@/utils/analyze/groupByTime"

export default function AboutGraph() {
  const x = new GroupByTime(1632086400)
  console.log(x.day());
  return (<>
    about us
  </>)
}