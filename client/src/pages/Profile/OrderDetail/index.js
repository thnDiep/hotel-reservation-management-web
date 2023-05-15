import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import styles from './OrderDetail.module.scss'
import moment from 'moment'
import Profile from '../profile'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

function OrderDetail({ route, navigate }) {
    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(() => {
        Axios.get('http://localhost:8800/profile/order/detail', { params: { ID: id } })
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
        <Profile>
            <div>
                {data &&
                    data.map((item, index) => (
                        <div className={styles.container}>
                            <header className={styles.header}>
                                <NavLink to="/profile/order">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <span>Quay lại đơn phòng</span>
                                </NavLink>
                            </header>

                            <div className={styles.tagInfo}>
                                <div className={styles.tagInfo__part}>
                                    <div className={styles.background}>
                                        <svg width="84" height="64" fill="none">
                                            <path
                                                d="M76.396 40.758L68.65 19.474a2.958 2.958 0 00-1.531-1.665L36.054 3.325a5.917 5.917 0 00-7.863 2.862L3.186 59.809a5.917 5.917 0 002.862 7.863l42.898 20.004a5.917 5.917 0 007.863-2.862L76.298 43.02a2.958 2.958 0 00.098-2.262zM52.072 80.973a1.48 1.48 0 01-1.966.715L9.89 62.935a1.48 1.48 0 01-.716-1.966l23.755-50.942a1.479 1.479 0 011.966-.715l27.482 12.815a.74.74 0 01.357.982l-3.438 7.374a5.917 5.917 0 002.862 7.862l7.373 3.439a.74.74 0 01.358.982L52.072 80.973z"
                                                fill="#EDF2F7"
                                            ></path>
                                            <path
                                                d="M36.334 37.722l-5.362-2.5a1.48 1.48 0 00-1.966.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l5.363 2.5a1.48 1.48 0 001.965-.715l1.25-2.681a1.48 1.48 0 00-.715-1.966zM31.959 47.106l-5.363-2.5a1.48 1.48 0 00-1.965.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l5.362 2.5a1.48 1.48 0 001.966-.715l1.25-2.681a1.48 1.48 0 00-.715-1.966zM27.583 56.49l-5.362-2.5a1.48 1.48 0 00-1.966.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l5.362 2.5a1.48 1.48 0 001.966-.715l1.25-2.68a1.48 1.48 0 00-.715-1.967zM57.784 47.724l-14.747-6.876a1.48 1.48 0 00-1.965.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l14.746 6.877a1.48 1.48 0 001.966-.716l1.25-2.681a1.48 1.48 0 00-.715-1.966zM53.408 57.108L38.66 50.232a1.48 1.48 0 00-1.965.715l-1.25 2.682a1.48 1.48 0 00.715 1.965l14.746 6.877a1.48 1.48 0 001.966-.716l1.25-2.681a1.48 1.48 0 00-.715-1.966zM49.032 66.492l-14.747-6.876a1.48 1.48 0 00-1.965.715l-1.25 2.682a1.48 1.48 0 00.715 1.965l14.746 6.877a1.48 1.48 0 001.966-.716l1.25-2.681a1.48 1.48 0 00-.715-1.966z"
                                                fill="#EDF2F7"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className={styles.title}>Mã đơn hàng</span>
                                    <span className={styles.code}>{item.MaDatPhong}</span>
                                </div>

                                <div className={styles.tagInfo__part}>
                                    <div className={styles.background}>
                                        <svg width="84" height="64" fill="none">
                                            <path
                                                d="M76.396 40.758L68.65 19.474a2.958 2.958 0 00-1.531-1.665L36.054 3.325a5.917 5.917 0 00-7.863 2.862L3.186 59.809a5.917 5.917 0 002.862 7.863l42.898 20.004a5.917 5.917 0 007.863-2.862L76.298 43.02a2.958 2.958 0 00.098-2.262zM52.072 80.973a1.48 1.48 0 01-1.966.715L9.89 62.935a1.48 1.48 0 01-.716-1.966l23.755-50.942a1.479 1.479 0 011.966-.715l27.482 12.815a.74.74 0 01.357.982l-3.438 7.374a5.917 5.917 0 002.862 7.862l7.373 3.439a.74.74 0 01.358.982L52.072 80.973z"
                                                fill="#EDF2F7"
                                            ></path>
                                            <path
                                                d="M36.334 37.722l-5.362-2.5a1.48 1.48 0 00-1.966.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l5.363 2.5a1.48 1.48 0 001.965-.715l1.25-2.681a1.48 1.48 0 00-.715-1.966zM31.959 47.106l-5.363-2.5a1.48 1.48 0 00-1.965.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l5.362 2.5a1.48 1.48 0 001.966-.715l1.25-2.681a1.48 1.48 0 00-.715-1.966zM27.583 56.49l-5.362-2.5a1.48 1.48 0 00-1.966.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l5.362 2.5a1.48 1.48 0 001.966-.715l1.25-2.68a1.48 1.48 0 00-.715-1.967zM57.784 47.724l-14.747-6.876a1.48 1.48 0 00-1.965.715l-1.25 2.681a1.48 1.48 0 00.715 1.966l14.746 6.877a1.48 1.48 0 001.966-.716l1.25-2.681a1.48 1.48 0 00-.715-1.966zM53.408 57.108L38.66 50.232a1.48 1.48 0 00-1.965.715l-1.25 2.682a1.48 1.48 0 00.715 1.965l14.746 6.877a1.48 1.48 0 001.966-.716l1.25-2.681a1.48 1.48 0 00-.715-1.966zM49.032 66.492l-14.747-6.876a1.48 1.48 0 00-1.965.715l-1.25 2.682a1.48 1.48 0 00.715 1.965l14.746 6.877a1.48 1.48 0 001.966-.716l1.25-2.681a1.48 1.48 0 00-.715-1.966z"
                                                fill="#EDF2F7"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className={styles.title}>Mã đặt phòng</span>
                                    {/* 0: chờ duyệt        1: chờ thanh toán       2: đã hoàn tất */}
                                    {(item.TrangThai === 1 || item.TrangThai === 2) && (
                                        <span className={clsx(styles.code, styles.primary)}>{item.IDPhong}</span>
                                    )}
                                    {item.TrangThai === 0 && (
                                        <span className={clsx(styles.code, styles.primary)}>Chưa có mã</span>
                                    )}
                                </div>

                                <div className={styles.tagInfo__part}>
                                    <div
                                        className={styles.background}
                                        style={{
                                            backgroundImage: `url('https://storage.googleapis.com/tripi-assets/mytour/icons/icon_status_order_hotel.svg')`,
                                        }}
                                    ></div>
                                    <span className={styles.title}>Trạng thái</span>
                                    {item.TrangThai === 0 && (
                                        <span className={clsx(styles.status, styles.success)}>Đang chờ duyệt</span>
                                    )}

                                    {item.TrangThai === 1 && (
                                        <span className={clsx(styles.status, styles.success)}>Chưa thanh toán</span>
                                    )}

                                    {item.TrangThai === 2 && (
                                        <span className={clsx(styles.status, styles.success)}>Đã hoàn tất</span>
                                    )}
                                </div>

                                <div className={styles.tagInfo__part}>
                                    <div
                                        className={styles.background}
                                        style={{
                                            backgroundImage: `url('	https://storage.googleapis.com/tripi-assets/mytour/icons/icon_calendar_order.svg')`,
                                        }}
                                    ></div>
                                    <span className={styles.title}>Ngày đặt</span>
                                    <span className={styles.title}>
                                        {moment(item.ThoiGianDat).format('DD/MM/yyyy')}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.checkoutInfo}>
                                <div className={styles.time}>
                                    <span>
                                        Vui lòng thanh toán trước 00.00,{' '}
                                        {moment(item.NgayNhanPhong).format('DD/MM/yyyy')}
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <h6 className={styles.title}>Thông tin chuyển khoản</h6>

                                    <div className={styles.info__part}>
                                        <span className={styles.subTitle}>Ngân hàng</span>
                                        <div className="d-flex-js">
                                            <span className={styles.title}>{item.TenNganHang}</span>
                                            <img
                                                src="https://storage.googleapis.com/tripi-assets/images/banks_list/techcombank_logo.png"
                                                alt="Logo ngân hàng"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.info__part}>
                                        <span className={styles.subTitle}>Số tài khoản</span>
                                        <div className="d-flex-js">
                                            <span className={styles.title}>{item.SoTaiKhoan}</span>
                                            <div className={styles.copy}>
                                                <svg width="16" height="16" fill="none">
                                                    <path
                                                        d="M12 5.333H6.666c-.736 0-1.333.597-1.333 1.334V12c0 .736.597 1.334 1.333 1.334H12c.736 0 1.333-.598 1.333-1.334V6.667c0-.737-.597-1.333-1.333-1.333z"
                                                        stroke="#00B6F3"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M10.667 5.333V4a1.334 1.334 0 00-1.333-1.333H4A1.333 1.333 0 002.667 4v5.333A1.333 1.333 0 004 10.666h1.334"
                                                        stroke="#00B6F3"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                                <span>Sao chép</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.info__part}>
                                        <span className={styles.subTitle}>Tên chủ tài khoản</span>
                                        <div className="d-flex-js">
                                            <span className={styles.title}>{item.TenChuTaiKhoan}</span>
                                        </div>
                                    </div>

                                    <div className={styles.info__part}>
                                        <span className={styles.subTitle}>Số tiền</span>
                                        <div className="d-flex-js">
                                            <span className={styles.title}>
                                                19.294.000 <sup>₫</sup>
                                            </span>
                                            <div className={styles.copy}>
                                                <svg width="16" height="16" fill="none">
                                                    <path
                                                        d="M12 5.333H6.666c-.736 0-1.333.597-1.333 1.334V12c0 .736.597 1.334 1.333 1.334H12c.736 0 1.333-.598 1.333-1.334V6.667c0-.737-.597-1.333-1.333-1.333z"
                                                        stroke="#00B6F3"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M10.667 5.333V4a1.334 1.334 0 00-1.333-1.333H4A1.333 1.333 0 002.667 4v5.333A1.333 1.333 0 004 10.666h1.334"
                                                        stroke="#00B6F3"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                                <span>Sao chép</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.info__part}>
                                        <span className={styles.subTitle}>Nội dung chuyển khoản</span>
                                        <div className="d-flex-js">
                                            <span className={styles.title}>THANHTOAN {item.MaDatPhong}</span>
                                            <div className={styles.copy}>
                                                <svg width="16" height="16" fill="none">
                                                    <path
                                                        d="M12 5.333H6.666c-.736 0-1.333.597-1.333 1.334V12c0 .736.597 1.334 1.333 1.334H12c.736 0 1.333-.598 1.333-1.334V6.667c0-.737-.597-1.333-1.333-1.333z"
                                                        stroke="#00B6F3"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M10.667 5.333V4a1.334 1.334 0 00-1.333-1.333H4A1.333 1.333 0 002.667 4v5.333A1.333 1.333 0 004 10.666h1.334"
                                                        stroke="#00B6F3"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                                <span>Sao chép</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.orderInfo}>
                                <div className={styles.hotelImage}>
                                    <img src={item.HinhAnhKhachSan} alt="Hình ảnh khách sạn" />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.info__hotel}>
                                        <h3 className={styles.title}>{item.TenKhachSan}</h3>

                                        <div className={styles.rating}>
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        </div>

                                        <div className={styles.subTitle3}>
                                            <svg width="16" height="16" fill="none">
                                                <path
                                                    d="M8 9.333a2 2 0 100-4 2 2 0 000 4z"
                                                    stroke="#1A202C"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M11.771 11.105l-2.828 2.828a1.333 1.333 0 01-1.885 0l-2.83-2.828a5.333 5.333 0 117.543 0v0z"
                                                    stroke="#1A202C"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <span>{item.DiaChi}</span>
                                        </div>

                                        <div className={styles.info__time}>
                                            <div className={styles.info__time__part}>
                                                <div className={styles.subTitle2}>Nhận phòng</div>
                                                <div className={styles.subTitle3}>
                                                    {moment(item.NgayNhanPhong).format('DD/MM/yyyy')}
                                                </div>
                                            </div>

                                            <div className={styles.info__time__part}>
                                                <div className={styles.subTitle2}>Trả phòng</div>
                                                <div className={styles.subTitle3}>
                                                    {moment(item.NgayTraPhong).format('DD/MM/yyyy')}
                                                </div>
                                            </div>

                                            <div className={styles.info__time__part}>
                                                <div className={styles.subTitle2}>Số đêm</div>
                                                <div className={styles.subTitle3}>
                                                    {moment(item.NgayTraPhong).diff(item.NgayNhanPhong, 'days')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.subTitle1}>
                                            {item.SoLuongPhong}x {item.TenLoaiPhong}
                                        </div>

                                        <div className={styles.subTitle3}>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="jss3676">
                                                <path
                                                    d="M1 19v-2a4 4 0 014-4h4a4 4 0 014 4v2m1-17.87a4 4 0 010 7.75M19 19v-2a4 4 0 00-3-3.85M11 5a4 4 0 11-8 0 4 4 0 018 0z"
                                                    stroke="#1A202C"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <span>{item.SoNguoi} người</span>
                                        </div>

                                        <div className={styles.subTitle3}>
                                            <svg width="16" height="16" fill="none" class="jss3677">
                                                <path
                                                    d="M2.667 7.556V6.222a.889.889 0 01.888-.889h3.556a.889.889 0 01.889.89v1.333"
                                                    stroke="#4A5568"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M8 7.556V6.222a.889.889 0 01.889-.889h3.555a.889.889 0 01.89.89v1.333"
                                                    stroke="#4A5568"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M2.518 7.556h10.963a1.185 1.185 0 011.186 1.185v2.815H1.333V8.74a1.185 1.185 0 011.185-1.185v0zM1.333 11.556v1.777M14.666 11.556v1.777"
                                                    stroke="#4A5568"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M13.333 7.556v-4a.889.889 0 00-.889-.89H3.555a.889.889 0 00-.889.89v4"
                                                    stroke="#4A5568"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <span>
                                                {item.SoGiuong} {item.TenLoaiGiuong}
                                            </span>
                                        </div>

                                        <div className={clsx(styles.subTitle3, styles.green)}>
                                            <svg width="16" height="16" fill="none">
                                                <path
                                                    d="M11.31 11.976l1.862 1.862M3.241 3.908l4.966 4.965M4.483 2.667L7.586 5.77 5.103 8.253 2 5.149M3.241 13.838l10.552-10.55a5.036 5.036 0 01-1.242 4.965c-2.194 2.194-3.724 2.482-3.724 2.482"
                                                    stroke="#48bb78"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <span>Bữa sáng miễn phí</span>
                                        </div>

                                        {/* <div className={clsx(styles.subTitle3, styles.green)}>
                                            <svg width="16" height="16" fill="none" class="svgFillAll jss3681">
                                                <path
                                                    d="M13.444 6.111H5.667c-.86 0-1.556.696-1.556 1.556v4.666c0 .86.697 1.556 1.556 1.556h7.777c.86 0 1.556-.697 1.556-1.556V7.667c0-.86-.697-1.556-1.556-1.556z"
                                                    stroke="#48bb78"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M9.556 11.555a1.556 1.556 0 100-3.11 1.556 1.556 0 000 3.11zM11.889 6.111V4.556A1.556 1.556 0 0010.333 3H2.556A1.556 1.556 0 001 4.556v4.666a1.555 1.555 0 001.556 1.556H4.11"
                                                    stroke="#48bb78"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <span>Hủy phòng miễn phí</span>
                                            <svg width="16" height="16" fill="none" class="svgFillAll jss3682">
                                                <path
                                                    d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 5.333h.007"
                                                    stroke="#48bb78"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M7.333 8H8v2.667h.666"
                                                    stroke="#48bb78"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </div> */}
                                    </div>

                                    <div className={styles.info__order}>
                                        <div className={styles.info__order__part}>
                                            <h3 className={styles.title}>Thông tin liên hệ</h3>
                                            <div className={styles.content1}>
                                                <span className={styles.subTitle3}>Họ tên:</span>
                                                <span className={styles.subTitle3}>Điện thoại:</span>
                                                <span className={styles.subTitle3}>Email:</span>
                                            </div>
                                            <div className={styles.content2}>
                                                <span className={styles.subTitle2}>{item.TenKhachHang}</span>
                                                <span className={styles.subTitle2}>{item.SoDienThoaiKhachHang}</span>
                                                <span className={styles.subTitle2}>{item.EmailKhachHang}</span>
                                            </div>
                                        </div>

                                        <div className={styles.info__order__part}>
                                            <h3 className={styles.title}>Yêu cầu đặc biệt</h3>
                                            <div className={styles.content1}>
                                                <span className={styles.subTitle2}>Yêu cầu đặc biệt</span>
                                                <span className={styles.subTitle3}>phòng 1: {item.TenLoaiPhong}</span>
                                                <div className={styles.subTitle3}>
                                                    <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />
                                                    <span>1 giường Queen</span>
                                                </div>

                                                <div className="d-flex-js">
                                                    <span className={styles.subTitle2}>
                                                        Thời gian nhận phòng dự kiến: &nbsp;
                                                    </span>
                                                    <span className={styles.subTitle3}>
                                                        {moment(item.NgayNhanPhong).format('DD/MM/yyyy')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.info__order__part}>
                                            <h3 className={styles.title}>Chi tiết giá</h3>
                                            <div className={clsx(styles.content1, 'flex-1')}>
                                                <div className={styles.price}>
                                                    <span>
                                                        {item.SoLuongPhong} phòng x
                                                        {moment(item.NgayTraPhong).diff(item.NgayNhanPhong, 'days')} đêm
                                                    </span>
                                                    <span>
                                                        {item.Gia.toLocaleString()} <sup>₫</sup>
                                                    </span>
                                                </div>
                                                <div className={styles.price}>
                                                    <span>Phụ phí</span>
                                                    <span>
                                                        {item.PhuPhi.toLocaleString()}
                                                        <sup> ₫</sup>
                                                    </span>
                                                </div>
                                                <div className={styles.price}>
                                                    <span>Thuế và phí dịch vụ khách sạn</span>
                                                    <span>
                                                        {item.ThueVaDichVuKhachSan.toLocaleString()} <sup>₫</sup>
                                                    </span>
                                                </div>
                                                {item.GiamGia < 0 && (
                                                    <div className={styles.price}>
                                                        <span className={styles.green}>
                                                            Chúng tôi khớp giá, giảm thêm
                                                        </span>
                                                        <span className={styles.green}>
                                                            {item.GiamThem.toLocaleString()} <sup>₫</sup>
                                                        </span>
                                                    </div>
                                                )}

                                                {item.GiamGiaKhuyenMai < 0 && (
                                                    <div className={styles.price}>
                                                        <div>
                                                            <span className={styles.green}>Mã giảm giá</span>
                                                            <span className={styles.code}>{item.TenKhuyenMai}</span>
                                                        </div>
                                                        <span className={styles.green}>
                                                            {item.GiamGiaKhuyenMai.toLocaleString()} <sup>₫</sup>
                                                        </span>
                                                    </div>
                                                )}

                                                {item.GiamGiaFlashSale < 0 && (
                                                    <div className={styles.price}>
                                                        <div>
                                                            <span className={styles.green}>{item.TieuDeFlashSale}</span>
                                                        </div>
                                                        <span className={styles.green}>
                                                            {item.GiamGiaFlashSale.toLocaleString()} <sup>₫</sup>
                                                        </span>
                                                    </div>
                                                )}

                                                <div className={clsx(styles.price, styles.total)}>
                                                    <span className={styles.subTitle2}>Tổng tiền</span>
                                                    <span className={styles.subTitle2}>
                                                        {item.TongTien.toLocaleString()} <sup>₫</sup>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {(item.TrangThai === 2 || item.TrangThai === 1) && (
                                            <div className={styles.info__order__part}>
                                                <h3 className={styles.title}>Thanh toán</h3>

                                                <div className={clsx(styles.content1, 'flex-1')}>
                                                    <div className={styles.checkout}>
                                                        <span>Phương thức thanh toán</span>
                                                        <span>Chuyển khoản ngân hàng</span>
                                                    </div>
                                                    <div className={styles.checkout}>
                                                        <span>Trạng thái</span>
                                                        {item.TrangThai === 2 && (
                                                            <span className={clsx(styles.status, styles.success)}>
                                                                Thành công
                                                            </span>
                                                        )}
                                                        {item.TrangThai === 1 && (
                                                            <span className={clsx(styles.status, styles.success)}>
                                                                Chưa thanh toán
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Profile>
    )
}

export default OrderDetail
