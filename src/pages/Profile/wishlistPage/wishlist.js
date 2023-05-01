import { useEffect, useRef, useState } from 'react'
import styles from './wishlist.module.scss'
import { clsx } from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUmbrellaBeach, faBolt, faSignsPost } from '@fortawesome/free-solid-svg-icons'

function Wishlist() {
    const [isEmpty, setEmpty] = useState(false)
    return (
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
                <div>
                    <a className={styles.card} href="">
                        <img
                            src="https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FBZ1O6VKR21_%2Ftmp%2Fplaytemp8992226862162980543%2FmultipartBody8889052234719766714asTemporaryFile?generation=1595488423270831&alt=media"
                            className={clsx(styles.image)}
                        ></img>
                        <div className={styles.info}>
                            <div>
                                <label className={styles.tag_1}>Miễn phí xe đưa đón</label>
                                <label className={styles.tag_2}>Giá độc quyền</label>
                            </div>
                            <p className={styles.name}>Khách sạn Imperial Vũng Tàu</p>
                            <div className="d-flex">
                                <div className={styles.rate}>
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                </div>
                                <p className={styles.type}>Khu nghỉ dưỡng</p>
                            </div>

                            <div className="d-flex-js" style={{ marginTop: '8px' }}>
                                <div className={clsx(styles.point, 'd-flex')}>
                                    <FontAwesomeIcon icon={faUmbrellaBeach} className={styles.icon} />
                                    <span>8.8</span>
                                </div>
                                <p className={styles.evaluate}>Rất tốt</p>
                                <p className={styles.numberOfEvaluate}>(1249 đánh giá)</p>
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faSignsPost} className={styles.icon} />
                                Thùy Vân, Thành phố Vũng Tàu
                            </p>

                            <a>
                                <FontAwesomeIcon icon={faBolt} className={styles.icon} />
                                Xác nhận ngay
                            </a>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <img
                            src="https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FBZ1O6VKR21_%2Ftmp%2Fplaytemp8992226862162980543%2FmultipartBody8889052234719766714asTemporaryFile?generation=1595488423270831&alt=media"
                            className={clsx(styles.image)}
                        ></img>
                        <div className={styles.info}>
                            <div>
                                <label className={styles.tag_1}>Miễn phí xe đưa đón</label>
                                <label className={styles.tag_2}>Giá độc quyền</label>
                            </div>
                            <p className={styles.name}>Khách sạn Imperial Vũng Tàu</p>
                            <div className="d-flex">
                                <div className={styles.rate}>
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                </div>
                                <p className={styles.type}>Khu nghỉ dưỡng</p>
                            </div>

                            <div className="d-flex-js" style={{ marginTop: '8px' }}>
                                <div className={clsx(styles.point, 'd-flex')}>
                                    <FontAwesomeIcon icon={faUmbrellaBeach} className={styles.icon} />
                                    <span>8.8</span>
                                </div>
                                <p className={styles.evaluate}>Rất tốt</p>
                                <p className={styles.numberOfEvaluate}>(1249 đánh giá)</p>
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faSignsPost} className={styles.icon} />
                                Thùy Vân, Thành phố Vũng Tàu
                            </p>

                            <a>
                                <FontAwesomeIcon icon={faBolt} className={styles.icon} />
                                Xác nhận ngay
                            </a>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default Wishlist
