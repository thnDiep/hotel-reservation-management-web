import React, { useEffect, useState } from 'react'
import classes from './header.module.scss'
import TitleLinkButton from '~/components/Button/TitleButton'
import ButtonPrimary from '~/components/Button/ButtonPrimary'
import SideBar from '../DefaultLayout/SideBar/SideBar'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import axios from 'axios'
import { useContext } from 'react'
import DataContext from '~/contexts/DataContext'
import moment from 'moment'

function Header() {
    const Nav = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    const [enteredAnnounce, setEnteredAnnounce] = useState(false)
    let check = false
    const announceChangeHandler = () => {
        setEnteredAnnounce(!enteredAnnounce)
    }
    if (user !== null) {
        check = true
    }
    const { data } = useContext(DataContext)
    const [voucher, setVoucher] = useState(null)
    const [flashSale, setFlashSale] = useState(null)
    const [order, setOrder] = useState(null)
    useEffect(() => {
        if (data && user) {
            const vouchers = data.promotions.filter((voucher) => {
                const now = moment()
                let isBetween = false
                if (moment(voucher.KetThuc).isValid())
                    isBetween = now.isBetween(moment(voucher.BatDau), moment(voucher.KetThuc))
                else {
                    isBetween = now.isAfter(moment(voucher.BatDau))
                }
                const checkSLSD = voucher.SoLuongSD <= voucher.SoLuongKM
                const checkKG = voucher.IDKhungGio === null
                return isBetween && checkSLSD && checkKG
            })
            const flashSale1 = data.promotions.filter((voucher) => {
                const now = moment()
                let isBetween = false

                if (moment(voucher.KetThuc).isValid())
                    isBetween = now.isBetween(moment(voucher.BatDau), moment(voucher.KetThuc))
                else {
                    isBetween = now.isAfter(moment(voucher.BatDau))
                }
                const checkKG = voucher.MaKhuyenMai === null

                return isBetween && checkKG
            })
            const flashSale = flashSale1.filter((item) => {
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
            for (const hotel of data.hotels) {
                for (const flash of flashSale) {
                    if (hotel.ID === flash.IDKhachSan) {
                        flashSale.TenKhachSan = hotel.Ten
                    }
                }
                for (const voucher of vouchers) {
                    if (hotel.ID === voucher.IDKhachSan) {
                        voucher.TenKhachSan = hotel.Ten
                        voucher.HinhAnh = hotel.HinhAnh
                    }
                }
            }

            const orders = data.orders.filter((order) => {
                return order.IDKhachHang === user?.ID && order.TrangThai === 1
            })
            const roomMap = {}
            for (const room of data.rooms) {
                roomMap[room.ID] = room.HinhAnh.HinhAnh
            }

            for (const order of orders) {
                const roomImage = roomMap[order.IDPhong]
                if (roomImage) {
                    order.HinhAnh = roomImage
                }
            }
            setVoucher(vouchers)
            setOrder(orders)
            setFlashSale(flashSale)
        }
    }, [data])
    const formatMoney = (amount) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    const { LogoutHandler } = useContext(DataContext)
    const handleLogout = () => {
        LogoutHandler()
        Nav('/login')
        // axios.get('http://localhost:8800/auth/logout', { params: { idUser: id } }) //
        // .then((response) => {
        //     setData(response.data)
        // })
        // .catch((error) => {
        // })
    }
    return (
        <div className={classes.header}>
            <div className={classes.header__nav}>
                <Link to="/" className={classes.logo}>
                    {/* <h1>SunLight</h1> */}
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMgiTOs33abnEsiYTsqGrPaj5JsZJOjS-gQ&usqp=CAU"
                        className={classes.img}
                        alt="logo_mytour"
                    />
                    <span>MyTravel</span>
                </Link>
                <div className={classes.nav__title}>
                    <TitleLinkButton className="btnTitle" name="Ưu đãi" link="/">
                        <svg width="16" height="16" fill="none" style={{ marginRight: '8px' }}>
                            <g clipPath="url(#ic_promo_svg__clip0_21534_217225)">
                                <path
                                    d="M6.94 1.386a1.333 1.333 0 012.12 0l.62.811c.29.38.761.575 1.235.512l1.013-.135a1.333 1.333 0 011.498 1.498l-.135 1.013c-.064.473.132.945.512 1.235l.811.62a1.333 1.333 0 010 2.12l-.811.62c-.38.29-.576.761-.512 1.235l.135 1.013a1.333 1.333 0 01-1.498 1.498l-1.013-.135a1.333 1.333 0 00-1.235.512l-.62.811a1.333 1.333 0 01-2.12 0l-.62-.811a1.333 1.333 0 00-1.235-.512l-1.013.135a1.333 1.333 0 01-1.498-1.498l.135-1.013a1.333 1.333 0 00-.512-1.235l-.811-.62a1.333 1.333 0 010-2.12l.811-.62c.38-.29.575-.762.512-1.235l-.135-1.013a1.333 1.333 0 011.498-1.498l1.013.135c.473.063.945-.132 1.235-.512l.62-.811z"
                                    fill="#F36"
                                ></path>
                                <path
                                    d="M6.339 11.855a.496.496 0 01-.12-.507l2.336-7.009a.496.496 0 11.94.313L7.16 11.661a.496.496 0 01-.82.194zM11.437 6.948a1.49 1.49 0 00-2.104 0 1.49 1.49 0 000 2.103c.58.58 1.524.58 2.104 0a1.49 1.49 0 000-2.103zm-.701 1.402a.496.496 0 11-.701-.703.496.496 0 01.7.703zM6.333 6.948a1.49 1.49 0 00-2.103 0 1.49 1.49 0 000 2.103c.58.58 1.523.58 2.103 0a1.49 1.49 0 000-2.103zm-.7 1.402a.496.496 0 11-.702-.703.496.496 0 01.701.703z"
                                    fill="#fff"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="ic_promo_svg__clip0_21534_217225">
                                    <path fill="#fff" d="M0 0h16v16H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </TitleLinkButton>
                    <TitleLinkButton className="btnTitle" name="Giới thiệu nhận quà" link="/">
                        <svg width="16" height="16" fill="none" style={{ marginRight: '8px' }}>
                            <path
                                d="M3.055 2.746a1.6 1.6 0 011.648-1.545C7.141 1.201 8 4.291 8 4.291H4.703a1.6 1.6 0 01-1.648-1.545v0zM11.296 4.292H8S8.858 1.2 11.296 1.2a1.6 1.6 0 011.649 1.545 1.599 1.599 0 01-1.649 1.546zM13.563 8.618v4.945a1.236 1.236 0 01-1.237 1.236H3.673a1.236 1.236 0 01-1.237-1.236V8.618"
                                stroke="#1A202C"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M14.799 4.292h-13.6v2.473h13.6V4.292zM8 4.292V14.8"
                                stroke="#1A202C"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </TitleLinkButton>
                    {/* <TitleLinkButton className="btnTitle" name="Hợp tác nhận quà" link="/">
                        <svg width="16" height="16" fill="none" style={{ marginRight: '8px' }}>
                            <path
                                d="M9.236 5.09L7.893 6.434a2.473 2.473 0 01-3.496 0l-.106-.106L7.337 3.28a4.372 4.372 0 016.182 0v0a4.373 4.373 0 01.662 5.334"
                                stroke="#1A202C"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M10.019 7.11l2.233 2.233a1.854 1.854 0 010 2.623l-1.011 1.01a3.709 3.709 0 01-5.246 0L2.48 9.463a4.372 4.372 0 010-6.182v0A4.357 4.357 0 015.527 2M11.95 12.267L9.546 9.862M10.171 13.723L7.927 11.48"
                                stroke="#1A202C"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </TitleLinkButton> */}

                    <TitleLinkButton link="/registerPartner" className="btnTitle" name="Khách hàng doanh nghiệp">
                        <svg width="17" height="16" fill="none" style={{ marginRight: '8px' }}>
                            <path
                                d="M5.548 14.667h5.457c2.741 0 3.232-1.074 3.376-2.38l.511-5.334C15.076 5.327 14.6 4 11.687 4h-6.82C1.953 4 1.476 5.327 1.66 6.953l.511 5.334c.144 1.306.635 2.38 3.376 2.38zM5.549 4v-.534c0-1.18 0-2.133 2.182-2.133h1.091c2.183 0 2.183.953 2.183 2.133V4"
                                stroke="#1A202C"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M9.64 8.667v.68c0 .726-.006 1.32-1.363 1.32-1.35 0-1.364-.587-1.364-1.314v-.686c0-.667 0-.667.682-.667h1.364c.682 0 .682 0 .682.667zM14.858 7.333a11.392 11.392 0 01-5.217 2.013M1.88 7.513a11.263 11.263 0 005.033 1.84"
                                stroke="#1A202C"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </TitleLinkButton>
                    <TitleLinkButton
                        link="/checkOrder"
                        className="btnTitle"
                        name="Kiểm tra đơn hàng"
                        // check="true"
                    ></TitleLinkButton>

                    <TitleLinkButton className="btnTitle" name="VND" link="/" check="true">
                        <img
                            src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_lang_vi.png"
                            className={classes.vietnam}
                            alt=""
                        />
                    </TitleLinkButton>

                    <div className={classes.annouce}>
                        <svg
                            width="20"
                            height="20"
                            fill="none"
                            style={{ stroke: '#000' }}
                            onClick={announceChangeHandler}
                        >
                            <path
                                d="M8.333 4.167a1.667 1.667 0 013.334 0 5.833 5.833 0 013.333 5v2.5a3.333 3.333 0 001.667 2.5H3.333A3.334 3.334 0 005 11.667v-2.5a5.833 5.833 0 013.333-5"
                                stroke="#000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7.5 14.166V15a2.5 2.5 0 105 0v-.834"
                                stroke="#000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className={classes.badge}></span>
                    </div>
                    <div className={classes.annouceBar} style={{ display: !enteredAnnounce ? 'none' : 'block' }}>
                        <div className={classes.flowBar}>
                            <div className={classes.btnReadAll}>
                                <button className={classes.readAll}>Đọc tất cả</button>
                            </div>
                            <div>
                                {order &&
                                    user &&
                                    order.map((oders) => (
                                        <Link
                                            to={`/checkout/${oders.IDPhong}/${oders.MaDatPhong}`}
                                            key={oders.MaDatPhong}
                                        >
                                            <div onClick={announceChangeHandler} className={`${classes.hoverTag} `}>
                                                <div className={classes.item}>
                                                    <img src={oders.HinhAnh} alt="icon_type_notify" />
                                                    <div className={classes.info}>
                                                        <span className={classes.info1}>
                                                            Bạn có mã đơn phòng chưa thanh toán: {oders.MaDatPhong}
                                                        </span>
                                                        <span className={classes.info2}>
                                                            Với số tiền phải thanh toán là:{' '}
                                                            {formatMoney(+oders.TongTien)}
                                                        </span>
                                                        <span className={classes.dateAnnounce}>
                                                            {oders.ThoiGianDat}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                {voucher &&
                                    user &&
                                    voucher.map((voucher) => {
                                        return (
                                            <div
                                                onClick={announceChangeHandler}
                                                className={`${classes.hoverTag} `}
                                                key={voucher.ID}
                                            >
                                                <div className={classes.item}>
                                                    <img src={voucher.HinhAnh} alt="icon_type_notify" />
                                                    <div className={classes.info}>
                                                        <span className={classes.info1}>{voucher.TenKhachSan}</span>
                                                        <span className={classes.info2}>{voucher.TieuDe}</span>
                                                        <span className={classes.dateAnnounce}>{voucher.BatDau}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>

                    {check === false ? (
                        <>
                            <Link to="/login">
                                <ButtonPrimary className="signIn">Đăng nhập</ButtonPrimary>
                            </Link>
                            <Link to="/signup">
                                <ButtonPrimary className="signUp">Đăng ký</ButtonPrimary>
                            </Link>
                        </>
                    ) : (
                        <div className={`${classes.boxUser} headerDropdown`}>
                            <img src={user.HinhAnh} className={classes.ava} alt="" />
                            <div className={classes.nameAva}>
                                <span className={classes.name}>{user.HoTen}</span>
                                {/* <svg width="10" height="6" fill="none" className={`svgFillAll ${classes.icon}`}>
                                    <path
                                        d="M1.667 1.333L5 4.667l3.333-3.334"
                                        stroke="#1A202C"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg> */}
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle className={classes.toggle} id="dropdown-basic"></Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div>
                                        <Link to={'/profile'}>Tài khoản</Link>
                                    </div>
                                    <div>
                                        <Link to={'/profile/wish-list'}>Yêu thích</Link>
                                    </div>
                                    <div>
                                        <Link to={'/profile/order'}>Đơn phòng</Link>
                                    </div>
                                    <div onClick={handleLogout}>
                                        <Link>Đăng xuất</Link>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    )}

                    <SideBar />
                </div>
            </div>
            {/* <div className={classes.header__choose}>
            <TitleButton name="Khách sạn" className="btnChoose" active="active"></TitleButton>
            <TitleButton name="Biệt thự, Homestay" className="btnChoose"></TitleButton>
            <TitleButton name="Top Thương hiệu" className="btnChoose"></TitleButton>
            <TitleButton name="Nhà hàng" className="btnChoose"></TitleButton>
            <TitleButton name="Sự kiện" className="btnChoose"></TitleButton>
        </div> */}
        </div>
    )
}

export default Header
