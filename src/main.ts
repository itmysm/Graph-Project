import { createApp } from 'vue'

import App from './App.vue'
import { i18n } from './i18n/i18n'
import { createPinia } from 'pinia'
import router from './router'

// styles
import './assets/styles/tailwind.css' // tailwind styles

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
