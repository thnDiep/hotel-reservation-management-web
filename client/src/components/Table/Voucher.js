import { Table } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import clsx from 'clsx'
import moment from 'moment'

import DataContext from '~/contexts/DataContext'
import FooterPaging from '../FooterPaging/FooterPaging'
import { DropdownOption } from '~/components'
import styles from './Table.module.scss'

function VoucherTable({ header, option, data }) {
    const globalData = useContext(DataContext)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()

    useEffect(() => {
        if (data) {
            let total = Math.floor(data.length / 4)
            if (data.length % 4 !== 0) total++
            setTotalPage(total)
        }
    }, [data])

    return (
        <div className={styles.tableWrapper}>
            <Table responsive className={styles.cusTable}>
                <thead>
                    <tr>
                        <th className={styles.center}>
                            <input type="checkbox" className={styles.checkBox} />
                        </th>
                        {header.map((item, index) => (
                            <th key={index}>
                                <h3 className={styles.title}>{item}</h3>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.slice((page - 1) * 4, page * 4).map((voucher, index) => (
                            <tr key={index} className={styles.memberRow}>
                                <td className={styles.center}>
                                    <input type="checkbox" className={styles.checkBox} />
                                </td>
                                <td>
                                    <span>#{voucher.ID}</span>
                                </td>
                                <td>
                                    <span className={clsx(styles.text1, styles.bold)}>{voucher.TieuDe}</span>
                                </td>
                                <td>
                                    <span className={clsx(styles.text1, styles.primary)}>{voucher.MaKhuyenMai}</span>
                                </td>
                                <td>
                                    <span className={styles.text1}>{voucher.PhanTramKM} %</span>
                                </td>
                                <td>
                                    <span className={clsx(styles.text1, styles.bold)}>
                                        {moment(voucher.BatDau).format('DD/MM/yyyy')}
                                    </span>
                                </td>
                                <td>
                                    <span className={clsx(styles.text1, styles.bold)}>
                                        {voucher.KetThuc && moment(voucher.KetThuc).format('DD/MM/yyyy')}
                                        {!voucher.KetThuc && '-'}
                                    </span>
                                </td>
                                <td>
                                    {voucher.SoLuongKM && (
                                        <span className={styles.text1}>
                                            {voucher.SoLuongSD} / {voucher.SoLuongKM}
                                        </span>
                                    )}
                                    {!voucher.SoLuongKM && <span className={styles.text1}>-</span>}
                                </td>
                                <td style={{ width: '200px' }}>
                                    <span className={styles.text2}>
                                        {globalData.data &&
                                            globalData.data.hotels.find((hotel) => hotel.ID === voucher.IDKhachSan).Ten}
                                    </span>
                                </td>
                                <td>
                                    {voucher.TrangThai === 0 && (
                                        <div className={clsx('btn-1', 'pending', styles.status)}>Chưa bắt đầu</div>
                                    )}
                                    {voucher.TrangThai === 1 && (
                                        <div className={clsx('btn-1', 'active', styles.status)}>Đang diễn ra</div>
                                    )}
                                    {voucher.TrangThai === 2 && (
                                        <div className={clsx('btn-1', 'blocked', styles.status)}>Đã kết thúc</div>
                                    )}
                                </td>
                                <td>
                                    <DropdownOption
                                        list={option}
                                        idActive={voucher.ID}
                                        type={0}
                                        disables={[
                                            voucher.TrangThai === 2,
                                            voucher.TrangThai === 2,
                                            voucher.TrangThai !== 2,
                                        ]}
                                        hides={[false, false, false]}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <FooterPaging curPage={page} handleChangePage={setPage} totalPage={totalPage} />
        </div>
    )
}

export default VoucherTable
