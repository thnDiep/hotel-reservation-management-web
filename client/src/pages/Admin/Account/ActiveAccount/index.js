import styles from './activeAccount.module.scss'
import clsx from 'clsx'
import TitleLinkButton from '~/components/Button/TitleButton'
import { Table } from 'react-bootstrap'
import { NavLink } from '~/components'
import nav from '~/assets/jsons/nav.json'

// tên, email, sđt, địa chỉ, tên đn, nút hoạt động: hoạt động, khóa
function ActiveAccount() {
    return (
        <div>
            <NavLink list={nav.accountOfAdmin} />
            <div className={styles.wrap}>
                <Table responsive className={styles.cusTable}>
                    <thead>
                        <tr className={styles.headerOfTable}>
                            <th className={styles.center}>
                                <input type="checkbox" className={styles.checkBox} />
                            </th>
                            <th>
                                <h3 className={styles.title}>Hình ảnh</h3>
                            </th>
                            <th>
                                <h3 className={styles.title}>Họ tên</h3>
                            </th>
                            <th>
                                <h3 className={styles.title}>Email</h3>
                            </th>
                            <th>
                                <h3 className={styles.title}>Số điện thoại</h3>
                            </th>
                            <th>
                                <h3 className={styles.title}>Địa chỉ</h3>
                            </th>
                            <th>
                                <h3 className={styles.title}>Trạng thái</h3>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.center}>
                                <input type="checkbox" className={styles.checkBox} />
                            </td>
                            <td>
                                <img src="https://i.pinimg.com/236x/58/e1/e2/58e1e2dc4aa65e033a67394c9309b6ea.jpg" />
                            </td>
                            <td>
                                <p className={styles.text1}>Trần Thảo Quyên</p>
                            </td>
                            <td>
                                <p className={styles.text1}>cd@gmail.com</p>
                            </td>
                            <td>
                                <p className={styles.text1}>0994234811</p>
                            </td>
                            <td>
                                <p className={styles.text1}>Số 1, phường 2, quận 1, TPHCM</p>
                            </td>
                            <td>
                                <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>
                            </td>
                        </tr>

                        <tr>
                            <td className={styles.center}>
                                <input type="checkbox" className={styles.checkBox} />
                            </td>
                            <td>
                                <img src="https://i.pinimg.com/originals/7d/1d/c1/7d1dc1920d7f7fb9d0ecb9ae90a19a7a.jpg" />
                            </td>
                            <td>
                                <p className={styles.text1}>Trần Thảo Quyên</p>
                            </td>
                            <td>
                                <p className={styles.text1}>cd@gmail.com</p>
                            </td>
                            <td>
                                <p className={styles.text1}>0994234811</p>
                            </td>
                            <td>
                                <p className={styles.text1}>Số 1, phường 2, quận 1, TPHCM</p>
                            </td>
                            <td>
                                <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ActiveAccount
