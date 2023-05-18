/* eslint-disable no-lone-blocks */
import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import TitleLinkButton from '~/components/Button/TitleButton'
import { Tag, NavBar, DropdownButton, DropdownOption, ConformModal, NavHandle } from '~/components'
import { Table } from 'react-bootstrap'
import styles from './OrderManagement.module.scss'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import OrderDetailCard from '~/pages/Hotelier/OrderManagement/OrderDetailCard/OrderDetailCard'
import FooterPaging from '~/components/FooterPaging/FooterPaging'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const MySwal = withReactContent(Swal)
function HotelTable({ data, option }) {
    const handleButtonClick = (ma) => {
        console.log(ma)
        MySwal.fire({
            title: 'Đơn hàng',
            html: <OrderDetailCard MaDatPhong={ma} />,
            showCloseButton: true,
            showConfirmButton: false,
            width: '784px',
            height: '530px',
            backdrop: '#fffff',
        })
    }

    const numberFormat = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    })
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()

    useEffect(() => {
        if (data) {
            let total = Math.floor(data.length / 4)
            if (data.length % 4 !== 0) total++
            setTotalPage(total)
        }
    }, [data])

    return (
        <div className={styles.tableWrapper}>
            <Table responsive className={styles.cusTable}>
                <thead>
                    <tr>
                        <th className={styles.center}>
                            <input type="checkbox" className={styles.checkBox} />
                        </th>
                        <th>
                            <h3 className={styles.title}>Khách hàng</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Tên khách sạn</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Loại phòng</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Ngày nhận phòng</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Ngày trả phòng</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Số điện thoại</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Tổng tiền</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Trạng thái</h3>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.slice((page - 1) * 4, page * 4).map((data) => {
                            console.log(data.MaDatPhong)
                            return (
                                <tr className={styles.memberRow} key={data.MaDatPhong}>
                                    <td onClick={() => handleButtonClick(data.MaDatPhong)} className={styles.center}>
                                        <input type="checkbox" className={styles.checkBox} />
                                    </td>
                                    <td onClick={() => handleButtonClick(data.MaDatPhong)}>
                                        <div className="d-flex-js">
                                            <img src={data.HinhAnh} />
                                            <div className={styles.text1}>
                                                <span className={styles.codeOrder}>#{data.MaDatPhong}</span>
                                                <h4>{data.HoTen}</h4>
                                                <br />
                                            </div>
                                        </div>
                                    </td>
                                    <td onClick={() => handleButtonClick(data.MaDatPhong)}>
                                        <span className={`${styles.text2} text-left`}>{data.Ten}</span>
                                    </td>
                                    <td onClick={() => handleButtonClick(data.MaDatPhong)}>
                                        <span className={`${styles.text2} text-left`}>{data.TenLoaiPhong}</span>
                                    </td>

                                    <td onClick={() => handleButtonClick(data.MaDatPhong)}>
                                        <span className={styles.date}>
                                            {new Date(data.NgayNhanPhong).toLocaleDateString('en-SG', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </td>
                                    <td onClick={() => handleButtonClick(data.MaDatPhong)}>
                                        <span className={styles.date}>
                                            {new Date(data.NgayTraPhong).toLocaleDateString('en-SG', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </td>
                                    <td onClick={() => handleButtonClick(data.MaDatPhong)}>
                                        <span className={styles.text2}>{data.SoDienThoai}</span>
                                    </td>
                                    <td onClick={() => handleButtonClick(data.MaDatPhong)}>
                                        <h3 className={clsx(styles.text1, styles.primary)}>
                                            {numberFormat.format(data.TongTien).replace('₫', '')}
                                            <sup>VND</sup>
                                        </h3>
                                    </td>
                                    <td>
                                        <button className={styles.btnPending}>
                                            <div
                                                className={clsx(
                                                    'btn-1',
                                                    {
                                                        primary: data.TrangThai === 0,
                                                        pending: data.TrangThai === 1,
                                                        active: data.TrangThai === 2,
                                                    },
                                                    styles.statusPending,
                                                    data.TrangThai === 1 && styles.statusPending1,
                                                )}
                                            >
                                                {data.TrangThai === 0
                                                    ? 'Chờ duyệt'
                                                    : data.TrangThai === 1
                                                    ? 'Chưa thanh toán'
                                                    : 'Đã hoàn tất'}
                                            </div>
                                        </button>
                                    </td>
                                    <td className={`${styles.relative} ${styles.btnDotted}`}>
                                        <DropdownOption
                                            type={9}
                                            idActive={data.MaDatPhong}
                                            list={option}
                                            hides={[false, data.TrangThai !== 0]}
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
            <FooterPaging curPage={page} handleChangePage={setPage} totalPage={totalPage} />
        </div>
    )
}
const OrderManagement = () => {
    const Nav = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [data, setData] = useState(null)
    const [orderO, setOrderO] = useState(null)
    const [option, setOption] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:8800/cks/order', { params: { idCKS: user.ID } })
            .then((response) => {
                setData(response.data.orders)
                setOrderO(response.data.orders)
                console.log(response.data.orders)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const [active, setActive] = useState(0)
    const [orderActive, setOrderActive] = useState(null)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showDuyetModal, setShowDuyetModal] = useState(false)
    const handleActive = (value) => {
        setActive(value)
        if (data) {
            if (value === 1 && value !== active) {
                setData(orderO.filter((key) => key.TrangThai === 1))
            } else if (value === 2 && value !== active) {
                setData(orderO.filter((key) => key.TrangThai === 0))
            } else if (value === 3 && value !== active) {
                setData(orderO.filter((key) => key.TrangThai === 2))
            } else if (value === 0 && value !== active) {
                setData(orderO)
            }
        }
    }
    useEffect(() => {
        if (data) {
            setOption([
                {
                    name: 'Xóa',
                    handle: function (idActive, index) {
                        console.log(idActive)
                        const order = data.find((key) => key.MaDatPhong === idActive)
                        console.log(order)
                        console.log('order')
                        setOrderActive(order)
                        setShowDeleteModal(true)
                    },
                },
                {
                    name: 'Duyệt',
                    handle: function (idActive, index) {
                        const order = data.find((key) => key.MaDatPhong === idActive)
                        setOrderActive(order)
                        setShowDuyetModal(true)
                        // const hotel = data.hotels.find((key) => key.ID === idActive)
                        // setHotelActive(hotel)
                        // setShowStopModal(true)
                    },
                },
            ])
        }
    }, [data])
    const [showInformModal, setShowInformModal] = useState(false)
    function handleDeleteHotel() {
        Axios.get('http://localhost:8800/cks/order/del', {
            params: { MaDatPhong: orderActive.MaDatPhong, IDPhong: orderActive.IDPhong },
        })
            .then(() => {
                setShowInformModal(true)

                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)
                // console.log('helllo')
                setData(data.filter((key) => key.MaDatPhong !== orderActive.MaDatPhong))
                setOrderO(orderO.filter((key) => key.MaDatPhong !== orderActive.MaDatPhong))

                setOrderActive(null)
                setShowDeleteModal(false)
            })
            .catch((error) => {
                console.log(error)
                setShowDeleteModal(false)
            })
    }
    function handleDuyetHotel() {
        // console.log('ấdasd')
        Axios.get('http://localhost:8800/cks/order/update', {
            params: { MaDatPhong: orderActive.MaDatPhong, TrangThai: 1 },
        })
            .then(() => {
                setShowInformModal(true)

                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)
                setData(
                    data.map((key) => {
                        return key.MaDatPhong === orderActive.MaDatPhong ? { ...key, TrangThai: 1 } : key
                    }),
                )
                setOrderActive(null)
                setShowDuyetModal(false)
            })
            .catch((error) => {
                console.log(error)
                setShowDeleteModal(false)
            })
    }

    const handleSearch = (e) => {
        console.log(orderO)
        const SDT = orderO.filter((key) => key.SoDienThoai.includes(e.target.value))
        console.log(SDT)
        if (SDT.length !== 0) setData(SDT)
        else setData(orderO.filter((key) => key.HoTen.includes(e.target.value)))
    }

    return (
        <div className={styles.content}>
            <div className="mt-4 d-flex justify-content-between align-items-center ">
                <div className="card-action coin-tabs mb-2">
                    {/* <ul className="nav nav-tabs nav" role="tablist">
                        <li className="nav-item nav-item">
                            <TitleLinkButton name="Tất cả" className="btnChoose" active="active"></TitleLinkButton>
                        </li>
                        <li className="nav-item nav-item">
                            <TitleLinkButton name="Đã duyệt" className="btnChoose"></TitleLinkButton>
                        </li>
                        <li className="nav-item nav-item">
                            <TitleLinkButton name="Chờ duyệt" className="btnChoose"></TitleLinkButton>
                        </li>
                        <li className="nav-item nav-item">
                            <TitleLinkButton name="Đã xóa" className="btnChoose"></TitleLinkButton>
                        </li>
                    </ul> */}
                    <NavHandle
                        list={['Tất cả', 'Chưa thanh toán', 'Chờ duyệt', 'Đã hoàn tất']}
                        active={active}
                        onActive={handleActive}
                    />
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="input-group">
                        <div id="search-autocomplete" className="form-outline">
                            <input
                                type="search"
                                onChange={handleSearch}
                                id="phoneInput"
                                className={`form-control ${styles.form1}`}
                            />
                        </div>
                        <button type="button" className={`btn btn-primary ${styles.btnSearch}`}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <div id="room_wrapper" className="dataTables_wrapper no-footer">
                                    <HotelTable data={data} option={option} />
                                    {/* Xác nhận xóa */}
                                    <ConformModal
                                        show={showDeleteModal}
                                        onClose={() => setShowDeleteModal(false)}
                                        onConform={() => handleDeleteHotel()}
                                        content={`Bạn chắc chắn muốn xóa đơn`}
                                        highlight={orderActive && orderActive.MaDatPhong}
                                    />
                                    {/* Xác nhận Duyệt */}
                                    <ConformModal
                                        show={showDuyetModal}
                                        conFormBtn="OK"
                                        onClose={() => setShowDuyetModal(false)}
                                        onConform={() => handleDuyetHotel()}
                                        content={`Bạn chắc chắn muốn duyệt đơn `}
                                        highlight={orderActive && orderActive.MaDatPhong}
                                    />
                                    {/* Thông báo thành công */}
                                    {showInformModal && (
                                        <div id="myModal" className="myModal1">
                                            {/* <!-- Modal content --> */}
                                            <div className="modalContent">
                                                <FontAwesomeIcon icon={faCheckCircle} className="modalIcon" />
                                                <div>Thao tác thành công</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderManagement
