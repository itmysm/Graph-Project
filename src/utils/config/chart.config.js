export const chartConfigs = {
  whatsapp: {
    eachPersonMessagesPie: {
      chartTitle: 'All messages',
      blocksName: 'Message',
      keyNameInIndexDB: 'numberOfMessages',
      chartType: 'Pie',
      chartName: 'Pie',
      periodSupport: true,
      maxNumberOfXAxis: 24,
    },
    eachPersonMessagesLineSmooth: {
      chartTitle: 'All messages',
      blocksName: 'Message',
      keyNameInIndexDB: 'numberOfMessages',
      chartType: 'LineSmooth',
      chartName: 'LineSmooth',
      periodSupport: true,
      maxNumberOfXAxis: 12,
    },
  }
}