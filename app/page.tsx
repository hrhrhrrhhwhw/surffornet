import ForShop from '@/components/for-shop'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Price from '@/components/price'
import Quote from '@/components/quote'
import Reason from '@/components/reason'
import Shadcn from '@/components/shadcn'
import Stack from '@/components/stack'

export default function Page() {
    return (
        <div>
            <Header />
            <Shadcn />
            <Hero />
            <Stack />
            <Quote />
            <Reason />
            <Price />
            <ForShop />
        </div>
    )
}
