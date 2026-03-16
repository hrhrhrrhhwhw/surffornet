import Image from 'next/image'

const DATA_STACK = [
    { id: 1, url: '/svg/nextjs.svg' },
    { id: 2, url: '/svg/eslint.svg' },
    { id: 3, url: '/svg/firebase.svg' },
    { id: 4, url: '/svg/lottiefiles.svg' },
    { id: 5, url: '/svg/mongodb.svg' },
    { id: 6, url: '/svg/motion.svg' },
    { id: 7, url: '/svg/vercel.svg' },
    { id: 8, url: '/svg/mysql.svg' },
    { id: 9, url: '/svg/postgresql.svg' },
    { id: 10, url: '/svg/prettier.svg' },
    { id: 11, url: '/svg/reactquery.svg' },
    { id: 12, url: '/svg/redis.svg' },
    { id: 13, url: '/svg/supabase.svg' },
    { id: 14, url: '/svg/turbopack.svg' },
]

const reversed = [...DATA_STACK].reverse()

export default function Stack() {
    return (
        <div className="relative my-10 overflow-y-hidden md:my-20">
            <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden">
                <img src="/svg/bbblurry.svg" alt="" className="w-300 max-w-none" />
            </div>
            <div className="mx-auto flex max-w-200 flex-col gap-5">
                <h2 className="text-center text-3xl font-medium text-secondary-foreground md:text-5xl">
                    Самый современный стэк технологий
                </h2>
                <p className="text-center text-xl text-muted-foreground">
                    Используем для вашего сайта только популярные инструменты, <br />
                    фреймворк - <span className="font-bold text-sidebar-primary">NEXT JS</span>, язык программирования -{' '}
                    <span className="font-bold text-sidebar-primary">TYPESCRIPT</span>
                </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 overflow-hidden">
                <div className="overflow-hidden">
                    <div className="flex w-max animate-[stack-items-row-top_60s_linear_infinite] gap-2">
                        {[...reversed, ...DATA_STACK].map((data, i) => (
                            <div
                                key={i}
                                className="flex h-30 w-50 items-center justify-center rounded-2xl border bg-foreground/40 p-6 shadow-sm transition hover:shadow-lg">
                                <Image src={data.url} alt="tech" width={80} height={80} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="flex w-max animate-[stack-items-row-bottom_60s_linear_infinite] gap-2">
                        {[...DATA_STACK.reverse()].map((data, i) => (
                            <div
                                key={i}
                                className="flex h-30 w-50 items-center justify-center rounded-2xl border bg-foreground/40 p-6 shadow-sm transition hover:shadow-lg">
                                <Image src={data.url} alt="tech" width={120} height={120} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
