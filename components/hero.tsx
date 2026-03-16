import { Shirt } from 'lucide-react'

const DATA = [
    {name: 'Магазин одежды'},
    {name: 'Клининг'},
    {name: 'Доставка еды'},
    {name: 'Косметика'},
    {name: 'Онлайн запись на ноготочки'},
    {name: 'Автомастерская'},
    {name: 'Мастер на дом'},
    {name: 'Для рекламы услуг в интернете'},
    {name: 'Корпоративный сайт'},
    {name: 'Цветочный магазин'},
    {name: 'Транспортная компания'},
]

export default function Hero() {
    return (
        <div className="grid min-h-150 grid-cols-1 gap-4 px-4 md:grid-cols-5 md:grid-rows-6">

            <div className="rounded-3xl bg-border md:col-span-2 md:row-span-2">
                <div className="flex items-center justify-center h-48 text-2xl md:text-4xl">
                    <div className='text-center text-sidebar-primary'>Для кого мы разрабатываем сайты?</div>
                </div>
            </div>

            <div className="relative min-h-50 gap-4 rounded-3xl p-6 md:col-span-2 md:col-start-1 md:row-span-4 md:row-start-3">
                <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden opacity-40">
                    <img src="/svg/bbblurry5.svg" alt="" className="w-full" />
                </div>
                <div className='flex flex-wrap gap-4 w-full'>
                    {DATA.map((d) => (
                        <div key={d.name} className="flex h-11 items-center justify-center border bg-muted/40 p-6 text-muted-foreground">{d.name}</div>
                    ))}
                </div>
            </div>

            <div className="min-h-50 rounded-3xl bg-[url('/image/depth1.jpg')] bg-cover bg-center md:col-span-3 md:col-start-3 md:row-span-6 md:row-start-1 md:min-h-0"></div>
        </div>
    )
}
