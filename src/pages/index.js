import { useTranslation } from 'next-i18next'


export default function Home() {
  const { t } = useTranslation()
  return (
    <main
      className={`min-h-screen w-full font-inter bg-secondary`}>
      {/* <p>{t('start')}</p>
        <br /> */}
    </main>
  )
}