import { Table } from 'react-bootstrap'
import { useContext, useEffect } from 'react'
import clsx from 'clsx'

import DataContext from '~/contexts/DataContext'
import FooterPaging from '../FooterPaging/FooterPaging'
import { DropdownOption } from '~/components'
import styles from './Table.module.scss'
import moment from 'moment'
import { useState } from 'react'

function FlashSaleTable({ header, option, data }) {
    const globalData = useContext(DataContext)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()

    useEffect(() => {
        if (data) {
            let total = Math.floor(data.length / 5)
            if (data.length % 5 !== 0) total++
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
                        data.slice((page - 1) * 5, page * 5).map((flashSale, index) => (
                            <tr key={index} className={styles.memberRow}>
                                <td className={styles.center}>
                                    <input type="checkbox" className={styles.checkBox} />
                                </td>
                                <td>
                                    <span className={styles.text1}>#{flashSale.ID}</span>
                                </td>
                                <td>
                                    <span className={clsx(styles.text1, styles.primary)}>{flashSale.TieuDe}</span>
                                </td>
                                <td>
                                    <span className={styles.text1}>
                                        {flashSale.GioBatDau}
                                        &nbsp;&nbsp; - &nbsp;&nbsp;
                                        {flashSale.GioKetThuc}
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.text1}>{flashSale.PhanTramKM} %</span>
                                </td>
                                <td>
                                    <span className={clsx(styles.text1, styles.bold)}>
                                        {moment(flashSale.BatDau).format('DD/MM/yyyy')}
                                    </span>
                                </td>
                                <td>
                                    <span className={clsx(styles.text1, styles.bold)}>
                                        {flashSale.KetThuc && moment(flashSale.KetThuc).format('DD/MM/yyyy')}
                                        {!flashSale.KetThuc && '-'}
                                    </span>
                                </td>
                                <td style={{ width: '200px' }}>
                                    <span className={styles.text2}>
                                        {globalData.data &&
                                            globalData.data.hotels.find((hotel) => hotel.ID === flashSale.IDKhachSan)
                                                .Ten}
                                    </span>
                                </td>
                                <td>
                                    {flashSale.TrangThai === 0 && (
                                        <div className={clsx('btn-1', 'pending', styles.status)}>Chưa bắt đầu</div>
                                    )}
                                    {flashSale.TrangThai === 1 && (
                                        <div className={clsx('btn-1', 'active', styles.status)}>Đang diễn ra</div>
                                    )}
                                    {flashSale.TrangThai === 2 && (
                                        <div className={clsx('btn-1', 'blocked', styles.status)}>Đã kết thúc</div>
                                    )}
                                </td>
                                <td>
                                    <DropdownOption
                                        list={option}
                                        idActive={flashSale.ID}
                                        type={1}
                                        disables={[
                                            flashSale.TrangThai === 2,
                                            flashSale.TrangThai === 2,
                                            flashSale.TrangThai !== 2,
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

export default FlashSaleTable
