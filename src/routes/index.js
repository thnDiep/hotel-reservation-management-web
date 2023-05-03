import Home from '~/pages/Home'
import Detail from '~/pages/Detail'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import Profile from '~/pages/Profile'
import QrPay from '~/pages/QrPay'
import AdminHotel from '~/pages/Admin/Hotel'
import { HomeLayout, QrPayLayout, AdminLayout } from '~/components/Layouts'

export const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/detail', component: Detail },
    { path: '/listByPlace', component: ListByPlace },
    { path: '/checkout', component: Checkout },
    { path: '/profile', component: Profile },
    { path: '/qrPay', component: QrPay, layout: QrPayLayout },
    { path: '/admin/hotel', component: AdminHotel, layout: AdminLayout },
]
