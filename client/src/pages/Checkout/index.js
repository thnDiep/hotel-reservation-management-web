import React, { useState, useReducer } from 'react'
import styles from './Checkout.module.scss'
import { faStar, faCheckCircle, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { ButtonPrimary } from '~/components'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '~/contexts/DataContext'
import { useEffect } from 'react'
import Star from '~/components/Star/Star'
import moment from 'moment'
import '@fortawesome/fontawesome-free'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
library.add(fas)
const inputReducer = (state, action) => {
    let regex
    let errorText
    if (state.type === 'email') {
        regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        errorText = 'Địa chỉ email sai định dạng'
    } else if (state.type === 'phone') {
        regex = /^\d{10}$/
        errorText = 'Số điện thoại không hợp lệ'
    } else {
        regex = /^([A-ZÀ-Ỹ][a-zà-ỹ]*\s)+[A-ZÀ-Ỹ][a-zà-ỹ]*$/
        errorText = 'Họ và tên chỉ được chứa các ký tự chữ cái và khoảng trắng'
    }
    let value
    if (action.type === 'User_input') {
        value = action.val
    } else if (action.type === 'input_blur') {
        value = state.value
    } else if (action.type === 'input_submit') {
        value = state.value
    }
    if (value.trim().length === 0) {
        return { value: value, isValid: true, error: 'Bạn chưa nhập thông tin', type: state.type }
    } else if (!regex.test(value)) {
        return { value: value, isValid: true, error: errorText, type: state.type }
    }
    return { value: value, isValid: false, error: '', type: state.type }
}

const formatMoney = (amount) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}
function generateBookingID() {
    const randomNum = Math.random().toString().substring(2, 8)
    const bookingID = `B${randomNum}`
    return bookingID
}
const Checkout = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const date = JSON.parse(localStorage.getItem('dates'))
    const { id, active } = useParams()
    console.log(id)
    const { data, handleData } = useContext(DataContext)
    const [hotel, setHotel] = useState()
    const [room, setRoom] = useState()
    const Nav = useNavigate()
    useEffect(() => {
        if (data) {
            console.log(data)
            const room = data.rooms.find((room) => room.ID === +id)
            const hotel = data.hotels.find((hotel) => hotel.ID === +room.IDKhachSan)
            const number = Math.ceil(
                Math.abs(new Date(date.startDate) - new Date(date.endDate)) / (1000 * 60 * 60 * 24),
            )
            room.dem = number
            room.Gia = room.Gia * number
            room.GiamGia = room.Gia - (room.Gia * hotel.GiamGia) / 100

            const voucher = data.promotions
                .filter((voucher) => {
                    const now = moment()
                    let isBetween = false

                    if (moment(voucher.KetThuc).isValid())
                        isBetween = now.isBetween(moment(voucher.BatDau), moment(voucher.KetThuc))
                    else {
                        isBetween = now.isAfter(moment(voucher.BatDau))
                    }
                    const checkIDKS = hotel.ID === voucher.IDKhachSan
                    const checkSLSD = voucher.SoLuongSD <= voucher.SoLuongKM
                    const checkKG = voucher.IDKhungGio === null
                    return isBetween && checkIDKS && checkSLSD && checkKG
                })
                .sort((a, b) => b.PhanTramKM - a.PhanTramKM)[0]

            const flashSale1 = data.promotions.filter((voucher) => {
                const now = moment()
                let isBetween = false

                if (moment(voucher.KetThuc).isValid())
                    isBetween = now.isBetween(moment(voucher.BatDau), moment(voucher.KetThuc))
                else {
                    isBetween = now.isAfter(moment(voucher.BatDau))
                }
                const checkIDKS = hotel.ID === voucher.IDKhachSan
                const checkKG = voucher.MaKhuyenMai === null

                return isBetween && checkIDKS && checkKG
            })
            const flashSale = flashSale1
                .filter((item) => {
                    const now = new Date()
                    let start = new Date()
                    let end = new Date()
                    if (item.IDKhungGio === 3) {
                        start.setHours(19, 0, 0)
                        end.setHours(23, 0, 0)
                    } else if (item.IDKhungGio === 2) {
                        start.setHours(14, 0, 0)
                        end.setHours(16, 0, 0)
                    } else {
                        start.setHours(9, 0, 0)
                        end.setHours(12, 0, 0)
                    }
                    return now.getHours() >= start.getHours() && now.getHours() <= end.getHours()
                })
                .sort((a, b) => b.PhanTramKM - a.PhanTramKM)[0]
            // console.log(hotel.flashSale)

            if (!voucher) {
                hotel.voucher = null // hoặc return {}
                if (!flashSale) {
                    hotel.flashSale = null
                    room.Thue1 = room.GiamGia * 0.05
                    room.Thue = room.GiamGia + room.GiamGia * 0.05
                    room.voucher = null
                } else {
                    hotel.flashSale = flashSale
                    room.soTienDcGiam = (room.GiamGia * flashSale.PhanTramKM) / 100
                    room.voucher = room.GiamGia - (room.GiamGia * flashSale.PhanTramKM) / 100
                    room.Thue1 = room.voucher * 0.05
                    room.Thue = room.voucher + room.voucher * 0.05
                }
            } else {
                hotel.voucher = voucher
                if (!flashSale) {
                    hotel.flashSale = null
                    room.soTienDcGiam = (room.GiamGia * hotel.voucher.PhanTramKM) / 100
                    room.voucher = room.GiamGia - (room.GiamGia * hotel.voucher.PhanTramKM) / 100
                    room.Thue1 = room.voucher * 0.05
                    room.Thue = room.voucher + room.voucher * 0.05
                } else {
                    hotel.flashSale = flashSale
                    room.voucher = room.GiamGia - (room.GiamGia * hotel.voucher.PhanTramKM) / 100
                    room.voucher = room.voucher - (room.voucher * hotel.flashSale.PhanTramKM) / 100
                    room.soTienDcGiam = (room.voucher * hotel.flashSale.PhanTramKM) / 100
                    room.Thue1 = room.voucher * 0.05
                    room.Thue = room.voucher + room.voucher * 0.05
                }
            }
            hotel.HinhAnh = data.hotelImages.find((HinhAnh) => HinhAnh.IDKhachSan === +hotel.ID).HinhAnh
            setHotel(hotel)
            setRoom(room)
        }
    }, [data])
    const [selectedPayment, setSelectedPayment] = useState('paypal')
    const [check, setCheck] = useState(false)
    const handleCheckboxChange = (event) => {
        setCheck(!check)
    }
    const handleCheckboxPayment = (event) => {
        setSelectedPayment(event.target.value)
    }
    const [emailState, dispatchEmail] = useReducer(inputReducer, {
        value: user.Email,
        isValid: false,
        error: '',
        type: 'email',
    })
    const [phoneState, dispatchPhone] = useReducer(inputReducer, {
        value: user.SoDienThoai,
        isValid: false,
        error: '',
        type: 'phone',
    })
    const [nameState, dispatchName] = useReducer(inputReducer, {
        value: user.HoTen,
        isValid: false,
        error: '',
        type: 'name',
    })
    const [nameRecieveState, dispatchNameRecieve] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        error: '',
        type: 'name',
    })
    // const [phoneState, dispatchPhone] = useReducer(inputReducer, { value: '', isValid: false, error: '' }, inputType: "phone",)
    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'User_input', val: event.target.value }) // kichs hoat ham emailReducer
    }
    const validateEmailHandler = () => {
        dispatchEmail({ type: 'input_blur' })
    }
    const phoneChangeHandler = (event) => {
        dispatchPhone({ type: 'User_input', val: event.target.value }) // kichs hoat ham phoneReducer
    }
    const validatePhoneHandler = () => {
        dispatchPhone({ type: 'input_blur' })
    }
    const nameChangeHandler = (event) => {
        dispatchName({ type: 'User_input', val: event.target.value }) // kichs hoat ham phoneReducer
    }
    const validateNameHandler = () => {
        dispatchName({ type: 'input_blur' })
    }
    const nameRecieveChangeHandler = (event) => {
        dispatchNameRecieve({ type: 'User_input', val: event.target.value }) // kichs hoat ham phoneReducer
    }
    const validateNameRecieveHandler = () => {
        dispatchNameRecieve({ type: 'input_blur' })
    }

    const handleThanhToan = async () => {
        try {
            const res = await axios.get('http://localhost:8800/cks/order/update', {
                params: { MaDatPhong: active, TrangThai: 2 },
            })
            if (res.status === 200) {
                if (selectedPayment === 'paypal') {
                    Nav(`/checkout/QRPay/${active}`)
                }
                Nav(`/checkout/success/${active}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (nameState.isValid) {
            dispatchName({ type: 'input_submit' })
            return
        }
        if (emailState.isValid) {
            dispatchEmail({ type: 'input_submit' })
            return
        }
        if (phoneState.isValid) {
            dispatchPhone({ type: 'input_submit' })
            return
        }
        if (nameRecieveState.value !== '' && nameRecieveState.isValid) {
            dispatchNameRecieve({ type: 'input_submit' })
            return
        }
        try {
            const nguoidung = {
                ID: user.ID,
                HoTen: nameState.value,
                SoDienThoai: phoneState.value,
                Email: emailState.value,
            }
            let nguoinhanphong = null
            if (nameRecieveState.value !== '')
                nguoinhanphong = {
                    HoTenNguoiNhan: nameRecieveState.value,
                    IDKhachHang: user.ID,
                    SoDienThoai: phoneState.value,
                }
            const dateNhan = new Date(date.startDate)
            const dateTra = new Date(date.endDate)
            const now = new Date()
            const NgayNhanPhong = `${dateNhan.getFullYear()}-${dateNhan.getMonth() + 1}-${dateNhan.getDate()}`
            const NgayTraPhong = `${dateTra.getFullYear()}-${dateTra.getMonth() + 1}-${dateTra.getDate()}`
            const ThoiGianDat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
            const IDKhuyenMai = hotel?.voucher?.ID || null
            const IDFlashSale = hotel?.flashSale?.ID || null
            const MaDatPhong = generateBookingID()
            const dondatphong = {
                MaDatPhong: MaDatPhong,
                NgayNhanPhong: NgayNhanPhong,
                NgayTraPhong: NgayTraPhong,
                ThoiGianDat: ThoiGianDat,
                SoLuongPhong: date.number,
                TongTien: room.Thue,
                TrangThai: 0,
                IDKhuyenMai: IDKhuyenMai,
                IDFlashSale: IDFlashSale,
                IDKhachHang: user.ID,
                IDPhong: +id,
            }
            const res = await axios.post('http://localhost:8800/user/order', {
                nguoidung,
                dondatphong,
                nguoinhanphong,
            })
            if (res.status === 200) {
                Nav(`/orderResult/${MaDatPhong}`)
            }
        } catch (err) {
            console.error(err)
        }
    }
    const options = { weekday: 'short', month: 'short', day: 'numeric' }
    return (
        <div className={styles.content}>
            {hotel && room && (
                <div className={styles.checkout}>
                    <div className={styles.infor}>
                        <div className={styles.infor__regulation}>
                            <div className={styles.infor__title}>
                                <div className={styles['infor__title--img']}>
                                    <img style={{ borderRadius: '8px' }} src={hotel.HinhAnh} alt="" />
                                </div>
                                <div className={styles['infor__title--right']}>
                                    <p className={styles['infor__title--name']}>{hotel.Ten}</p>
                                    <div className={styles['infor__title--star']}>
                                        <div className={styles['infor__title--rate']}>
                                            <Star number={hotel.soSao} />
                                        </div>
                                        <span className={styles['infor__title--utilities']}>Khu nghỉ dưỡng</span>
                                    </div>
                                    <div className={styles['infor__title--address']}>{hotel.DiaChi}</div>
                                </div>
                            </div>
                            <div className={` ${styles.infor__hour}`}>
                                <div style={{ paddingRight: '60px' }} className="d-flex flex-column align-items-start">
                                    <span style={{ fontWeight: '600' }}>Nhận phòng</span>
                                    <span className="mt-2">
                                        {hotel.GioNhanPhong}:00,{' '}
                                        {new Date(date.startDate).toLocaleDateString('vi-VN', options)}
                                    </span>
                                </div>
                                <div style={{ paddingRight: '60px' }} className="d-flex flex-column align-items-start">
                                    <span style={{ fontWeight: '600' }}>Trả phòng</span>
                                    <span className="mt-2">
                                        {hotel.GioTraPhong}:00,{' '}
                                        {new Date(date.endDate).toLocaleDateString('vi-VN', options)}
                                    </span>
                                </div>
                                <div className="d-flex flex-column align-items-start">
                                    <span style={{ fontWeight: '600' }}>Số đêm</span>
                                    <span className="mt-2">
                                        {Math.ceil(
                                            Math.abs(new Date(date.startDate) - new Date(date.endDate)) /
                                                (1000 * 60 * 60 * 24),
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-start mt-3">
                                <span style={{ fontWeight: '600' }}>Số phòng</span>
                                <span className="mt-2">1 x {room.TenLoaiPhong}</span>
                            </div>
                            <div className="d-flex flex-column align-items-start mt-3">
                                <span style={{ fontWeight: '600' }}>Đủ chỗ ngủ cho</span>
                                <span className="mt-2">{room.SoNguoi} người lớn</span>
                            </div>
                        </div>
                        <form>
                            <div className={styles.inforContact}>
                                <p className={styles.nameTitle}>Thông tin liên hệ</p>
                                {/* ho ten */}
                                <div className="d-flex flex-column align-items-start">
                                    <span className={styles.label}>Họ và tên</span>
                                    <div className={styles.input}>
                                        <div className={styles.inputName}>
                                            <input
                                                type="text"
                                                name="name"
                                                value={nameState.value}
                                                className={`${nameState.isValid && styles.inputRed}`}
                                                onChange={nameChangeHandler}
                                                onBlur={validateNameHandler}
                                            />
                                        </div>
                                        <p className={styles.error}>{nameState.error}</p>
                                    </div>
                                </div>
                                {/* email, so dien thoai */}
                                <div className="d-flex">
                                    <div style={{ width: '49%' }}>
                                        <span className={styles.label}>Email</span>
                                        <div className={styles.input}>
                                            <div className={`${styles.inputName} `}>
                                                <input
                                                    className={`${emailState.isValid && styles.inputRed}`}
                                                    type="text"
                                                    name="name"
                                                    value={emailState.value}
                                                    onChange={emailChangeHandler}
                                                    onBlur={validateEmailHandler}
                                                />
                                            </div>
                                            <p className={styles.error}>{emailState.isValid && emailState.error}</p>
                                        </div>
                                    </div>
                                    <div style={{ width: '49%', marginLeft: '2%' }}>
                                        <span className={styles.label}>Số điện thoại</span>
                                        <div className={styles.input}>
                                            <div className={styles.inputName}>
                                                <input
                                                    className={`${phoneState.isValid && styles.inputRed}`}
                                                    type="text"
                                                    onChange={phoneChangeHandler}
                                                    value={phoneState.value}
                                                    onBlur={validatePhoneHandler}
                                                    name="name"
                                                />
                                            </div>
                                            <p className={styles.error}>{phoneState.error}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* nguoi nhan phong */}
                                <div className={styles.people}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={check}
                                                icon={<span className="iconCheckBox"></span>}
                                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                                onChange={handleCheckboxChange}
                                            />
                                        }
                                    />
                                    <span className={styles.peopleTitle}>Tôi đặt phòng giúp cho người khác.</span>
                                </div>
                                {check && (
                                    <>
                                        <p className={styles.inforRecieve}>Thông tin khách nhận phòng</p>
                                        <div className="d-flex flex-column align-items-start">
                                            <span className={styles.label}>Họ tên</span>
                                            <div className={styles.input}>
                                                <div className={styles.inputName}>
                                                    <input
                                                        type="text"
                                                        className={`${nameRecieveState.isValid && styles.inputRed}`}
                                                        onChange={nameRecieveChangeHandler}
                                                        value={nameRecieveState.value}
                                                        onBlur={validateNameRecieveHandler}
                                                        name="name"
                                                    />
                                                </div>
                                                <p className={styles.error}>{nameRecieveState.error}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </form>
                        {hotel.voucher && (
                            <div className={styles.infor__sale}>
                                <div className={styles.saleLabel}>
                                    <svg width="36" height="34" fill="none" style={{ marginRight: '12px' }}>
                                        <g filter="url(#icon_promo_code_svg__filter0_d)">
                                            <path
                                                d="M30.25 6H13.625a.881.881 0 00-.62.255l-1.13 1.133-1.13-1.133a.881.881 0 00-.62-.255H5.75C4.786 6 4 6.786 4 7.75V23.5c0 .966.786 1.75 1.75 1.75h4.375a.882.882 0 00.62-.256l1.13-1.132 1.13 1.13a.876.876 0 00.62.258H30.25A1.75 1.75 0 0032 23.5V7.75C32 6.786 31.216 6 30.25 6z"
                                                fill="url(#icon_promo_code_svg__paint0_linear)"
                                            ></path>
                                            <path
                                                d="M18.875 14.75a2.628 2.628 0 01-2.625-2.625A2.628 2.628 0 0118.875 9.5a2.628 2.628 0 012.625 2.625 2.628 2.628 0 01-2.625 2.625zm0-3.5a.875.875 0 100 1.75.875.875 0 000-1.75zM24.125 21.75a2.628 2.628 0 01-2.625-2.625 2.628 2.628 0 012.625-2.625 2.628 2.628 0 012.625 2.625 2.628 2.628 0 01-2.625 2.625zm0-3.5a.878.878 0 00-.875.875c0 .481.394.875.875.875a.878.878 0 00.875-.875.878.878 0 00-.875-.875zM17.125 21.75a.875.875 0 01-.672-1.435l8.75-10.5a.876.876 0 011.232-.112c.37.31.42.861.11 1.234l-8.75 10.5a.875.875 0 01-.67.313zM12.75 9.5H11v1.75h1.75V9.5zM12.75 20H11v1.75h1.75V20zM12.75 16.5H11v1.75h1.75V16.5zM12.75 13H11v1.75h1.75V13z"
                                                fill="#fff"
                                            ></path>
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="icon_promo_code_svg__paint0_linear"
                                                x1="18"
                                                y1="6"
                                                x2="18"
                                                y2="25.25"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#5BD68E"></stop>
                                                <stop offset="1" stopColor="#48BB78"></stop>
                                            </linearGradient>
                                            <filter
                                                id="icon_promo_code_svg__filter0_d"
                                                x="-2"
                                                y="0"
                                                width="40"
                                                height="40"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                ></feColorMatrix>
                                                <feOffset dy="4"></feOffset>
                                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                                <feColorMatrix values="0 0 0 0 0.305882 0 0 0 0 0.764706 0 0 0 0 0.501961 0 0 0 0.15 0"></feColorMatrix>
                                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                                <feBlend
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div>Mã giảm giá</div>
                                </div>
                                <div className={styles.saleName}>
                                    <div className={styles.saleNameLabel}>
                                        <div className={styles.nameLabelColumn}>
                                            <div className={styles.nameLabelColumnIcon}></div>
                                            <div className={styles.nameLabelColumnIcon}></div>
                                            <div className={styles.nameLabelColumnIcon}></div>
                                            <div className={styles.nameLabelColumnIcon}></div>
                                            <div className={styles.nameLabelColumnIcon}></div>
                                        </div>
                                        <div className={styles.nameLabelIcon}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        <div className={styles.nameLabelTitle}>{hotel.voucher.MaKhuyenMai}</div>
                                    </div>
                                    <div className={styles.saleNameEdit}>
                                        <FontAwesomeIcon icon={faPen} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={styles.infor__submit}>
                            {active ? (
                                <>
                                    <p className={styles.nameTitle}>Phương thức thanh toán</p>
                                    <p className={styles.inforConfirm}>
                                        Sau khi hoàn tất thanh toán, mã xác nhận phòng sẽ được gửi ngay qua SMS và Email
                                        của bạn.
                                    </p>
                                    <div className={styles.payment}>
                                        <div className={`checkBoxPayment ${styles.paymentOnl}`}>
                                            <div className={styles.paymentTiltle}>
                                                <svg width="32" height="32" fill="none">
                                                    <path
                                                        d="M4 13.5l.5-6 2-1H19l3 1 .5 3V12H11l-1.5 2-.5 6-4.5-1-.5-5.5z"
                                                        fill="url(#icon_method_bank_transfer_svg__paint0_linear)"
                                                    ></path>
                                                    <path
                                                        d="M25.333 12H12a2.667 2.667 0 00-2.667 2.667v8A2.667 2.667 0 0012 25.333h13.333A2.667 2.667 0 0028 22.667v-8A2.667 2.667 0 0025.333 12z"
                                                        fill="#fff"
                                                        stroke="#2D3748"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M18.667 21.333a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333zM22.667 12V9.333A2.667 2.667 0 0020 6.667H6.667A2.667 2.667 0 004 9.333v8A2.667 2.667 0 006.667 20h2.666"
                                                        stroke="#2D3748"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="icon_method_bank_transfer_svg__paint0_linear"
                                                            x1="13.25"
                                                            y1="6.5"
                                                            x2="13.25"
                                                            y2="20"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#E2E8F0"></stop>
                                                            <stop offset="1" stopColor="#CBD5E0"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <span>Chuyển khoản</span>
                                            </div>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedPayment === 'bankTransfer'}
                                                        icon={<span className="iconCheckBox"></span>}
                                                        checkedIcon={<span className="iconCheckBox checked"></span>}
                                                        onChange={handleCheckboxPayment}
                                                        value="bankTransfer"
                                                    />
                                                }
                                            />
                                        </div>
                                        <hr />
                                        <div className={`checkBoxPayment ${styles.paymentOnl}`}>
                                            <div className={styles.paymentTiltle}>
                                                <svg width="32" height="32" fill="none">
                                                    <path
                                                        d="M4 13.5l.5-6 2-1H19l3 1 .5 3V12H11l-1.5 2-.5 6-4.5-1-.5-5.5z"
                                                        fill="url(#icon_method_bank_transfer_svg__paint0_linear)"
                                                    ></path>
                                                    <path
                                                        d="M25.333 12H12a2.667 2.667 0 00-2.667 2.667v8A2.667 2.667 0 0012 25.333h13.333A2.667 2.667 0 0028 22.667v-8A2.667 2.667 0 0025.333 12z"
                                                        fill="#fff"
                                                        stroke="#2D3748"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M18.667 21.333a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333zM22.667 12V9.333A2.667 2.667 0 0020 6.667H6.667A2.667 2.667 0 004 9.333v8A2.667 2.667 0 006.667 20h2.666"
                                                        stroke="#2D3748"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="icon_method_bank_transfer_svg__paint0_linear"
                                                            x1="13.25"
                                                            y1="6.5"
                                                            x2="13.25"
                                                            y2="20"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#E2E8F0"></stop>
                                                            <stop offset="1" stopColor="#CBD5E0"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <span>Thanh toán QR pay</span>
                                            </div>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedPayment === 'paypal'}
                                                        icon={<span className="iconCheckBox"></span>}
                                                        checkedIcon={<span className="iconCheckBox checked"></span>}
                                                        onChange={handleCheckboxPayment}
                                                        value="paypal"
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.submitButton}>
                                        <ButtonPrimary className="btnLarge" onSubmit={handleThanhToan}>
                                            Thanh toán
                                        </ButtonPrimary>
                                        <p>Bằng cách nhấn vào nút này, bạn công nhận mình đã đọc và đồng ý với</p>
                                        <p>Điều kiện và Điều khoản của chúng tôi</p>
                                    </div>
                                </>
                            ) : (
                                <div className={styles.submitButton}>
                                    <ButtonPrimary onSubmit={handleSubmit} className="btnLarge">
                                        Hoàn tất gửi yêu cầu
                                    </ButtonPrimary>
                                    <p>Bằng cách nhấn vào nút này, bạn công nhận mình đã đọc và đồng ý với</p>
                                    <p>Điều kiện và Điều khoản của chúng tôi</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.room}>
                        <div className={styles.roomInfor}>
                            <span className={styles.nameTitle}>Thông tin phòng</span>
                            <div className={styles.roomInforImg}>
                                <div className={styles.roomInforSale}>
                                    <div className={styles.roomInforSaleLabel}>Giảm giá </div> {hotel.GiamGia}%
                                </div>
                                <img src={room.HinhAnh.HinhAnh} alt="" />
                            </div>
                            <div className={styles.roomDetail}>
                                <span> {room.TenLoaiPhong} </span>
                                <div className={`mt-2 d-flex justify-content-start`}>
                                    <svg width="16" height="16" fill="none">
                                        <path
                                            d="M2 14v-1.333A2.667 2.667 0 014.667 10h2.666A2.667 2.667 0 0110 12.667V14m.667-11.913a2.667 2.667 0 010 5.166M14 14v-1.333a2.667 2.667 0 00-2-2.567M8.667 4.667a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0z"
                                            stroke="#4A5568"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    <div className="mx-3">{room.SoNguoi} người</div>
                                </div>
                                <div className={`mt-2 d-flex justify-content-start`}>
                                    <FontAwesomeIcon
                                        icon={['fas', room.tienNghi.Icon]}
                                        // className={classes['icon-fac-detail']}
                                    ></FontAwesomeIcon>
                                    <div className="mx-3">{room.tienNghi.TenTienNghi}</div>
                                </div>
                                <div className={`mt-2 d-flex justify-content-start`}>
                                    <svg width="16" height="16" fill="none">
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
                                    <div className="mx-3">
                                        {room.giuong.length === 2 &&
                                            room.giuong[0].SoLuongGiuong +
                                                ' Giường đơn và ' +
                                                room.giuong[1].SoLuongGiuong +
                                                ' Giường đôi'}
                                        {room.giuong.length === 1 && room.giuong[0].SoLuongGiuong + ' Giường đơn '}
                                    </div>
                                </div>
                                <div className={`mt-2 d-flex justify-content-start`}>
                                    <svg width="16" height="16" fill="none">
                                        <path
                                            d="M2 14v-1.333A2.667 2.667 0 014.667 10h2.666A2.667 2.667 0 0110 12.667V14m.667-11.913a2.667 2.667 0 010 5.166M14 14v-1.333a2.667 2.667 0 00-2-2.567M8.667 4.667a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0z"
                                            stroke="#4A5568"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    <div className="mx-3">Không hỗ trợ hoàn hủy</div>
                                </div>
                                <div style={{ color: '#48BB78' }} className={`mt-2 d-flex justify-content-start`}>
                                    <svg width="16" height="16" fill="none">
                                        <path
                                            d="M11.31 11.976l1.862 1.862M3.241 3.908l4.966 4.965M4.483 2.667L7.586 5.77 5.103 8.253 2 5.149M3.241 13.838l10.552-10.55a5.036 5.036 0 01-1.242 4.965c-2.194 2.194-3.724 2.482-3.724 2.482"
                                            stroke="#48BB78"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    <div className="mx-3">{room.UuDai[0].NoiDung}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.roomInfor}>
                            <span className={styles.nameTitle}>Chi tiết giá</span>
                            <div className={styles.detailPrice}>
                                <div className={`${styles.columnFlex} ${styles.priceRoom}`}>
                                    <span>1 phòng x {room.dem} đêm</span>
                                    <span className={styles.priceSale}>
                                        <div className={styles.priceSale1}>
                                            <div className={styles.pricePercent}>-{hotel.GiamGia}%</div>
                                            <div className={styles.priceSaleOld}>{formatMoney(room.Gia)}</div>
                                        </div>
                                        <span>{formatMoney(room.GiamGia)}</span>
                                    </span>
                                </div>
                                {(hotel.voucher || hotel.flashSale) && (
                                    <div className={`${styles.columnFlex} `}>
                                        <span className={styles.priceSale1}>
                                            Mã giảm giá
                                            {hotel.voucher && (
                                                <span className={styles.labelSale}>{hotel.voucher.MaKhuyenMai}</span>
                                            )}
                                            {hotel.flashSale && <span className={styles.labelSale1}>flashSale</span>}
                                        </span>
                                        <span className={styles.labelPrice}> -{formatMoney(room.soTienDcGiam)}</span>
                                    </div>
                                )}
                                {room.voucher && (
                                    <div className={`${styles.columnFlex} ${styles.afterSale}`}>
                                        <span>Giá sau giảm giá</span>
                                        <span> {formatMoney(room.voucher)}</span>
                                    </div>
                                )}
                                <div className={`${styles.columnFlex} `}>
                                    <span>Thuế và phí dịch vụ khách sạn</span>
                                    <span> {formatMoney(room.Thue1)}</span>
                                </div>
                                <div className={`${styles.columnFlex1} `}>
                                    <span>Tổng tiền thanh toán</span>
                                    <span>{formatMoney(room.Thue)}</span>
                                </div>
                                <div className={styles.vat}>Đã bao gồm thuế, phí, VAT</div>
                                {(hotel.voucher || hotel.flashSale) && (
                                    <div className={styles.congratulation}>
                                        Chúc mừng! Bạn đã tiết kiệm được {formatMoney(room.soTienDcGiam)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Checkout
