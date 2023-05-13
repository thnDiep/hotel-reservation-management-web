import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { ButtonPrimary } from '~/components'
import clsx from 'clsx'
import moment from 'moment'
import styles from './orderResult.module.scss'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'
import Star from '~/components/Star/Star'

function OrderResult() {
    const [data, setData] = useState()
    useEffect(() => {
        Axios.get('http://localhost:8800/profile/order/detail', { params: { ID: 5743539 } })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className={styles.wrap}>
            {data && (
                <div className={styles.form}>
                    <div className={styles.contentForm}>
                        <img
                            className={styles.checkIcon}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Eo_circle_yellow_checkmark.svg/1200px-Eo_circle_yellow_checkmark.svg.png"
                        />
                        <div className={styles.guideline}>
                            <p className={styles.mainTitle}>Đặt phòng thành công</p>
                            <p className={styles.codeOrder}>Mã đặt phòng: H{data[0].MaDatPhong}</p>
                            <p className={styles.timeToPay}>
                                Quý khách vui lòng thanh toán theo thông tin hướng dẫn dưới đây.
                            </p>
                            <p>
                                Thời hạn thanh toán trước
                                <span className={styles.payTime}>
                                    {' '}
                                    02:42, {moment(data[0].NgayNhanPhong).format('DD/MM/yyyy')}.
                                </span>
                            </p>
                            <p className={styles.remind}>
                                Quá thời hạn thanh toán trên, chúng tôi không thể đảm bảo giữ phòng cho Quý Khách.
                            </p>
                        </div>

                        <div className={styles.accountInfo}>
                            <div className={styles.frameLineBottom}>
                                <h6 className={styles.title}>Thông tin chuyển khoản</h6>

                                <div className={styles.info__part}>
                                    <span className={styles.subTitle}>Ngân hàng</span>
                                    <div className="d-flex-js">
                                        <span className={styles.title}>{data[0].TenNganHang}</span>
                                        <img src="https://storage.googleapis.com/tripi-assets/images/banks_list/techcombank_logo.png" />
                                    </div>
                                </div>

                                <div className={styles.info__part}>
                                    <span className={styles.subTitle}>Số tài khoản</span>
                                    <div>
                                        <span className={styles.title}>{data[0].SoTaiKhoan}</span>
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
                                    <div>
                                        <span className={styles.title}>{data[0].TenChuTaiKhoan}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.info__part}>
                                <span className={styles.subTitle}>Số tiền</span>
                                <div className="d-flex-column-r">
                                    <span className={styles.title}>
                                        {data[0].TongTien.toLocaleString()} <sup> &nbsp; ₫</sup>
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
                                <div className="d-flex-column-r">
                                    <span className={styles.title}>THANHTOAN H{data[0].MaDatPhong}</span>
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
                        <hr className={styles.line} />
                        <div className={styles.orderInfo}>
                            <div className={styles.info}>
                                <div className={styles.info__hotel}>
                                    <div className={styles.info__hotel__intro}>
                                        <h3 className={styles.title}>{data[0].TenKhachSan}</h3>
                                        <Star number={data[0].SoSao} />
                                        {/* <div className={styles.rating}>
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                            <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        </div> */}

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
                                            <span>{data[0].DiaChi}</span>
                                        </div>

                                        <div className={styles.info__time}>
                                            <div className={styles.info__time__part}>
                                                <div className={styles.subTitle2}>Nhận phòng</div>
                                                <div className={styles.subTitle3}>
                                                    {data[0].GioNhanPhong}:00,{' '}
                                                    {moment(data[0].NgayNhanPhong).format('DD/MM/yyyy')}
                                                </div>
                                            </div>

                                            <div className={styles.info__time__part}>
                                                <div className={styles.subTitle2}>Trả phòng</div>
                                                <div className={styles.subTitle3}>
                                                    {data[0].GioTraPhong}:00,{' '}
                                                    {moment(data[0].NgayTraPhong).format('DD/MM/yyyy')}
                                                </div>
                                            </div>

                                            <div className={styles.info__time__part}>
                                                <div className={styles.subTitle2}>Số đêm</div>
                                                <div className={styles.subTitle3}>
                                                    {moment(data[0].NgayTraPhong).diff(data[0].NgayNhanPhong, 'days')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.roomDetail}>
                                        <div>
                                            <div className={styles.subTitle1}>
                                                {data[0].SoLuongPhong}x {data[0].TenLoaiPhong}
                                            </div>

                                            <div className={styles.subTitle3}>
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    className="jss3676"
                                                >
                                                    <path
                                                        d="M1 19v-2a4 4 0 014-4h4a4 4 0 014 4v2m1-17.87a4 4 0 010 7.75M19 19v-2a4 4 0 00-3-3.85M11 5a4 4 0 11-8 0 4 4 0 018 0z"
                                                        stroke="#1A202C"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                                <span>{data[0].SoNguoi} người</span>
                                            </div>

                                            <div className={styles.subTitle3}>
                                                <svg width="16" height="16" fill="none" className="jss3677">
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
                                                    {data[0].SoGiuong} {data[0].TenLoaiGiuong}
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

                                            <div className={clsx(styles.subTitle3, styles.green)}>
                                                <svg width="16" height="16" fill="none" className="svgFillAll jss3681">
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
                                                <span>Không hoàn hủy</span>
                                                <svg width="16" height="16" fill="none" className="svgFillAll jss3682">
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
                                            </div>
                                        </div>
                                        <div className={styles.hotelImage}>
                                            <img src="https://img.tripi.vn/cdn-cgi/image/width=320/https://www.googleapis.com/download/storage/v1/b/hotel_image/o/logo%2F4%2F736941.jpg?generation=1563772721779376&alt=media" />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.info__order}>
                                    <div className={styles.info__order__part}>
                                        <h3 className={styles.subTitle1}>Thông tin liên hệ</h3>
                                        <div className={styles.content2}>
                                            <span className={styles.subTitle4}>{data[0].TenKhachHang}</span>
                                            <div className="d-flex justify-content-start">
                                                <span className={styles.subTitle3}>{data[0].SoDienThoaiKhachHang}</span>
                                                <span className={styles.subTitle3}>
                                                    <svg width="3" height="3" fill="none" styles="margin: 0px 6px;">
                                                        <rect width="3" height="3" rx="1.5" fill="#A0AEC0"></rect>
                                                    </svg>
                                                </span>

                                                <span className={styles.subTitle3}>{data[0].EmailKhachHang}</span>
                                            </div>
                                        </div>
                                        <div className={styles.subTitle5}>
                                            <p>Thông tin người nhận phòng:</p>
                                            <p className={styles.subTitle4}>{data[0].TenNguoiNhanPhong}</p>
                                        </div>
                                    </div>

                                    <div className={styles.info__order__part}>
                                        <h3 className={styles.subTitle1}>Yêu cầu đặc biệt</h3>
                                        <div className={styles.content2}>
                                            <span className={styles.subTitle3}>phòng 1: {data[0].TenLoaiPhong}</span>
                                            <div className={styles.subTitle3}>
                                                <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />
                                                <span>
                                                    {data[0].SoGiuong} {data[0].TenLoaiGiuong}
                                                </span>
                                            </div>

                                            <div className="d-flex-js">
                                                <span className={styles.subTitle4}>
                                                    Thời gian nhận phòng dự kiến: &nbsp;
                                                    <span>{moment(data[0].NgayNhanPhong).format('DD/MM/yyyy')}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className={styles.subTitle1}>Tổng tiền</h3>
                                        <div className="d-flex">
                                            <p className={styles.subTitle3}>Đã bao gồm thuế, phí, VAT</p>
                                            <p className={styles.subTitle1}>{data[0].TongTien.toLocaleString()} ₫</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/" className="d-flex justify-content-center align-items-center">
                        <ButtonPrimary className="btnIntroduction">Quay lại trang chủ</ButtonPrimary>
                    </NavLink>
                </div>
            )}
        </div>
    )
}

export default OrderResult
