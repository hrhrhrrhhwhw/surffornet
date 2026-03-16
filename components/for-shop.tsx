export default function ForShop() {
    return (
        <div className="relative mt-10 h-100 w-full px-6">
            <div className="mx-auto mb-10 flex max-w-200 flex-col gap-5">
                <h2 className="text-center text-3xl font-medium md:text-5xl">
                    Каталог для магазина одежды с онлайн оплатой
                </h2>
            </div>
            <div className="relative mx-auto max-w-5xl h-100">
                <div className="rounded-2xl border bg-muted/10 p-10 h-100">
                    <div className="absolute inset-0 -z-10 flex w-full justify-center overflow-hidden p-6">
                        <img src="/svg/product.svg" alt="" className="w-300 max-w-none hidden md:block" />
                        <img src="/svg/product.svg" alt="" className="w-300 max-w-none" />
                        <img src="/svg/product.svg" alt="" className="w-300 max-w-none hidden md:block" />
                    </div>
                    <div className="space-y-6 p-4 text-xl leading-relaxed text-muted-foreground md:text-2xl"></div>
                </div>
            </div>
        </div>
    )
}
