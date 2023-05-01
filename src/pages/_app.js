import Application from '@/layouts/Application'
import Default from '@/layouts/Default'
import '@/styles/globals.css'

const layouts = {
  App: Application,
  Default: Default
}

export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || Default;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}