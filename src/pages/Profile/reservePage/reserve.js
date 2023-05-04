import { useState } from 'react'
import styles from './reserve.module.scss'
// import DetailReserve from './detailReserve/detailReserve.js'
import { clsx } from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoon } from '@fortawesome/free-regular-svg-icons'

function Reserve({ onChoose }) {
    const [isEmpty, setIsEmpty] = useState(false)
    const [showDetail, setShowDetail] = useState(0)

    // 0: chờ xác nhận
    // 1: đã xác nhận
    // 2: đã hoàn thành
    const [state, setState] = useState(0)

    return (
        <div className={styles.wrap}>
            {/* Khi không có đơn đặt phòng */}
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

            {/* Khi có đơn đặt phòng  */}
            {!isEmpty && showDetail === 0 && (
                <div>
                    {/* 1 card ~ 1 don dat phong */}
                    <div className={styles.wrapOfInfoCard} onClick={() => onChoose(3)}>
                        <div className={styles.headerCard}>
                            <div className={styles.codeOrderFrame}>
                                Mã đơn hàng: &nbsp; <p className={styles.codeOrder}>H1175350</p>
                            </div>
                            <a className={styles.codeOrder}>Xem chi tiết &nbsp; &#10093; </a>
                        </div>

                        <div className={styles.lineCard}></div>

                        <div className={styles.footerCard}>
                            <img
                                src="https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FBZ1O6VKR21_%2Ftmp%2Fplaytemp8992226862162980543%2FmultipartBody8889052234719766714asTemporaryFile?generation=1595488423270831&alt=media"
                                className={clsx(styles.image)}
                            ></img>
                            <div className={styles.infoReserve}>
                                <p className={styles.title}>Khách sạn Pullman Vũng Tàu</p>

                                <div>
                                    <b>1x Executive Twin</b>
                                    <p className={styles.numberPerson}>
                                        <FontAwesomeIcon icon={faUser} /> 2 người
                                    </p>
                                </div>
                            </div>

                            <div className={styles.datesOfReserve}>
                                <div className={styles.dates}>
                                    <div>
                                        <div className={styles.title}>Nhận phòng</div>
                                        <div className={styles.content}>02/04/2023</div>
                                    </div>
                                    <div className={styles.duration}>
                                        <span>3</span>
                                        <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                                    </div>
                                    <div>
                                        <div className={styles.title}>Trả phòng</div>
                                        <div className={styles.content}>05/04/2023</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.stateOfReserve}>
                                <p>Tổng tiền</p>
                                <p>
                                    <b>33.680.000 &#8363;</b>
                                </p>

                                {state === 0 && (
                                    <div>
                                        <p className={styles.successRequest}>Gửi yêu cầu đặt phòng thành công</p>
                                        <label className={styles.waitingConfirmLabel}>CHỜ XÁC NHẬN</label>
                                    </div>
                                )}

                                {state === 1 && (
                                    <div>
                                        <p className={styles.successRequest}>Đặt phòng thành công</p>
                                        <label className={styles.confirmedLabel}>ĐÃ XÁC NHẬN</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 2 card ~ 2 don dat phong */}
                    {/* <div className={styles.wrapOfInfoCard}>
                        <div className={styles.headerCard}>
                            <div className={styles.codeOrderFrame}>
                                Mã đơn hàng: &nbsp; <p className={styles.codeOrder}>H1175350</p>
                            </div>
                            <a className={styles.codeOrder}>Xem chi tiết &nbsp; &#10093; </a>
                        </div>

                        <div className={styles.lineCard}></div>

                        <div className={styles.footerCard}>
                            <img
                                src="https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FBZ1O6VKR21_%2Ftmp%2Fplaytemp8992226862162980543%2FmultipartBody8889052234719766714asTemporaryFile?generation=1595488423270831&alt=media"
                                className={clsx(styles.image)}
                            ></img>
                            <div className={styles.infoReserve}>
                                <p className={styles.title}>Khách sạn Pullman Vũng Tàu</p>

                                <div>
                                    <b>1x Executive Twin</b>
                                    <p className={styles.numberPerson}>
                                        <FontAwesomeIcon icon={faUser} /> 2 người
                                    </p>
                                </div>
                            </div>

                            <div className={styles.datesOfReserve}>
                                <div className={styles.dates}>
                                    <div>
                                        <div className={styles.title}>Nhận phòng</div>
                                        <div className={styles.content}>02/04/2023</div>
                                    </div>
                                    <div className={styles.duration}>
                                        <span>3</span>
                                        <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                                    </div>
                                    <div>
                                        <div className={styles.title}>Trả phòng</div>
                                        <div className={styles.content}>05/04/2023</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.stateOfReserve}>
                                <p>Tổng tiền</p>
                                <p>
                                    <b>33.680.000 &#8363;</b>
                                </p>

                                {state === 0 && (
                                    <div>
                                        <p className={styles.successRequest}>Gửi yêu cầu đặt phòng thành công</p>
                                        <label className={styles.waitingConfirmLabel}>CHỜ XÁC NHẬN</label>
                                    </div>
                                )}

                                {state === 1 && (
                                    <div>
                                        <p className={styles.successRequest}>Đặt phòng thành công</p>
                                        <label className={styles.confirmedLabel}>ĐÃ XÁC NHẬN</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> */}
                </div>
            )}

            {/* {!isEmpty && showDetail === 1 && <DetailReserve />} */}
        </div>
    )
}

export default Reserve
