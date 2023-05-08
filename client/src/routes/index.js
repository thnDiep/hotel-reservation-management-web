import Login from '~/pages/Login/login'
import SignUp from '~/pages/SignUp/signUp'
import Home from '~/pages/Home'
import Detail from '~/pages/Detail'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import { Account, Wishlist, Order, OrderDetail } from '~/pages/Profile'
import { AccountAdmin, HotelAdmin } from '~/pages/Admin'
import BlockedAccount from '~/pages/Admin/Account/BlockedAccount'
import ActiveAccount from '~/pages/Admin/Account/ActiveAccount'
import QrPay from '~/pages/QrPay'
import HotelManagement from '~/pages/Hotelier/HotelManagement'
import OrderManagement from '~/pages/Hotelier/OrderManagement/OrderManagement'
import AddHotel from '~/pages/Hotelier/AddHotel'
import RoomManage from '~/pages/Hotelier/RoomManage'
import RegisterPartner from '~/pages/RegisterPartner/RegisterPartner'
import OrderResult from '~/pages/OrderResult'
import AddRoom from '~/pages/Hotelier/RoomManage/AddRoom/AddRoom'
import { AddPromotion, ManagePromotion } from '~/pages/Hotelier'
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
    { path: '/registerPartner', component: RegisterPartner, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/signUp', component: SignUp, layout: null },
    { path: '/checkOrder', component: CheckOrder },
    { path: '/orderResult', component: OrderResult, layout: HomeLayout },

    //Hotelier - Hotel
    { path: '/cks/manageHotel', component: HotelManagement, layout: HotelierLayout },
    { path: '/cks/addHotel', component: AddHotel, layout: HotelierLayout },
    { path: '/cks/manage-room', component: RoomManage, layout: HotelierLayout },
    { path: '/cks/manageOrder', component: OrderManagement, layout: HotelierLayout },
    { path: '/cks/addRoom', component: AddRoom, layout: HotelierLayout },

    // Hotelier - Voucher
    { path: '/cks/voucher/add', component: AddPromotion, layout: HotelierLayout },
    { path: '/cks/voucher', component: ManagePromotion, layout: HotelierLayout },

    // Admin
    { path: '/admin/account', component: AccountAdmin, layout: ManageLayout },
    { path: '/admin/account/blocked', component: BlockedAccount, layout: ManageLayout },
    { path: '/admin/account/active', component: ActiveAccount, layout: ManageLayout },
    { path: '/admin/hotel', component: HotelAdmin, layout: ManageLayout },
    {},
]
