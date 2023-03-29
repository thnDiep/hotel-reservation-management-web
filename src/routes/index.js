import Home from '~/pages/Home'
import Detail from '~/pages/Detail/DetailHotel'
import ListByPlace from '~/pages/ListByPlace'
import Checkout from '~/pages/Checkout'
import Profile from '~/pages/Profile'

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
    { path: '/listByPlace', component: ListByPlace },
    { path: '/checkout', component: Checkout },
    { path: '/profile', component: Profile },
]
