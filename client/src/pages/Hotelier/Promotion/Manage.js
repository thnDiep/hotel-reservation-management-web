import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import voucher from '~/assets/jsons/voucher.json'
import { DropdownButton, NavHandle } from '~/components'
import { VoucherTable, FlashSaleTable } from '~/components/Table'
import styles from './Promotion.module.scss'

function ManageVoucher() {
    const { state } = useLocation()
    const [active, setActive] = useState(() => {
        if (state) return state.active
        else return 0
    })
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="d-flex">
                    <NavHandle list={voucher.menu} active={active} onActive={setActive} />
                    <DropdownButton list={voucher.state} width={150} />
                </div>

                {active === 0 && <VoucherTable />}
                {active === 1 && <FlashSaleTable />}

                <Link to="/cks/voucher/add" className={styles.btn}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>
        </div>
    )
}

export default ManageVoucher
