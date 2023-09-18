import Image from 'next/image';
import imgBg from '/public/bg.png';
import imPhoto from '/public/im-com.png';
import ParticlesComponent from '@/components/particles/particles';
import { BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram, BiLogoYoutube, BiSolidRightArrow } from 'react-icons/bi';


export default function Home() {
	const apps = [
		{ Icon: BiLogoFacebook, title: 'Facebook', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Facebook', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Facebook', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Facebook', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Facebook', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Facebook', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
	]


	return <>
		{/* @ts-ignore */}
		<ParticlesComponent />
		<div className='main-bg-img' />
		<div className='relative flex flex-col md:flex-row gap-4 items-center select-none'>
			<div className='flex-1 p-4 pt-6 md:p-8 w-[90%] space-y-4'>
				<div className='flex flex-row gap-4 text-white'>
					<button className='rounded-full bg-sky-500 p-2 flex items-center justify-center hover:scale-110 transition-all'>
						<BiLogoLinkedin size='1.7rem' />
					</button>
					<button className='rounded-full bg-sky-500 p-2 flex items-center justify-center hover:scale-110 transition-all'>
						<BiLogoFacebook size='1.7rem' />
					</button>
					<button className='rounded-full bg-sky-500 p-2 flex items-center justify-center hover:scale-110 transition-all'>
						<BiLogoInstagram size='1.7rem' />
					</button>
					<button className='rounded-full bg-sky-500 p-2 flex items-center justify-center hover:scale-110 transition-all'>
						<BiLogoYoutube size='1.7rem' />
					</button>
				</div>
				<h1 className='text-4xl md:text-6xl font-extrabold'>
					Hola, soy Enok Lima, un software developer.
				</h1>
				<p className='text-lg md:text-xl font-[500] text-slate-500'
				>Me encanta crear soluciones innovadoras y eficientes para los problemas que se presentan en el mundo digital</p>
				<div className='flex flex-row items-center justify-start gap-6'>
					<button className='py-3 px-5 rounded-tr-2xl rounded-bl-2xl border-2 border-solid border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-all'>
						Contacteme
					</button>
					<button className='play-btn relative flex rounded-full bg-sky-500 hover:bg-white text-white hover:text-sky-500 p-4'>
						<BiSolidRightArrow size='1.5rem' className="icon-play" />
					</button>
				</div>
			</div>
			<div className='relative flex w-/4 mt-[13rem] md:px-8'>
				<Image src={imgBg} alt='bg' width={300} className='rounded-[2rem] border-8 border-slate-500' />
				<div className='absolute w-full h-[500px] min-h-max bottom-[8px] left-0 right-0 transition-all'>
					<Image src={imPhoto} alt='bg' priority className='h-full w-auto m-auto' />
				</div>
			</div>
		</div>
		<div className='flex flex-col p-8 gap-16'>
			<div className='flex justify-start'>
				<h1 className='text-3xl font-semibold'>
					Apps
				</h1>
			</div>
			<div className='flex flex-row flex-wrap justify-around'>
				{apps.map((app, i) => (
					<div key={`${app.title}-${i}`} className='px-4 py-3 h-max md:w-1/3 border-1 border-solid border-sky-500 rounded-xl'>
						<div className='flex flex-col justify-start gap-2'>
							<div className='text-sky-500'>
								<app.Icon size='2rem' />
							</div>
							<h1>
								{app.title}
							</h1>
							<p className='text-tiny line-clamp-2'>{app.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</>
}