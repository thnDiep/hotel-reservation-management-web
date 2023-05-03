import Home from '~/pages/Home'
import Detail from '~/pages/Detail'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import Profile from '~/pages/Profile'
import QrPay from '~/pages/QrPay'
import AdminHotel from '~/pages/Admin/Hotel'
import RegisterPartner from '~/pages/RegisterPartner/RegisterPartner'
import OrderDetail from '~/pages/Profile/OrderDetail'
import { HomeLayout, QrPayLayout, AdminLayout } from '~/components/Layouts'

export const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/detail', component: Detail },
    { path: '/listByPlace', component: ListByPlace },
    { path: '/checkout', component: Checkout, layout: HomeLayout },
    { path: '/profile', component: Profile },
    { path: '/profile/order', component: OrderDetail },
    { path: '/qrPay', component: QrPay, layout: QrPayLayout },
    { path: '/admin/hotel', component: AdminHotel, layout: AdminLayout },
    { path: '/registerPartner', component: RegisterPartner, layout: QrPayLayout },
]
