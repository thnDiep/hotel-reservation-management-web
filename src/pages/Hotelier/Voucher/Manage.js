import { useRef, useState } from 'react'
import clsx from 'clsx'

import { ButtonPrimary, DropdownButton, NavHandle } from '~/components'
import styles from './Voucher.module.scss'
import { VoucherTable, FlashSaleTable } from '~/components/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ManageVoucher() {
    const [active, setActive] = useState(0)
    const menu = useRef(['Voucher', 'FlashSale'])
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="d-flex">
                    <NavHandle list={menu.current} active={active} onActive={setActive} />
                    <DropdownButton list={['Đang diễn ra', 'Chưa bắt đầu', 'Đã kết thúc']} width={150} />
                </div>

                {active === 0 && <VoucherTable />}
                {active === 1 && <FlashSaleTable />}

                <Link to="/voucher/add" className={styles.btn}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>
        </div>
    )
}

export default ManageVoucher
