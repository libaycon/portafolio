import { BiLogoFacebook } from 'react-icons/bi';
import Main from './main';
import Section from './section';


export default function Home() {
	const apps = [
		{ Icon: BiLogoFacebook, title: 'Ecommerce Django', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Facturación Electrónica', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Chat OpenAI Connector', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'ML Stock Manager', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Snake Game', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ Icon: BiLogoFacebook, title: 'Start X369 ERP', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
	]


	return <>
		<div className='relative flex w-full min-h-[calc(100vh-60px)] h-max pb-12'>
			<Main />
		</div>
		<div className='relative flex w-full h-max py-20 dark:bg-linerGr'>
			<div className='absolute -top-[4rem] -bottom-[4rem] left-0 right-0 bg-[rgba(255,255,255,0)] bg-linerWt dark:bg-linerDk z-[-1]' />
			<Section apps={apps} />
		</div>
	</>
}