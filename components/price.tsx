import { Check } from 'lucide-react'

const LANDING = [
    { name: 'Сайт на Next JS', icon: Check },
    { name: 'SEO оптимизация', icon: Check },
    { name: 'Одна страница', icon: Check },
    { name: 'Ссылки на социальные сети', icon: Check },
    { name: 'Дизайн', icon: Check },
]

const SINGLE_PAGE = [
    { name: 'Сайт на Next JS' },
    { name: 'SEO оптимизация' },
    { name: 'До 10 страниц' },
    { name: 'Ссылки на социальные сети, виджет WhatsApp, Telegram для быстрой связи' },
    { name: 'Создание базы данных при необходимости' },
    {
        name: 'Форма обратной связи с любыми полями и телеграмм ботом, который будет отправлять данные вам в telegram или на почту',
    },
    { name: 'Yandex Metrika, Google Search' },
]

const CATALOG = [
    { name: 'Сайт каталог на Next JS' },
    { name: 'SEO + продвижение' },
    { name: 'Идеальная структура всех товаров с изображением, ценой, скидкой, цветом' },
    { name: 'Фильтрация по цвету, цене, размеру' },
    { name: 'Отдельная страница каждого товара с описанием, доставкой, размерами' },
    { name: 'База данных Prisma, можно самостоятельно добавлять и удалять товары с сайта' },
    { name: 'Информация о наличии или отсутствии товара, количество товара которое осталось' },
    { name: 'Корзина для добавления товаров' },
    { name: 'Оформление заказа и оплата на сайте с помощью сервиса Ю-money' },
]

export default function Price() {
    return (
        <section className="relative w-full px-4 py-16 md:px-6 md:py-20">
            <picture className="absolute inset-0 -z-10 flex justify-center">
                <source srcSet="/svg/bbblurry3.svg" media="(min-width: 768px)" />
                <img src="/svg/bbblurry4.svg" alt="" />
            </picture>

            <div className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="text-3xl font-semibold md:text-5xl">Тарифы</h2>
            </div>

            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border bg-muted/40 p-6 shadow-sm transition hover:shadow-lg md:p-8">
                    <div className="flex h-full flex-col justify-between gap-6">
                        <div>
                            <h3 className="border-b pb-4 text-2xl font-semibold text-sidebar-primary uppercase">
                                Лэндинг
                            </h3>

                            <ul className="flex flex-col gap-2 py-4 text-sm md:text-base">
                                {LANDING.map((l) => (
                                    <li key={l.name} className="ml-5 list-disc text-muted-foreground">
                                        {l.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-2xl font-semibold text-sidebar-primary md:text-3xl">
                            42 000 <span className="text-sm text-muted-foreground">рублей</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border bg-muted/40 p-6 shadow-sm transition hover:shadow-lg md:p-8">
                    <div className="flex h-full flex-col justify-between gap-6">
                        <div>
                            <h3 className="border-b pb-4 text-2xl font-semibold text-sidebar-primary uppercase">
                                Многостраничный сайт
                            </h3>

                            <ul className="flex flex-col gap-2 py-4 text-sm md:text-base">
                                {SINGLE_PAGE.map((l) => (
                                    <li key={l.name} className="ml-5 list-disc text-muted-foreground">
                                        {l.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-2xl font-semibold text-sidebar-primary md:text-3xl">
                            115 000 <span className="text-sm text-muted-foreground">рублей</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border bg-muted/40 p-6 shadow-sm transition hover:shadow-lg md:p-8">
                    <div className="flex h-full flex-col justify-between gap-6">
                        <div>
                            <h3 className="border-b pb-4 text-2xl font-semibold text-sidebar-primary uppercase">
                                каталог+корзина+оплата
                            </h3>

                            <ul className="flex flex-col gap-2 py-4 text-sm md:text-base">
                                {CATALOG.map((l) => (
                                    <li key={l.name} className="ml-5 list-disc text-muted-foreground">
                                        {l.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-2xl font-semibold text-sidebar-primary md:text-3xl">
                            от 200 000 <span className="text-sm text-muted-foreground">рублей</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
