import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { Collapse, Modal, useModal, Button, Text } from "@nextui-org/react";
import { FiGrid, FiKey, FiPenTool, FiWifiOff, FiGithub, FiTwitter, FiCodepen, FiSend, FiMoon, FiSun } from 'react-icons/fi';
import ThemeSwitcher from '@/components/App/ThemeSwitcher';

export default function Home() {
	const { setVisible, bindings } = useModal();
	const { t } = useTranslation()

	useEffect(() => {
		AOS.init({
			duration: 600
		});
	}, [])

	const features = [
		{ title: 'Secure & Open Source', description: 'Graph is an open-source project with its source code available on GitHub, ensuring high security as it operates entirely client-side, with no data being sent to the server.', icon: <FiKey style={{ color: 'rgb(var(--color-yellow))', size: '50px' }} /> },
		{ title: 'Responsive For Mobile', description: 'The website is designed to be highly responsive, ensuring a seamless user experience across various browsers and devices, prioritizing optimal functionality and user satisfaction.', icon: <FiGrid style={{ color: 'rgb(var(--color-teal))', size: '50px' }} />, },
		{ title: 'Customizable', description: "Graph provides extensive customization options, empowering users to personalize their experience by adjusting the program's language, theme, and more to suit their preferences and needs.", icon: <FiPenTool style={{ color: '#eb92d5', size: '50px' }} /> },
		{ title: 'No Need To internet', description: 'Graph also offers a PWA that allows you to access it offline, ensuring convenient availability and enhanced security measures.', icon: <FiWifiOff style={{ color: 'rgb(var(--color-info))', size: '50px' }} /> }
	];

	const faq = [
		{ title: 'Which apps does Graph support?', description: 'It has been tried as much as possible to support the exported data of all famous social media in the world. But currently Graph supports Telegram, WhatsApp and Instagram' },
		{ title: 'Are my uploaded chats on the graph stored on your servers?', description: 'No! As mentioned above, all calculations and analyzes are performed on your device and no data is sent from users to the server.' },
		{ title: 'Can I contribute to this project?', description: 'Yes! We welcome any kind of cooperation on this project and we welcome your cooperation.' }
	]

	const socialMedia = [
		{ title: 'Github', icon: <FiGithub style={{ color: 'rgb(var(--color-teal))', size: '50px' }} />, link: 'https://www.github.com/itmysm' },
		{ title: 'Twitter', icon: <FiTwitter style={{ color: 'rgb(var(--color-teal))', size: '50px' }} />, link: 'https://www.twitter.com/itmysm' },
		{ title: 'Codepen', icon: <FiCodepen style={{ color: 'rgb(var(--color-teal))', size: '50px' }} />, link: 'https://www.codepen.com/itmysm' },
		{ title: 'Telegram', icon: <FiSend style={{ color: 'rgb(var(--color-teal))', size: '50px' }} />, link: 'https://www.t.me/itmysm' }
	]

	return (
		<main
			className={`selection:bg-gray-text selection:text-white min-h-screen w-full flex justify-center font-inter !bg-secondary px-5 md:px-10 xl:px-0 py-10 transition-colors`}>
			<div className='w-full xl:max-w-[1200px]'>

				<header className='flex justify-between'>
					<Link href="/" className='font-semibold text-xl text-info'>Graph Project</Link>
					<Button className="text-sm font-semibold text-primary-active bg-secondary-hover hover:bg-secondary-active rounded-lg" auto onPress={() => setVisible(true)}>
						What Is Graph?
					</Button>

					<Modal
						className='bg-secondary-active'
						scroll
						width="600px"
						aria-labelledby="modal-title"
						aria-describedby="modal-description"
						{...bindings}
					>
						<Modal.Header>
						</Modal.Header>
						<Modal.Body>
							<Text className='text-primary' id="modal-description">
								Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
								dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
								ac consectetur ac, vestibulum at eros. Praesent commodo cursus
								magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
								purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
								egestas eget quam. Morbi leo risus, porta ac consectetur ac,
								vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Cras mattis consectetur purus sit amet
								fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
								quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
								Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
								Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
								dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
								ac consectetur ac, vestibulum at eros. Praesent commodo cursus
								magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
								purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
								egestas eget quam. Morbi leo risus, porta ac consectetur ac,
								vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Cras mattis consectetur purus sit amet
								fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
								quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
								Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
								Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
								dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
								ac consectetur ac, vestibulum at eros. Praesent commodo cursus
								magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
								purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
								nisl consectetur et.
							</Text>
						</Modal.Body>
						<Modal.Footer>
							<hr className='w-full h-[1px] bg-gray/25 mb-5' />

							<Button className='border-info hover:bg-info text-primary mt-0' bordered auto onPress={() => setVisible(false)}>
								Get Start
							</Button>
						</Modal.Footer>
					</Modal>
				</header>

				<div className="mt-28 flex flex-col items-center justify-center" data-aos="fade-up">
					<p className='w-full md:w-4/6 lg:w-3/6 xl:w-4/6 text-3xl lg:text-4xl xl:text-6xl font-black text-primary text-center leading-[1.5] md:leading-[1.6] xl:leading-tight'>
						<span className='text-info'>Analyze your chats </span>
						with Graph Project
					</p>

					<p className='text-base md:text-md text-center mt-5 text-primary-hover tracking-wider'>Customize to fit your brand and impress your customers with a professional online presence.</p>

					<Link href="/app">
						<Button className='text-secondary bg-primary hover:bg-primary-active rounded-lg mt-10' size="lg" auto onPress={() => setVisible(false)}>
							Start Analyzing
						</Button>
					</Link>

					<div className='flex mt-8'>
						{Array.from({ length: 3 }).map((_, index) => (
							<Image className={`relative left-[${10}px]`} src={`/media/avatars/` + index + '.png'} key={index} width={40}
								height={40} alt="Picture of the author" />
						))}
					</div>

					<p className='text-teal font-semibold text-sm tracking-widest mt-6'>ALREADY LIKED BY 100+ DEVELOPERS!</p>

					<div className='w-full h-full relative mt-12 md:mt-32'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className='shadow-light rounded-xl' src="/media/banners/shot-1.svg" alt='test' />
					</div>
				</div>

				<section className='flex flex-col items-center px-12 md:px-0 overflow-hidden'>
					<div className='flex flex-col items-center mt-24 md:mt-48'>
						<div className='w-full flex flex-col items-center'>
							<p className='text-xs text-teal uppercase text-center font-semibold tracking-widest'>FEATURES</p>
							<p className='md:w-4/6 lg:w-3/6 xl:w-4/6 text-3xl lg:text-4xl font-black text-center text-primary mt-6 leading-[1.5]'>What makes Graph so special?</p>
							<p className='text-primary text-sm mt-5 text-center'>There are plenty of benefits when using *** template. We tried to list some of them out.</p>
						</div>

						<ul className='w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-8 gap-x-2 md:gap-x-6 lg:gap- mt-32'>
							{features.map((item, index) => (
								<li className='flex flex-col items-center' key={index}>
									<span className='w-14 h-14 flex justify-center items-center text-2xl bg-secondary-active rounded-xl'>
										{item.icon}
									</span>

									<p className='mt-4 text-primary md:text-lg font-semibold'>{item.title}</p>
									<p className='text-sm text-gray-text font-normal tracking-wider text-center mt-3'>{item.description}</p>
								</li>
							))}
						</ul>
					</div>

					<div className='h-[450px] flex flex-col w-[400px] md:w-full md:grid grid-cols-12 md:gap-x-10 lg:gap-x-20 justify-center mt-20 md:mt-36 lg:mt-48'>
						<div className='bg-gradient-to-t from-secondary-active rounded-xl relative col-span-12 md:col-span-6 h-[260px] lg:h-[400px]'>
							<img src='/media/banners/shot-3.svg' className='absolute w-[170px] lg:w-[240px] xl:w-[270px] xl:w-[270px] bottom-5 left-4 md:left-6 md:bottom-6' data-aos="fade-up-right" />
							<img src='/media/banners/shot-2.svg' className='absolute w-[170px] lg:w-[240px] xl:w-[270px] top-5 right-4 md:right-6 md:top-6' data-aos="fade-down-left" />
						</div>

						<div className='lg:flex flex-col justify-center col-span-12 md:col-span-6 text-center md:text-left mt-8 md:mt-0 xl:px-10'>
							<h3 className='text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>Animations & effects</h3>
							<p className='text-sm md:text-base text-gray-text font-normal tracking-wider mt-4 xl:mt-8'>Pre-built animations and effects such as scroll transforms, appear animation, component interactions and more. Benefits? A more dynamic and engaging website that encourages users to explore the site further.</p>
						</div>
					</div>

					<div className='h-[450px] flex flex-col w-[400px] md:w-full md:grid grid-cols-12 md:gap-x-10 lg:gap-x-20 justify-center mt-20 md:mt-36 lg:mt-48'>
						<div className='bg-gradient-to-t from-secondary-active rounded-xl relative col-span-12 md:col-span-6 h-[260px] lg:h-[400px] md:order-last'>
							<img src='/media/banners/shot-4.svg' className='absolute w-[200px] lg:w-[300px] xl:w-[370px] xl:w-[270px] bottom-5 left-10 md:left-6 md:bottom-6' data-aos="fade-up-right" />
							<img src='/media/banners/shot-5.svg' className='absolute w-[70px] lg:w-[100px] xl:w-[140px] top-5 right-10 md:right-6 md:top-6' data-aos="fade-down-left" />
						</div>

						<div className='lg:flex flex-col justify-center col-span-12 md:col-span-6 text-center md:text-left mt-8 md:mt-0 xl:px-10'>
							<h3 className='text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>Desktop, tablet & phone breakpoints</h3>
							<p className='text-sm md:text-base text-gray-text font-normal tracking-wider mt-4 xl:mt-8'>We made sure that this template is optimized for viewing on any device, providing a consistent and optimal experience for users regardless of the device they are using.</p>
						</div>
					</div>
				</section>

				<section className='mt-20 md:mt-32 lg:mt-48'>
					<div className='flex flex-col items-center tetx-center'>
						<p className='text-xs text-teal uppercase text-center font-semibold tracking-widest'>FAQ</p>
						<h3 className='text-primary text-5xl font-semibold mt-8'>Got questions?</h3>
						<div className='flex flex-col text-center text-sm md:text-base text-primary-active mt-6'>
							<p>If you have any other questions - please get in touch at &nbsp;</p>
							<a className='text-primary hover:text-info transition mt-1' href='mailto:dev.mysm@gmail.com'>dev.mysm@gmail.com</a>
						</div>

						<Collapse.Group className='mt-12 md:mt-20 max-w-[700px]'>
							{faq.map((item, index) => (
								<Collapse title={item.title} className='bg-secondary text-primary text-base sm:text-lg md:text-xl font-semibold' key={index}>
									<Text className='text-primary-active'>
										{item.description}
									</Text>
								</Collapse>
							))}
						</Collapse.Group>
					</div>
				</section>

				<footer className='flex flex-col justify-center items-center mt-20 md:mt-32 lg:mt-40 transition-all'>
					<h2 className='text-xl text-info font-semibold tracking-widest'>Graph Project</h2>
					<div className='flex justify-center mt-8'>
						<a className='text-primary hover:text-info font-semibold mr-5' href='#'>Privacy Policy</a>
						<a className='text-primary hover:text-info font-semibold ml-5' href='#'>Terms of Service</a>
					</div>

					<ul className='flex my-8'>
						{socialMedia.map((item, index) => (
							<li className='mb-0' key={index}>
								<a className='flex justify-center items-center w-10 h-10' href={item.link} target='_blank'>{item.icon}</a>
							</li>
						))}
					</ul>

					<span className='flex items-center font-semibold text-sm'>
						<p className='text-primary-active'>Developed by &nbsp;</p>
						<a className='text-primary hover:text-info mt-[3px]' href="#">Mysm</a>
					</span>
				</footer>
			</div>

			<>
				<ThemeSwitcher />
			</>
		</main>
	)
}