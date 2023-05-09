import { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import promotion from '~/assets/jsons/promotion.json'
import { DropdownButton, NavHandle } from '~/components'
import { VoucherTable, FlashSaleTable } from '~/components/Table'
import styles from './Promotion.module.scss'
import { useEffect } from 'react'

function ManageVoucher() {
    const navigate = useNavigate()

    // Menu
    const { state } = useLocation()
    const [active, setActive] = useState(() => {
        if (state) return state.active
        else return 0
    })

    // Dữ liệu cho bảng
    const [data, setData] = useState({})
    useEffect(() => {
        Axios.get('http://localhost:8800/cks/promotion', { params: { idCKS: 1 } })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const option = useRef([
        {
            name: 'Chỉnh sửa',
            handle: function () {
                navigate('/cks/voucher/add', { state: { active: active } })
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
            handle: function () {
                alert('Xóa')
            },
        },
    ])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="d-flex">
                    <NavHandle list={promotion.menu} active={active} onActive={setActive} />
                    <DropdownButton list={promotion.state} width={150} />
                </div>

                {active === 0 && (
                    <VoucherTable option={option.current} header={promotion.header.voucher} data={data.vouchers} />
                )}

                {active === 1 && (
                    <FlashSaleTable
                        option={option.current}
                        header={promotion.header.flashSale}
                        data={data.flashSales}
                    />
                )}

                <Link to="/cks/voucher/add" className={styles.btn}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>
        </div>
    )
}

export default ManageVoucher
