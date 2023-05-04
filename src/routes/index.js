import Home from '~/pages/Home'
import Detail from '~/pages/Detail'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import Profile from '~/pages/Profile'
import QrPay from '~/pages/QrPay'
import HotelManagement from '~/pages/Hotelier/HotelManagement'
import AddHotel from '~/pages/Hotelier/AddHotel'
import { HomeLayout, QrPayLayout, HotelierLayout } from '~/components/Layouts'

export const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/detail', component: Detail },
    { path: '/listByPlace', component: ListByPlace },
    { path: '/checkout', component: Checkout, layout: HomeLayout },
    { path: '/profile', component: Profile },
    { path: '/qrPay', component: QrPay, layout: QrPayLayout },
    { path: '/manageHotel', component: HotelManagement, layout: HotelierLayout },
    { path: '/addHotel', component: AddHotel, layout: HotelierLayout },
]
