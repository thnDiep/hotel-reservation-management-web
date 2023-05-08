import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import { DropdownOption } from '~/components'
import styles from './Table.module.scss'

const data = ['ID', 'Khung giờ', 'Phần trăm', 'Ngày bắt đầu', 'Ngày kết thúc', 'Trạng thái', '']
const option = ['Chỉnh sửa', 'Ngừng khuyến mãi', 'Xóa']

const flashSales = [
    {
        id: 1,
        time: 0,
        percent: 5,
        start: '23/12/2022',
        end: '23/12/2028',
        status: 1,
    },
    {
        id: 2,
        time: 1,
        percent: 14,
        start: '23/12/2023',
        end: '23/12/2028',
        status: 2,
    },
    {
        id: 2,
        time: 2,
        percent: 14,
        start: '23/12/2002',
        end: '23/12/2022',
        number: null,
        status: 3,
    },
]

function FlashSaleTable() {
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
                    {flashSales.map((flashSale, index) => (
                        <tr key={index} className={styles.memberRow}>
                            <td className={styles.center}>
                                <input type="checkbox" className={styles.checkBox} />
                            </td>
                            <td className={styles.center}>
                                <span>#{flashSale.id}</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.primary)}>
                                    {flashSale.time === 0 && '9:00 - 12:00'}
                                    {flashSale.time === 1 && '14:00 - 16:00'}
                                    {flashSale.time === 2 && '19:00 - 23:00'}
                                </span>
                            </td>
                            <td className={styles.center}>
                                <span className={styles.text1}>{flashSale.percent} %</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.bold)}>{flashSale.start}</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.bold)}>{flashSale.end}</span>
                            </td>
                            {/* <td className={styles.center}>
                                {voucher.number && (
                                    <span className={styles.text1}>
                                        {voucher.used} / {voucher.number}
                                    </span>
                                )}
                                {!voucher.number && <span className={styles.text1}>-</span>}
                            </td> */}
                            <td className="d-flex-center">
                                {flashSale.status === 1 && (
                                    <div className={clsx('btn-1', 'active', styles.status)}>Đang diễn ra</div>
                                )}
                                {flashSale.status === 2 && (
                                    <div className={clsx('btn-1', 'pending', styles.status)}>Chưa bắt đầu</div>
                                )}
                                {flashSale.status === 3 && (
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

export default FlashSaleTable
