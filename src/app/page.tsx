import Main from './main';
import Section from './section';
import gtpConnect from '../assets/images/openAi_connect.svg';
import djEcommerce from '../assets/images/Ecommerce_django.svg';
import fe from '../assets/images/FacturacionElectronica.svg';
import mlStock from '../assets/images/ML_stockManager.svg';
import sGame from '../assets/images/SnakeGame.svg';
import startX369 from '../assets/images/StartX369.svg';


export default function Home() {
	const apps = [
		{ Icon: djEcommerce, title: 'Ecommerce Django', description: 'Plataforma de comercio electrónico con python, django, postgresql, html, bootstrap y paypal.', link: '#', techs: [
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/e2wmwtcb6gc5cfvj5i7c.png', name: 'Python' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/xw0svuuz9ahtu7tnjn2s.png', name: 'Django' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/itgaxkz6jx2rpx92lplz.png', name: 'PostgreSql' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/hc6okvcmqjikvrnvqpgc.png', name: 'Html' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1696018937/icons/bontstrap_wetxlg.png', name: 'Bootstrap' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1696019011/icons/paypal_a8za48.png', name: 'Paypal' },
		]},
		{ Icon: fe, title: 'Facturación Electrónica', description: 'Sistema de facturación electrónica (Gestión de ventas, inventario, clientes, comprobantes, etc.) con python, django, postgresql, sqlite, javascript, html y css.', link: '#', techs: [
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/e2wmwtcb6gc5cfvj5i7c.png', name: 'Python' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/xw0svuuz9ahtu7tnjn2s.png', name: 'Django' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/itgaxkz6jx2rpx92lplz.png', name: 'PostgreSql' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload//c_thumb,w_48,h_48,g_auto/v1696022488/icons/sqlite3_fpdohd.png', name: 'Sqlite' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/qc7dsupffqorfagyz6gv.png', name: 'Javascript' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/hc6okvcmqjikvrnvqpgc.png', name: 'Html' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/wy83lkmdoyffnxdky74d.png', name: 'Css' },
		]},
		{ Icon: gtpConnect, title: 'Chat OpenAI Connector', description: "Aplicacion de chatGTP integrado con API de OpenAI, con Python, Flask, React, TailwindCss y Sqlite3.", link: '#', techs: [
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/e2wmwtcb6gc5cfvj5i7c.png', name: 'Python' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/qoajqedfc3iwb50r4dqh.png', name: 'Flask' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1696018061/icons/typeScript_ktd2dv.png', name: 'TypeScript' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/klubyfz3jujrmbxbhego.png', name: 'React' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/sjgvfpoftg6z5tnl6rev.png', name: 'TailwindCss' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload//c_thumb,w_48,h_48,g_auto/v1696022488/icons/sqlite3_fpdohd.png', name: 'Sqlite3' },
		]},
		{ Icon: mlStock, title: 'ML Stock Manager', description: 'Solución integral de invetario diseñada especificamente par vendedores en Mercado Libre con TypeScript, Nodejs, React, tailwindCss, PostgreSql.', link: '#', techs: [
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1696018061/icons/typeScript_ktd2dv.png', name: 'TypeScript' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/nejkya7xlhren9cvlwwb.png', name: 'Nodejs' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/yqbzhvvg0ymp8gdkcsdu.png', name: "Express"},
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/klubyfz3jujrmbxbhego.png', name: 'React' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/sjgvfpoftg6z5tnl6rev.png', name: 'TailwindCss' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/itgaxkz6jx2rpx92lplz.png', name: 'PostgreSql' },
		]},
		{ Icon: sGame, title: 'Snake Game', description: 'Un clásico juego Snake con TypeScript, NextJs y tawildCss', link: '/projects/snake', techs: [
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1696018061/icons/typeScript_ktd2dv.png', name: 'TypeScript' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/yflff899h0ijgrieacki.png', name: 'NextJs' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/sjgvfpoftg6z5tnl6rev.png', name: 'TailwindCss' },
		]},
		{ Icon: startX369, title: 'Start X369 ERP', description: 'Sistema ERP. Actualmente Desarrollo, con Nextjs, TypeScript, python, Django, PostgreSql, TailwindCss.', link: '#', techs: [
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1696018061/icons/typeScript_ktd2dv.png', name: 'TypeScript' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/yflff899h0ijgrieacki.png', name: 'NextJs' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/e2wmwtcb6gc5cfvj5i7c.png', name: 'Python' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925956/icons/xw0svuuz9ahtu7tnjn2s.png', name: 'Django' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/itgaxkz6jx2rpx92lplz.png', name: 'PostgreSql' },
			{ Icon: 'https://res.cloudinary.com/dppta0r5e/image/upload/v1694925957/icons/sjgvfpoftg6z5tnl6rev.png', name: 'TailwindCss' },
		]},
	];

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