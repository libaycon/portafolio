import Image from 'next/image';
import imgBg from '/public/bg.png';
import imPhoto from '/public/im-com.png';

export default function Home() {
  return <>
    <div className='relative flex flex-col md:flex-row gap-4 items-center'>
      <div className='flex-1 p-4 pt-12 md:p-8 w-[90%] space-y-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold'>
          Hola, soy Enok Lima, un software developer.
        </h1>
        <p className='text-lg md:text-2xl font-[500] text-slate-400'
        >Me encanta crear soluciones innovadoras y eficientes para los problemas que se presentan en el mundo digital</p>
      </div>
      <div className='relative flex w-/4 mt-[13rem]'>
        <Image src={imgBg} alt='bg' width={300} className='rounded-[2rem] border-8 border-slate-500' />
        <div className='absolute w-full h-[500px] min-h-max bottom-[8px] left-0 right-0'>
          <Image src={imPhoto} alt='bg' priority className='h-full w-auto m-auto' />
        </div>
      </div>
    </div>
    </>
}