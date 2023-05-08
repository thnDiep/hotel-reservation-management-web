import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import { DropdownOption } from '~/components'
import styles from './Table.module.scss'

const data = ['ID', 'Mã khuyến mãi', 'Phần trăm', 'Bắt đầu', 'Kết thúc', 'Số lượng', 'Trạng thái', '']
const option = ['Chỉnh sửa', 'Ngừng khuyến mãi', 'Xóa']

const vouchers = [
    {
        id: 1,
        name: 'CHAOHE23',
        percent: 5,
        start: '23/12/2022',
        end: '23/12/2028',
        used: '80',
        number: '100',
        status: 1,
    },
    {
        id: 2,
        name: 'GIAIPHONG',
        percent: 14,
        start: '23/12/2023',
        end: '23/12/2028',
        number: null,
        status: 2,
    },
    {
        id: 2,
        name: 'GIAIPHONG',
        percent: 14,
        start: '23/12/2002',
        end: '23/12/2022',
        number: null,
        status: 3,
    },
]

function VoucherTable() {
    return (
        <div className={styles.tableWrapper}>
            <Table responsive className={styles.cusTable}>
                <thead>
                    <tr>
                        <th className={styles.center}>
                            <input type="checkbox" className={styles.checkBox} />
                        </th>
                        {data.map((item, index) => (
                            <th key={index} className={styles.center}>
                                <h3 className={styles.title}>{item}</h3>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {vouchers.map((voucher, index) => (
                        <tr key={index} className={styles.memberRow}>
                            <td className={styles.center}>
                                <input type="checkbox" className={styles.checkBox} />
                            </td>
                            <td className={styles.center}>
                                <span>#{voucher.id}</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.primary)}>{voucher.name}</span>
                            </td>
                            <td className={styles.center}>
                                <span className={styles.text1}>{voucher.percent} %</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.bold)}>{voucher.start}</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.bold)}>{voucher.end}</span>
                            </td>
                            <td className={styles.center}>
                                {voucher.number && (
                                    <span className={styles.text1}>
                                        {voucher.used} / {voucher.number}
                                    </span>
                                )}
                                {!voucher.number && <span className={styles.text1}>-</span>}
                            </td>
                            <td className="d-flex-center">
                                {voucher.status === 1 && (
                                    <div className={clsx('btn-1', 'active', styles.status)}>Đang diễn ra</div>
                                )}
                                {voucher.status === 2 && (
                                    <div className={clsx('btn-1', 'pending', styles.status)}>Chưa bắt đầu</div>
                                )}
                                {voucher.status === 3 && (
                                    <div className={clsx('btn-1', 'blocked', styles.status)}>Đã kết thúc</div>
                                )}
                            </td>
                            <td>
                                <DropdownOption list={option} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default VoucherTable
