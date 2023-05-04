import Login from '~/pages/Login/login'
import Home from '~/pages/Home'
import Detail from '~/pages/Detail'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import Profile from '~/pages/Profile'
import Reserve from '~/pages/Profile/reservePage/reserve'
import Wishlist from '~/pages/Profile/wishlistPage/wishlist'
import QrPay from '~/pages/QrPay'
import AdminHotel from '~/pages/Admin/Hotel'
import { HomeLayout, QrPayLayout, AdminLayout } from '~/components/Layouts'
import RegisterPartner from '~/pages/RegisterPartner/RegisterPartner'

export const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/detail', component: Detail },
    { path: '/listByPlace', component: ListByPlace },
    { path: '/checkout', component: Checkout, layout: HomeLayout },
    { path: '/profile', component: Profile },
    { path: '/reserve', component: Reserve },
    { path: '/wishlist', component: Wishlist },
    { path: '/qrPay', component: QrPay, layout: QrPayLayout },
    { path: '/admin/hotel', component: AdminHotel, layout: AdminLayout },
    { path: '/registerPartner', component: RegisterPartner, layout: QrPayLayout },
    { path: '/login', component: Login, layout: null },
]
