import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

// import ECharts modules manually to reduce bundle size
import {
  SVGRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

import { PieChart } from 'echarts/charts'
import { LegendComponent } from 'echarts/components'
import { TitleComponent } from 'echarts/components';

export default defineNuxtPlugin(({ vueApp }) => {
  use([
    SVGRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    PieChart,
    TitleComponent,
    LegendComponent
  ])
  
  vueApp.component('v-chart', ECharts)
})
