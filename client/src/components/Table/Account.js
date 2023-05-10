import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import styles from './Table.module.scss'
import { DropdownOption } from '~/components'

function AccountTable(data) {
    return (
        <div className={styles.tableWrapper}>
            <Table responsive className={clsx(styles.cusTable, styles.account)}>
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
                    {data.data.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.center}>
                                <input type="checkbox" className={styles.checkBox} />
                            </td>
                            <td>
                                <img src="https://i.pinimg.com/236x/58/e1/e2/58e1e2dc4aa65e033a67394c9309b6ea.jpg" />
                            </td>
                            <td>
                                <p className={styles.text1}>{item.HoTen}</p>
                            </td>
                            <td>
                                <p className={styles.text1}>{item.Email}</p>
                            </td>
                            <td>
                                <p className={styles.text1}>{item.SoDienThoai}</p>
                            </td>
                            <td>
                                <p className={styles.text1}>{item.DiaChi}</p>
                            </td>
                            {/* <td>
                                {item.status === 1 && (
                                    <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>
                                )}
                                {item.status === 0 && (
                                    <div className={clsx('btn-1', 'block', styles.status)}>Khóa</div>
                                )}
                            </td>

                            <td>
                                {item.status === 1 && <DropdownOption list={options1} />}
                                {item.status === 0 && <DropdownOption list={options2} />}
                            </td> */}

                            <td>
                                {1 === 1 && <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>}
                                {/* {0 === 0 && <div className={clsx('btn-1', 'block', styles.status)}>Khóa</div>} */}
                            </td>

                            <td>
                                {1 === 1 && <DropdownOption list={data.option1} />}
                                {/* {0 === 0 && <DropdownOption list={data.option2} />} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default AccountTable
