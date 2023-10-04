// convert results to make result readable for echarts, charts

export class ConverterResults {

  PieConverter(data) {
    const type = data?.periods
    const keys = []
    const values = []

    if (type != undefined) {
      Object.values(data.periods).forEach((period) => {
        if (typeof period === 'object') {

        }
      })
    }
  }
}