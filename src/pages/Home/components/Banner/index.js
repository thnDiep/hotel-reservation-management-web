import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import clsx from 'clsx'

import styles from './Banner.module.scss'

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={clsx(styles.contentBanner, 'd-flex')}>
                <div>
                    <h1>Tải ứng dụng Evivu.vn</h1>
                    <p>Đặt khách sạn hạng sang</p>
                    <ul className={styles.list}>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Giá tốt hơn so với đặt phòng trực tiếp tại khách sạn</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Nhân viên chăm sóc, tư vấn nhiều kinh nghiệm</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Hơn 5000 khách sạn tại Việt Nam với đánh giá thực</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Nhiều chương trình khuyến mãi và tích lũy điểm</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Thanh toán dễ dàng, đa dạng</span>
                        </li>
                    </ul>
                </div>

                <div className="d-flex">
                    <img
                        className={styles.qr}
                        src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_QR_code.png"
                    />
                    <div>
                        <a
                            href="https://apps.apple.com/us/app/mytour-%C4%91%E1%BA%B7t-ph%C3%B2ng-v%C3%A9-m%C3%A1y-bay/id1149730203"
                            className={styles.appStoreLink}
                        >
                            <img
                                className={styles.appStoreImg}
                                src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_app_store.svg"
                            />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=vn.mytour.apps.android"
                            className={styles.chPlayLink}
                        >
                            <img
                                className={styles.chPlayImg}
                                src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_chplay.svg"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex-1"></div>

                <div className={styles.imageBanner}>
                    <img src="https://storage.googleapis.com/public-tripi/mytour-web/app_mytour_banner.png" />
                </div>

                <div className={styles.iconBanner}>
                    <img src="https://storage.googleapis.com/public-tripi/mytour-web/big_icon_mytour.png" />
                </div>
            </div>
        </div>
    )
}

export default Banner
