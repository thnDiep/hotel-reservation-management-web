import { useEffect, useRef, useState } from 'react'
import styles from './reserve.module.scss'
import { clsx } from 'clsx'

function Reserve() {
    const [isEmpty, setIsEmpty] = useState(true)

    return (
        <div>
            {isEmpty && (
                <div className={styles.wrapOfEmptyPage}>
                    <img
                        src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_empty_order_hotel.svg"
                        className={clsx(styles.imageForEmptyInfo, styles.componentOfEmptyPage)}
                    ></img>
                    <p className={styles.componentOfEmptyPage}>Tất cả đơn phòng của bạn sẽ hiện ở đây</p>
                    <button className={clsx(styles.buttonSave, styles.buttonSearchInReserve)}>Tìm khách sạn</button>
                </div>
            )}

            {/* {!isEmpty && (
                <div>
                    <div className={styles.codeOrderFrame}>
                        Mã đơn hàng: &nbsp; <p className={styles.codeOrder}>H1175350</p>
                    </div>
                    <div>
                        <img
                            src="https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FBZ1O6VKR21_%2Ftmp%2Fplaytemp8992226862162980543%2FmultipartBody8889052234719766714asTemporaryFile?generation=1595488423270831&alt=media"
                            className={clsx(styles.imageForEmptyInfo, styles.componentOfEmptyPage)}
                        ></img>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Reserve
