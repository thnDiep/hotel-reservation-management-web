import { useEffect, useRef, useState } from 'react'
import styles from './wishlist.module.scss'
import { clsx } from 'clsx'

function Wishlist() {
    return (
        <div className={styles.wrapOfEmptyPage}>
            <img
                src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_hotel_favorite.svg"
                className={clsx(styles.imageForEmptyInfo, styles.componentOfEmptyPage)}
            ></img>
            <p className={styles.componentOfEmptyPage}>Chưa có khách sạn yêu thích</p>
            <button className={clsx(styles.buttonSave, styles.buttonSearchInWishList)}>Tìm kiếm</button>
        </div>
    )
}

export default Wishlist
