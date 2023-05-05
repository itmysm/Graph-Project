import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Home() {
  const { t } = useTranslation('common')

  return(
    <main
      className={`flex min-h-screen w-full font-inter`}>
        <p>{t('start')}</p>
    </main>
  )
}