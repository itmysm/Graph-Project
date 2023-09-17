import { periodTypes } from "../config/chart.config"
import { getTimestampInfo } from "../tools"

export class GroupByTime {
  constructor(unixTime) {
    this.unixTime = unixTime
    this.timeInfo = getTimestampInfo(this.unixTime)
  }

  day() {
    return this.timeInfo.hours
  }
}