import Home from '~/pages/Home'
import Detail from '~/pages/Detail'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import Profile from '~/pages/Profile'
import QrPay from '~/pages/QrPay'
import RegisterPartner from '~/pages/RegisterPartner/RegisterPartner'
import { HomeLayout, QrPayLayout } from '~/components/Layouts'

export const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/detail', component: Detail },
    { path: '/listByPlace', component: ListByPlace },
    { path: '/checkout', component: Checkout, layout: HomeLayout },
    { path: '/profile', component: Profile },
    { path: '/qrPay', component: QrPay, layout: QrPayLayout },
    { path: '/registerPartner', component: RegisterPartner, layout: QrPayLayout },
]
