export const chartConfigs = {
  whatsapp: {
    eachPersonMessagesPie: {
      title: 'All messages',
      keyNameInIndexDB: 'numberOfMessages',
      chartType: 'Pie',
      periodSupport: true,
      maxNumberOfXAxis: 24,
    },
    eachPersonMessagesLineSmooth: {
      title: 'All Messages',
      keyNameInIndexDB: 'numberOfMessages',
      chartType: 'LineSmooth',
      periodSupport: true,
      maxNumberOfXAxis: 12,
    },
  }
}