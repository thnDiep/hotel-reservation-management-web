import { Table } from 'react-bootstrap'
import clsx from 'clsx'

import { DropdownOption } from '~/components'
import styles from './Table.module.scss'
import moment from 'moment'

function FlashSaleTable({ header, option, data }) {
    const now = new Date()

    // function status(){
    //     if(now < data.BatDau) {
    //         return 0;
    //     }

    //     if(now >= data.BatDau && now <= data.KetThuc){
    //         if()
    //     }
    // }

    return (
        <div className={styles.tableWrapper}>
            <Table responsive className={styles.cusTable}>
                <thead>
                    <tr>
                        <th className={styles.center}>
                            <input type="checkbox" className={styles.checkBox} />
                        </th>
                        {header.map((item, index) => (
                            <th key={index} className={styles.center}>
                                <h3 className={styles.title}>{item}</h3>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((flashSale, index) => (
                        <tr key={index} className={styles.memberRow}>
                            <td className={styles.center}>
                                <input type="checkbox" className={styles.checkBox} />
                            </td>
                            <td className={styles.center}>
                                <span>#{flashSale.ID}</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.primary)}>{flashSale.TieuDe}</span>
                            </td>
                            <td className={styles.center}>
                                <span className={styles.text1}>
                                    {flashSale.IDKhungGio === 0 && '9:00 - 12:00'}
                                    {flashSale.IDKhungGio === 1 && '14:00 - 16:00'}
                                    {flashSale.IDKhungGio === 2 && '19:00 - 23:00'}
                                </span>
                            </td>
                            <td className={styles.center}>
                                <span className={styles.text1}>{flashSale.PhanTramKM} %</span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.bold)}>
                                    {moment(flashSale.BatDau).format('DD/MM/yyyy')}
                                </span>
                            </td>
                            <td className={styles.center}>
                                <span className={clsx(styles.text1, styles.bold)}>
                                    {moment(flashSale.KetThuc).format('DD/MM/yyyy')}
                                </span>
                            </td>
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
