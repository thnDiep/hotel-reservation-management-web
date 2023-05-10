import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import DataContext from '~/contexts/DataContext'
import promotion from '~/assets/jsons/promotion.json'
import { DropdownButton, NavHandle, ConformModal } from '~/components'
import { VoucherTable, FlashSaleTable } from '~/components/Table'
import styles from './Promotion.module.scss'
import { useEffect, useContext } from 'react'

function ManageVoucher() {
    const navigate = useNavigate()
    const [showConformModal, setShowConformModal] = useState(false)
    const [promotionActive, setPromotionActive] = useState(null)
    const [option, setOption] = useState([])
    const [data, setData] = useState({})

    // Menu
    const { preActive } = useParams()

    const { state } = useLocation()
    const [active, setActive] = useState(() => {
        if (state) return state.active
        if (preActive !== 'undefined') return parseInt(preActive)
        else return 0
    })

    // Dữ liệu cho bảng
    useEffect(() => {
        Axios.get('http://localhost:8800/cks/promotion', { params: { idCKS: 1 } })
            .then((response) => {
                const result = handleGetPromotion(response.data)
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
                        handle: function () {
                            alert('Ngừng khuyến mãi')
                        },
                    },
                    {
                        name: 'Xóa',
                        handle: function (idActive) {
                            const promotion = result.promotions.find((key) => key.ID === idActive)
                            setPromotionActive(promotion)
                            setShowConformModal(!showConformModal)
                        },
                    },
                ])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    function handleGetPromotion(data) {
        const periods = data.periods
        const promotions = data.promotions
        const vouchers = promotions.filter((key) => key.MaKhuyenMai !== null)
        const flashSales = promotions.filter((key) => key.MaKhuyenMai === null)

        const now = new Date()
        if (flashSales) {
            flashSales.map((flashSale) => {
                const BatDau = new Date(flashSale.BatDau)
                BatDau.setHours(0, 0, 0, 0)
                const KetThuc = new Date(flashSale.KetThuc)
                KetThuc.setHours(23, 59, 59, 0)

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

    // Xóa khuyến mãi
    function handleDeletePromotion() {
        Axios.get('http://localhost:8800/cks/promotion/del', { params: { idPromotion: promotionActive.ID } })
            .then(() => {
                setData({
                    promotions: data.promotions.filter((key) => key.ID !== promotionActive.ID),
                    vouchers: data.promotions.filter(
                        (key) => key.MaKhuyenMai !== null && key.ID !== promotionActive.ID,
                    ),
                    flashSales: data.promotions.filter(
                        (key) => key.MaKhuyenMai !== null && key.ID !== promotionActive.ID,
                    ),
                })
                setPromotionActive(null)
                setShowConformModal(!showConformModal)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="d-flex">
                    <NavHandle list={promotion.menu} active={active} onActive={setActive} />
                    <DropdownButton list={promotion.state} width={150} />
                </div>

                {active === 0 && (
                    <VoucherTable option={option} header={promotion.header.voucher} data={data.vouchers} />
                )}

                {active === 1 && (
                    <FlashSaleTable option={option} header={promotion.header.flashSale} data={data.flashSales} />
                )}

                <ConformModal
                    show={showConformModal}
                    onClose={() => setShowConformModal(!showConformModal)}
                    onConform={() => handleDeletePromotion()}
                    content={`Bạn chắc chắn muốn xóa khuyến mãi`}
                    highlight={promotionActive && promotionActive.TieuDe}
                />

                <Link to={`/cks/voucher/add/${active}`} className={styles.btn}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>
        </div>
    )
}

export default ManageVoucher
