import { useEffect, useRef, useState } from 'react'
import styles from './wishlist.module.scss'
import { clsx } from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUmbrellaBeach, faBolt, faSignsPost } from '@fortawesome/free-solid-svg-icons'
import PlacesList from '~/components/Place/PlaceList/PlacesList'
import Profile from '../profile'
import { NavLink } from 'react-router-dom'

const wishlist = [
    {
        imgs: [
            {
                id: 1,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/40454%2F3A1O4S311J_ICPQ_Resort%20Exterior(2).jpg?generation=1593766513879962&alt=media',
            },
            {
                id: 2,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            },
        ],
        id: 1,
        endow: ['Miễn phí thu trẻ em', 'Hô bơi vô cực'],
        title: 'InterContinental Phú Quốc Long Beach Resort',
        rate: 3,
        scored: 9.2,
        map: 'Dương Tơ, Phú Quốc',
        status: 'Classic Garden View',
        service: 'Bữa sáng miễn phí',
        priceOld: 3336610,
        discount: 0.2,
    },
    {
        imgs: [
            {
                id: 1,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/40454%2F3A1O4S311J_ICPQ_Resort%20Exterior(2).jpg?generation=1593766513879962&alt=media',
            },
            {
                id: 2,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            },
            {
                id: 3,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            },
        ],
        id: 2,
        endow: ['Miễn phí thu trẻ em', 'Hô bơi vô cực'],
        title: 'InterContinental Phú Quốc Long Beach Resort',
        rate: 3,
        scored: 9.2,
        map: 'Dương Tơ, Phú Quốc',
        status: 'Classic Garden View',
        service: 'Bữa sáng miễn phí',
        priceOld: 3336610,
        discount: 0.2,
    },
    {
        imgs: [
            {
                id: 1,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/40454%2F3A1O4S311J_ICPQ_Resort%20Exterior(2).jpg?generation=1593766513879962&alt=media',
            },
            {
                id: 2,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            },
            {
                id: 3,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            },
        ],
        id: 3,
        endow: ['Miễn phí thu trẻ em', 'Hô bơi vô cực'],
        title: 'InterContinental Phú Quốc Long Beach Resort',
        rate: 3,
        scored: 9.2,
        map: 'Dương Tơ, Phú Quốc',
        status: 'Classic Garden View',
        service: 'Bữa sáng miễn phí',
        priceOld: 3336610,
        discount: 0.2,
    },
]

function Wishlist() {
    const [isEmpty, setEmpty] = useState(false)

    return (
        <Profile>
            <div className={styles.wrap}>
                {isEmpty && (
                    <div className={styles.wrapOfEmptyPage}>
                        <img
                            src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_hotel_favorite.svg"
                            className={clsx(styles.imageForEmptyInfo, styles.componentOfEmptyPage)}
                        ></img>
                        <p className={styles.componentOfEmptyPage}>Chưa có khách sạn yêu thích</p>
                        <button className={clsx(styles.buttonSave, styles.buttonSearchInWishList)}>Tìm kiếm</button>
                    </div>
                )}

                {!isEmpty && (
                    // <NavLink to="/detail">
                    <PlacesList items={wishlist} />
                    /* </NavLink> */
                )}
            </div>
        </Profile>
    )
}

export default Wishlist
