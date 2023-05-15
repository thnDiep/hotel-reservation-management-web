import { useState, useEffect } from 'react'
import styles from './reserve.module.scss'
// import DetailReserve from './detailReserve/detailReserve.js'
import { clsx } from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoon } from '@fortawesome/free-regular-svg-icons'
import Profile from '../profile'
import { NavLink, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import moment from 'moment'

function Reserve() {
    const [isEmpty, setEmpty] = useState(false)
    const { id } = useParams()

    console.log(id)

    const [showDetail, setShowDetail] = useState(0)

    const user = JSON.parse(localStorage.getItem('user'))

    // 0: chờ xác nhận
    // 1: đã xác nhận
    // 2: đã hoàn thành

    const [data, setData] = useState()
    useEffect(() => {
        Axios.get('http://localhost:8800/profile/order', { params: { ID: user.ID } })
            .then((response) => {
                setData(response.data)
                console.log(response.data)
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
                {!isEmpty &&
                    showDetail === 0 &&
                    data &&
                    data.map((item, index) => (
                        <div>
                            {/* 1 card ~ 1 don dat phong */}

                            <NavLink to={`/profile/order/${item.MaDatPhong}`}>
                                <div className={styles.wrapOfInfoCard}>
                                    <div className={styles.headerCard}>
                                        <div className={styles.codeOrderFrame}>
                                            Mã đơn hàng: &nbsp; <p className={styles.codeOrder}>{item.MaDatPhong}</p>
                                        </div>
                                        <a className={styles.codeOrder}>Xem chi tiết &nbsp; &#10093; </a>
                                    </div>

                                    <div className={styles.lineCard}></div>

                                    <div className={styles.footerCard}>
                                        <img src={item.HinhAnhKhachSan} className={clsx(styles.image)}></img>
                                        <div className={styles.infoReserve}>
                                            <p className={styles.title}>{item.TenKhachSan}</p>

                                            <div>
                                                <b>
                                                    {item.SoLuongPhong}x {item.TenLoaiPhong}
                                                </b>
                                                <p className={styles.numberPerson}>
                                                    <FontAwesomeIcon icon={faUser} /> {item.SoNguoi} người
                                                </p>
                                            </div>
                                        </div>

                                        <div className={styles.datesOfReserve}>
                                            <div className={styles.dates}>
                                                <div>
                                                    <div className={styles.title}>Nhận phòng</div>

                                                    <div className={styles.content}>
                                                        {moment(item.NgayNhanPhong).format('DD/MM/yyyy')}
                                                    </div>
                                                </div>
                                                <div className={styles.duration}>
                                                    <span>
                                                        {moment(item.NgayTraPhong).diff(item.NgayNhanPhong, 'days')}
                                                    </span>
                                                    <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                                                </div>
                                                <div>
                                                    <div className={styles.title}>Trả phòng</div>
                                                    <div className={styles.content}>
                                                        {moment(item.NgayTraPhong).format('DD/MM/yyyy')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.stateOfReserve}>
                                            <p>Tổng tiền</p>
                                            <p>
                                                <b>
                                                    {' '}
                                                    {(+item.TongTien).toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}{' '}
                                                </b>
                                            </p>

                                            {item.TrangThai === 0 && (
                                                <div>
                                                    <p className={styles.successRequest}>
                                                        Gửi yêu cầu đặt phòng thành công
                                                    </p>
                                                    <label className={styles.waitingConfirmLabel}>CHỜ XÁC NHẬN</label>
                                                </div>
                                            )}

                                            {item.TrangThai === 1 && (
                                                <div>
                                                    <p className={styles.successRequest}>Đã duyệt yêu cầu</p>
                                                    <label className={styles.waitingConfirmLabel}>
                                                        CHƯA THANH TOÁN
                                                    </label>
                                                </div>
                                            )}

                                            {item.TrangThai === 2 && (
                                                <div>
                                                    <p className={styles.successRequest}>Đặt phòng thành công</p>
                                                    <Link to={`/profile/order/comment/${item.IDKhachSan}`}>
                                                        <label
                                                            className={`${styles.feedBackLabel} ${styles.confirmedLabel}`}
                                                        >
                                                            ĐÁNH GIÁ
                                                        </label>{' '}
                                                    </Link>
                                                    <label className={styles.confirmedLabel}>ĐÃ HOÀN TẤT</label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
            </div>
        </Profile>
    )
}

export default Reserve
