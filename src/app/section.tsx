
export default function section({apps}: {apps: { Icon: any, title: string, description: string }[]}) {
    return <>
        <div className='container m-auto flex flex-col p-8 gap-16'>
            <div className='flex justify-start'>
                <h1 className='text-3xl font-semibold'>
                    Apps
                </h1>
            </div>
            <div className='grid grid-cols-auto-fit-1fr tablet:grid-cols-auto-fit2-1fr gap-10 select-none'>
                {apps.map((app, i) => (
                    <div key={`${app.title}-${i}`} className='px-4 py-3 border-2 border-solid bg-[#889ad71c] border-[#c0c8e3] dark:border-[#37288f82] rounded-xl hover:border-[#9873ff] dark:hover:border-[#673AB7] hover:shadow-violet25 dark:hover:shadow-violet50 transition-all ease-in-out duration-300'>
                        <div className='flex flex-col justify-start gap-2'>
                            <div className='text-sky-500'>
                                <app.Icon size='2rem' />
                            </div>
                            <h1 className="text-xl font-bold">
                                {app.title}
                            </h1>
                            <p className='text-sm font-semibold text-slate-500 dark:text-slate-400 line-clamp-2'>{app.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}
