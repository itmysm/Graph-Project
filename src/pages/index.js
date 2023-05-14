import NBtn from '@/components/UI/Btn';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation()
  return (
    <main
      className={`min-h-screen w-full flex justify-center font-inter bg-secondary px-5 md:px-10 xl:px-0 py-10`}>

      <div className='w-full xl:max-w-[1100px]'>
        <header className='flex justify-between'>
          <Link href="/" className='font-semibold text-xl text-info'>Graph Project</Link>
          <NBtn custom="text-sm font-semibold text-primary bg-secondary-hover hover:bg-secondary rounded-lg" size="md">What is Graph?</NBtn>
        </header>

        <div class="mt-28 flex flex-col items-center justify-center">
          <p className='w-full md:w-4/6 lg:w-3/6 xl:w-4/6 text-3xl lg:text-4xl xl:text-6xl font-black text-center leading-[1.5] md:leading-[1.6] xl:leading-tight'>
            <span className='text-info'>Analyze your chats </span>
            with Graph Project
          </p>

          <p className='text-sm md:text-md text-center mt-5 text-primary'>Customize to fit your brand and impress your customers with a professional online presence.</p>

          <NBtn custom="text-sm font-semibold text-secondary bg-primary hover:bg-info hover:text-primary rounded-lg mt-10" size="lg">Start Analyzing</NBtn>
        </div>

        <div className='flex flex-col items-center mt-8'>
          <div className='flex'>
            {Array.from({ length: 3 }).map((_, index) => (
              <Image className={`relative left-[${10}px]`} src={`/media/avatars/` + index + '.png'} key={index} width={40}
                height={40} alt="Picture of the author" />
            ))}
          </div>
          
          <p className='text-teal font-semibold text-xs tracking-widest mt-6'>ALREADY LIKED BY 100+ DEVELOPERS!</p>
        </div>
      </div>
    </main>
  )
}

function getAvatar() {
  let avatarId = 'Binx Bond'
  return fetch('https://api.multiavatar.com/'
    + JSON.stringify(avatarId))
    .then(res => res.text())
    .then(svg => console.log(svg))
}