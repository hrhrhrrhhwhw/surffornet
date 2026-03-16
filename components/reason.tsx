import {
    ShieldCheck,
    BadgePercent,
    Gauge,
    AlignEndHorizontal,
    HeartPlus,
    LayoutDashboard,
    LucideIcon,
    Globe,
    Bug
} from 'lucide-react'

type Reason = {
    id: number
    icon: LucideIcon
    description: string
}

const DATA_REASON = [
    {
        id: 1,
        icon: ShieldCheck,
        description:
            'При разработке проекта учитываются его особенности - скорость отклика, сохранение данных, красивый дизайн и так далее. К каждой особенности подбираются необходимые web-инструменты.',
    },
    {
        id: 2,
        icon: BadgePercent,
        description:
            'Качество и скорость работы не означают высокую стоимость. Несколько тарифов подстроены под необходимые потребности клиентов.',
    },
    {
        id: 3,
        icon: Gauge,
        description:
            'Разработка проекта укладывается в срок от 2 недель до 1 месяца. Нет длительного ожидания от полугода и более.',
    },
    {
        id: 4,
        icon: AlignEndHorizontal,
        description:
            'Гибкие решения для каждого случая. Мы не делаем проекты на Tilda, пишем код вручную, что дает возможность для любых идей.',
    },
    {
        id: 5,
        icon: HeartPlus,
        description:
            'Поддержка вашего проекта, даже после его завершения. На связи с вами всегда, поддержим во всем. Научим чему-нибудь новому.',
    },
    {
        id: 6,
        icon: LayoutDashboard,
        description:
            'SEO. Самое главное для доходности вашего бизнеса. Мы создаем проекты с помощью фреймворка NEXT JS, у него очень хорошая оптимизация для поисковика.',
    },
    {
        id: 7,
        icon: Globe,
        description:
            'Мультиязычность сайта. EN-RU-AM. В современном мире, для привлечения клиентов из других стран необходимо добавить английский или другие международные языки, для удобства пользования сайтом. Мы используем библиотеку i18next для добавления любого языка.',
    },
    {
        id: 8,
        icon: Bug,
        description:
            'Добавим трекеры на сайт, чтобы вы могли отслеживать количество посетителей и их заинтересованность сайтом. Это поможет при решении запуска рекламы.',
    },
]

export default function Reason() {

    return (
        <div className="relative w-full px-6 my-20">
            <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden">
                <img src="/svg/cccoil.svg" alt="" className="w-full" />
            </div>
            <div className="mx-auto mb-10 flex max-w-200 flex-col gap-5">
                <h2 className="text-center text-3xl font-medium text-secondary-foreground md:text-5xl">
                    Почему Surf for net?
                </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
                {DATA_REASON.map((data) => {
                    const Icon = data.icon

                    return (
                        <div key={data.id} className="relative rounded-2xl border bg-muted/40 p-6">
                            <div className="space-y-4 text-muted-foreground md:text-lg">
                                <Icon size={40} className="text-primary" />

                                <p>{data.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
