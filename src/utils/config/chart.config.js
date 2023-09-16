export const chartConfigs = {
  whatsapp: {
    eachPersonMessagesPie: {
      title: 'Each Person Messages',
      keyNameInIndexDB: 'messagesByPerson',
      chartType: 'Pie',
      periodSupport: true
    },
    eachPersonMessagesLineSmooth: {
      title: 'Each Person Messages',
      keyNameInIndexDB: 'messagesByPerson',
      chartType: 'LineSmooth',
      periodSupport: true
    },
  }
}



let x = ['comp1', 'comp2', 'comp3']

x.map((component) => {
  <component></component>
})