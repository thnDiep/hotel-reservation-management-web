import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import styles from './Table.module.scss'
import { DropdownOption } from '~/components'

function ActiveAccountTable() {
    const options1 = ['Vô hiệu hóa', 'Xóa']
    const options2 = ['Bỏ vô hiệu hóa', 'Xóa']
    const accounts = [
        {
            image: 'https://i.pinimg.com/236x/58/e1/e2/58e1e2dc4aa65e033a67394c9309b6ea.jpg',
            name: 'Trần Thảo Quyên',
            email: 'cd@gmail.com',
            numberPhone: '0934892424',
            address: 'số 1 phường 2, Quận 1, TPHCM',
            status: 1,
        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKA-gQ6idbXDKLku2gtmk90uBTqzB-TvBzrNckQtRBkrBXyAUzRUu0ytD-zzGQn609Wcw&usqp=CAU',
            name: 'Trần Văn B',
            email: 'toan124@gmail.com',
            numberPhone: '0935492465',
            address: 'Đường Nguyễn Trãi phường 2, Quận 5, TPHCM',
            status: 1,
        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Oqfy64S9SQlMvuPTkeXsvDqQU7aQp62xGw&usqp=CAU',
            name: 'Nguyễn Thị C',
            email: 'cd9999@gmail.com',
            numberPhone: '0983423231',
            address: 'Nguyễn Văn Cừ, Quận 5, TPHCM',
            status: 0,
        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbXbFJYtbkZg2fMjzkf16upD6DW9b8UAkqA&usqp=CAU',
            name: 'Huỳnh Công Chánh',
            email: 'abc11@gmail.com',
            numberPhone: '034989822',
            address: 'số 1 phường 2, Quận 1, TPHCM',
            status: 0,
        },
    ]
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
                    {accounts.map(
                        (account, index) =>
                            account.status === 1 && (
                                <tr key={index}>
                                    <td className={styles.center}>
                                        <input type="checkbox" className={styles.checkBox} />
                                    </td>
                                    <td>
                                        <img src={account.image} />
                                    </td>
                                    <td>
                                        <p className={styles.text1}>{account.name}</p>
                                    </td>
                                    <td>
                                        <p className={styles.text1}>{account.email}</p>
                                    </td>
                                    <td>
                                        <p className={styles.text1}>{account.numberPhone}</p>
                                    </td>
                                    <td>
                                        <p className={styles.text1}>{account.address}</p>
                                    </td>
                                    <td>
                                        {account.status === 1 && (
                                            <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>
                                        )}
                                        {account.status === 0 && (
                                            <div className={clsx('btn-1', 'block', styles.status)}>Khóa</div>
                                        )}
                                    </td>

                                    <td>
                                        {account.status === 1 && <DropdownOption list={options1} />}
                                        {account.status === 0 && <DropdownOption list={options2} />}
                                    </td>
                                </tr>
                            ),
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default ActiveAccountTable
