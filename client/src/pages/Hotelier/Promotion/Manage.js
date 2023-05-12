import { useState, useEffect, useContext } from 'react'
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Axios from 'axios'

import promotion from '~/assets/jsons/promotion.json'
import { DropdownButton, NavHandle, ConformModal } from '~/components'
import { VoucherTable, FlashSaleTable } from '~/components/Table'
import styles from './Promotion.module.scss'
import DataContext from '~/contexts/DataContext'

function ManageVoucher() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const { preActive } = useParams()
    const context = useContext(DataContext)

    // Conform modal
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showStopModal, setShowStopModal] = useState(false)
    const [showInformModal, setShowInformModal] = useState(false)

    const [promotionActive, setPromotionActive] = useState(null)
    const [option, setOption] = useState([])
    const [data, setData] = useState({})

    // Menu
    const [active, setActive] = useState(() => {
        if (state) {
            return state.active
        }
        if (preActive !== undefined && preActive !== 'undefined') {
            return parseInt(preActive)
        }
        return 0
    })
    // // Dữ liệu cho bảng
    // useEffect(() => {
    //     Axios.get('http://localhost:8800/cks/promotion', { params: { idCKS: 2 } })
    //         .then((response) => {
    //             const result = handleGetPromotion(response.data)
    //             setData(result)
    //             setOption([
    //                 {
    //                     name: 'Chỉnh sửa',
    //                     handle: function (idActive, type) {
    //                         navigate(`/cks/voucher/add/${type}/${idActive}`)
    //                     },
    //                 },
    //                 {
    //                     name: 'Ngừng khuyến mãi',
    //                     handle: function (idActive) {
    //                         const promotion = result.promotions.find((key) => key.ID === idActive)
    //                         setPromotionActive(promotion)
    //                         setShowStopModal(true)
    //                     },
    //                 },
    //                 {
    //                     name: 'Xóa',
    //                     handle: function (idActive) {
    //                         const promotion = result.promotions.find((key) => key.ID === idActive)
    //                         setPromotionActive(promotion)
    //                         setShowDeleteModal(true)
    //                     },
    //                 },
    //             ])
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    // Dữ liệu cho bảng
    useEffect(() => {
        if (context.data) {
            const result = handleGetPromotion(context.data)
            setData(result)
            setOption([
                {
                    name: 'Chỉnh sửa',
                    handle: function (idActive, type) {
                        navigate(`/cks/voucher/add/${type}/${idActive}`)
                    },
                },
                {
                    name: 'Ngừng khuyến mãi',
                    handle: function (idActive) {
                        const promotion = result.promotions.find((key) => key.ID === idActive)
                        setPromotionActive(promotion)
                        setShowStopModal(true)
                    },
                },
                {
                    name: 'Xóa',
                    handle: function (idActive) {
                        const promotion = result.promotions.find((key) => key.ID === idActive)
                        setPromotionActive(promotion)
                        setShowDeleteModal(true)
                    },
                },
            ])
        }
    }, [context])

    function handleGetPromotion(data) {
        const periods = data.periods
        const promotions = data.promotions
        const vouchers = promotions.filter((key) => key.MaKhuyenMai !== null)
        const flashSales = promotions.filter((key) => key.MaKhuyenMai === null)

        const now = new Date()
        if (vouchers) {
            vouchers.map((voucher) => {
                const BatDau = new Date(voucher.BatDau)
                voucher.BatDau = BatDau
                let KetThuc
                if (voucher.KetThuc) {
                    KetThuc = new Date(voucher.KetThuc)
                    voucher.KetThuc = KetThuc
                } else {
                    KetThuc = new Date()
                }

                if (now < BatDau) {
                    voucher.TrangThai = 0
                } else if (now >= BatDau && now <= KetThuc) {
                    voucher.TrangThai = 1
                } else {
                    voucher.TrangThai = 2
                }
            })
        }
        if (flashSales) {
            flashSales.map((flashSale) => {
                const BatDau = new Date(flashSale.BatDau)
                // BatDau.setUTCHours(0, 0, 0, 0)
                flashSale.BatDau = BatDau
                let KetThuc
                // KetThuc.setUTCHours(0, 0, 0, 0)
                if (flashSale.KetThuc) {
                    KetThuc = new Date(flashSale.KetThuc)
                    flashSale.KetThuc = KetThuc
                } else {
                    KetThuc = new Date()
                }

                const period = periods.find((key) => key.ID === flashSale.IDKhungGio)
                const start = period.GioBatDau.toString()
                const end = period.GioKetThuc.toString()

                flashSale.GioBatDau = start.slice(0, 5)
                flashSale.GioKetThuc = end.slice(0, 5)

                if (now < BatDau) {
                    flashSale.TrangThai = 0
                } else if (now >= BatDau && now <= KetThuc) {
                    const stringTime = now.toTimeString()
                    const nowTime = stringTime.slice(0, 8)
                    if (nowTime >= start && nowTime <= end) {
                        flashSale.TrangThai = 1
                    } else {
                        flashSale.TrangThai = 0
                    }
                } else {
                    flashSale.TrangThai = 2
                }
            })
        }

        return { vouchers, flashSales, promotions }
    }

    // Dừng khuyến mãi
    function handleStopPromotion() {
        const GioBatDau = promotionActive.GioBatDau
        const GioKetThuc = promotionActive.GioKetThuc

        delete promotionActive.GioBatDau
        delete promotionActive.GioKetThuc
        delete promotionActive.TrangThai

        promotionActive.KetThuc = new Date()
        Axios.post('http://localhost:8800/cks/promotion/update', {
            khuyenmai: promotionActive,
        })
            .then(() => {
                setShowInformModal(true)

                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)

                promotionActive.GioBatDau = GioBatDau
                promotionActive.GioKetThuc = GioKetThuc
                promotionActive.TrangThai = 2

                data.promotions.forEach((promotion) => {
                    if (promotion.ID === promotionActive.ID) {
                        promotion = promotionActive
                    }
                })
                if (promotionActive.MaKhuyenMai === null) {
                    setData({
                        promotions: data.promotions,
                        vouchers: data.vouchers,
                        flashSales: data.promotions.filter((key) => key.MaKhuyenMai === null),
                    })
                } else {
                    setData({
                        promotions: data.promotions,
                        vouchers: data.promotions.filter((key) => key.MaKhuyenMai !== null),
                        flashSales: data.flashSales,
                    })
                }

                setPromotionActive(null)
                setShowStopModal(false)
            })
            .catch((error) => {
                console.log(error)
                setShowStopModal(false)
            })
    }

    // Xóa khuyến mãi
    function handleDeletePromotion() {
        Axios.get('http://localhost:8800/cks/promotion/del', { params: { idPromotion: promotionActive.ID } })
            .then(() => {
                setShowInformModal(true)

                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)

                setData({
                    promotions: data.promotions.filter((key) => key.ID !== promotionActive.ID),
                    vouchers: data.vouchers.filter((key) => key.ID !== promotionActive.ID),
                    flashSales: data.flashSales.filter((key) => key.ID !== promotionActive.ID),
                })
                setPromotionActive(null)
                setShowDeleteModal(false)
            })
            .catch((error) => {
                console.log(error)
                setShowDeleteModal(false)
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="d-flex">
                    <NavHandle list={promotion.menu} active={active} onActive={setActive} />
                    {/* <DropdownButton list={promotion.state} width={150} /> */}
                </div>

                {active === 0 && (
                    <VoucherTable option={option} header={promotion.header.voucher} data={data.vouchers} />
                )}

                {active === 1 && (
                    <FlashSaleTable option={option} header={promotion.header.flashSale} data={data.flashSales} />
                )}

                {/* Xác nhận ngừng khuyến mãi */}
                <ConformModal
                    show={showStopModal}
                    onClose={() => setShowStopModal(false)}
                    onConform={() => handleStopPromotion()}
                    content={`Bạn chắc chắn muốn ngừng khuyến mãi`}
                    highlight={promotionActive && promotionActive.TieuDe}
                    conFormBtn="Ngừng khuyến mãi"
                />

                {/* Xác nhận xóa */}
                <ConformModal
                    show={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConform={() => handleDeletePromotion()}
                    content={`Bạn chắc chắn muốn xóa khuyến mãi`}
                    highlight={promotionActive && promotionActive.TieuDe}
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

                <Link to={`/cks/voucher/add/${active}`} className={styles.btn}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>
        </div>
    )
}

export default ManageVoucher
