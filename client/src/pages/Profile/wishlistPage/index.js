import { useEffect, useState } from 'react'
import styles from './wishlist.module.scss'
import { clsx } from 'clsx'
import Profile from '../profile'
import Axios from 'axios'
import WishlistCard from '~/components/WishlistCard'
import { Link } from 'react-router-dom'

function Wishlist() {
    const [isEmpty, setEmpty] = useState(false)

    const [data, setData] = useState()
    useEffect(() => {
        Axios.get('http://localhost:8800/profile/wishlist', { params: { ID: 4 } })
            .then((response) => {
                setData(response.data)
                if (response.data === null) {
                    setEmpty(true)
                } else {
                    setEmpty(false)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <Profile>
            <div className={styles.wrap}>
                {isEmpty && (
                    <div className={styles.wrapOfEmptyPage}>
                        <Link to={'/'} className="link"></Link>
                        <img
                            src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_hotel_favorite.svg"
                            className={clsx(styles.imageForEmptyInfo, styles.componentOfEmptyPage)}
                        ></img>
                        <p className={styles.componentOfEmptyPage}>Chưa có khách sạn yêu thích</p>
                        <button className={clsx(styles.buttonSave, styles.buttonSearchInWishList)}>Tìm kiếm</button>
                    </div>
                )}

                {!isEmpty && <WishlistCard list={data} onEmpty={setEmpty} />}
            </div>
        </Profile>
    )
}

export default Wishlist
