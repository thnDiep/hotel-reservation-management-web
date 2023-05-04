import Home from '~/pages/Home'
import Detail from '~/pages/Detail'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import { Account, Wishlist, Order, OrderDetail } from '~/pages/Profile'
import QrPay from '~/pages/QrPay'
import HotelManagement from '~/pages/Hotelier/HotelManagement'
import AddHotel from '~/pages/Hotelier/AddHotel'
import AdminHotel from '~/pages/Admin/Hotel'
import RegisterPartner from '~/pages/RegisterPartner/RegisterPartner'
import { HomeLayout, QrPayLayout, ManageLayout, HotelierLayout } from '~/components/Layouts'

import CheckOrder from '~/pages/CheckOrder/CheckOrder'
export const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/detail', component: Detail },
    { path: '/listByPlace', component: ListByPlace },
    { path: '/checkout', component: Checkout, layout: HomeLayout },

    // Profile
    { path: '/profile', component: Account, layout: HomeLayout },
    { path: '/profile/order', component: Order, layout: HomeLayout },
    { path: '/profile/order/1', component: OrderDetail, layout: HomeLayout },
    { path: '/profile/wish-list', component: Wishlist, layout: HomeLayout },

    { path: '/qrPay', component: QrPay, layout: QrPayLayout },
    { path: '/manageHotel', component: HotelManagement, layout: HotelierLayout },
    { path: '/addHotel', component: AddHotel, layout: HotelierLayout },
    { path: '/admin/hotel', component: AdminHotel, layout: ManageLayout },
    { path: '/registerPartner', component: RegisterPartner, layout: QrPayLayout },
    { path: '/checkOrder', component: CheckOrder },
]
