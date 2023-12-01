import { timeConstants } from "../constants"

export class ChartHandler {
  recognizer() {

  }

  xAxisGenerator(timeFormat) {
    const selectedTimeFormat = timeConstants[timeFormat]
    const xAxis = Object.keys(selectedTimeFormat).map((time) => selectedTimeFormat[time].shortName)
    return xAxis
  }

  dataExtractor(data, timeFormat, fillTimeGaps = false) {
    const selectedTimeFormat = timeConstants[timeFormat]
    let extractedData = {}

    if (fillTimeGaps) {
      Object.keys(selectedTimeFormat).map((time) => {
        extractedData[selectedTimeFormat[time].key] = { value: 0, name: selectedTimeFormat[time].key }
      })

      extractedData = Object.values({ ...extractedData, ...data[timeFormat] })
      return extractedData
    } else {
      extractedData = Object.values(data[timeFormat])
      return extractedData
    }
  }
} 