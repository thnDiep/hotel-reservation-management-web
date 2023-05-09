import styles from './account.module.scss'
import clsx from 'clsx'
import TitleLinkButton from '~/components/Button/TitleButton'
import { Table } from 'react-bootstrap'
import { NavLink } from '~/components'
import nav from '~/assets/jsons/nav.json'
import { AccountTable } from '~/components/Table'

// tên, email, sđt, địa chỉ, tên đn, nút hoạt động: hoạt động, khóa
function Account() {
    return (
        <div>
            <NavLink list={nav.accountOfAdmin} />
            {/* <div className={styles.wrap}> */}
            <AccountTable />
            {/* </div> */}
        </div>
    )
}

export default Account
