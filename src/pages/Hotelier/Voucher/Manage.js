import { useRef, useState } from 'react'
import clsx from 'clsx'

import { DropdownButton, NavHandle } from '~/components'
import styles from './Voucher.module.scss'
import { VoucherTable, FlashSaleTable } from '~/components/Table'

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
            </div>
        </div>
    )
}

export default ManageVoucher
