import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import { DropdownOption } from '~/components'
import styles from './Table.module.scss'
import { useEffect, useState } from 'react'
import FooterPaging from '../FooterPaging/FooterPaging'
import Star from '../Star/Star'
function RoomCKS({ rooms, option }) {
    const [allChecked, setAllChecked] = useState(false)
    const [checkboxState, setCheckboxState] = useState({})

    const handleAllChecked = (event) => {
        const updatedState = {}
        Object.keys(checkboxState).forEach((key) => {
            updatedState[key] = event.target.checked
        })
        setCheckboxState(updatedState)
        setAllChecked(event.target.checked)
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target
        setCheckboxState((prevState) => ({
            ...prevState,
            [name]: checked,
        }))
        setAllChecked(Object.keys(checkboxState).every((key) => checkboxState[key]))
    }

    const numberFormat = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    })

    // const rooms = [
    //     {
    //         TenLoaiPhong: 'Đoàn văn bơ Quận 5',
    //         SoNguoi: 2,
    //         SoPhongTrong: 3,
    //         TienIch: 'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi',
    //         DanhGia: 4,
    //         Gia: 100,
    //         DienTich: 10,
    //         TrangThai: 'Active',
    //     },
    //     {
    //         TenLoaiPhong: 'Đoàn văn bơ Quận 5',
    //         SoNguoi: 2,
    //         SoPhongTrong: 3,
    //         TienIch: 'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi',
    //         DanhGia: 4,
    //         Gia: 100,
    //         DienTich: 10,
    //         TrangThai: 'Active',
    //     },
    // ]
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()
    useEffect(() => {
        if (rooms) {
            let total = Math.floor(rooms.length / 4)
            if (rooms.length % 4 !== 0) total++
            setTotalPage(total)
        }
    }, [rooms])
    return (
        <div className={styles.tableWrapper}>
            <Table responsive className={styles.cusTable}>
                <thead>
                    <tr>
                        <th className={styles.center}>
                            <input
                                type="checkbox"
                                className={styles.checkBox}
                                checked={allChecked}
                                onChange={handleAllChecked}
                            />
                        </th>
                        <th className={styles.nameTitle}>
                            <h3 className={styles.title}>Tên phòng</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Số người</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Số phòng trống</h3>
                        </th>

                        <th>
                            <h3 className={styles.title}>Tiện ích</h3>
                        </th>
                        <th>
                            <h3 className={`${styles.title}`}>Giá phòng</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Diện tích</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Trạng thái</h3>
                        </th>
                        <th className={styles.last}></th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.slice((page - 1) * 4, page * 4).map((room, index) => (
                        <tr key={index} className={`${styles.memberRow} ${styles.tablesFlex}`}>
                            <td className={styles.center}>
                                <input
                                    type="checkbox"
                                    className={styles.checkBox}
                                    checked={checkboxState[index]}
                                    onChange={handleCheckboxChange}
                                    name={index}
                                />
                            </td>
                            <td className={styles.nameTitle}>
                                <div className="d-flex-js">
                                    <img className={styles.imgLarge} src={room.HinhAnh[0].HinhAnh} alt="" />
                                    <div className={`${styles.text1} ${styles.checkImg}`}>
                                        <span>#{index + 1}</span>
                                        <br />
                                        <span>{room.TenLoaiPhong}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.point} ${styles.text8}`}>{room.SoNguoi} người</div>
                            </td>
                            <td>
                                <span className={styles.text2}>
                                    {room.soPhong}/{room.SoPhongTrong}
                                </span>
                            </td>

                            <td>
                                <span className={`${styles.text2} ${styles.text2Name}`}>{room.TienNghi}</span>
                            </td>

                            <td>
                                <h3 className={clsx(styles.text1, styles.primary)}>
                                    {numberFormat.format(room.Gia).replace('₫', '')} <sup>VND</sup>
                                </h3>
                            </td>
                            <td>
                                <span className={styles.text}>
                                    {room.DienTich} m <sup>2</sup>
                                </span>
                            </td>
                            <td>
                                {room.TrangThai === 0 && (
                                    <div className={clsx('btn-1', 'pending', styles.status)}>Hết phòng</div>
                                )}
                                {room.TrangThai === 1 && (
                                    <div className={clsx('btn-1', 'active', styles.status)}>Còn phòng</div>
                                )}
                                {room.TrangThai === 2 && (
                                    <div className={clsx('btn-1', 'stoped', styles.status)}>Tạm ngưng</div>
                                )}
                            </td>
                            <td className={styles.last}>
                                <DropdownOption
                                    type={room.IDKhachSan}
                                    idActive={room.ID}
                                    list={option}
                                    hides={[false, false, room.TrangThai === 2, room.TrangThai !== 2]}
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
export default RoomCKS
