import { appWithTranslation } from 'next-i18next'

import Application from '@/layouts/Application'
import Default from '@/layouts/Default'
import '@/styles/globals.css'

const layouts = {
  App: Application,
  Default: Default
}

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)