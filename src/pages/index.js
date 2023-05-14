import { useTranslation } from 'next-i18next'


export default function Home() {
  const { t } = useTranslation()
  return(
    <main
      className={`flex min-h-screen w-full font-inter`}>
        <p>{t('start')}</p>
        <br />
    </main>
  )
}