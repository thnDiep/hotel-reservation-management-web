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
                            <h3 className={styles.title}>Đánh giá</h3>
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
                                <div className={`${styles.point} ${styles.text}`}>{room.SoNguoi} người</div>
                            </td>
                            <td>
                                <span className={styles.text2}>{room.soPhong}/{room.SoPhongTrong}</span>
                            </td>
                            <td>
                                <div className={`${styles.point} d-flex mx-0`}>
                                    <svg width="21" height="16" fill="none" style={{ marginRight: '3px' }}>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.825 8.157c.044-.13.084-.264.136-.394.31-.783.666-1.548 1.118-2.264.3-.475.606-.95.949-1.398.474-.616 1.005-1.19 1.635-1.665.27-.202.55-.393.827-.59.019-.015.034-.033.038-.08-.036.015-.078.025-.111.045-.506.349-1.024.68-1.51 1.052A15.241 15.241 0 006.627 4.98c-.408.47-.78.97-1.144 1.474-.182.249-.31.534-.474.818-1.096-1.015-2.385-1.199-3.844-.77.853-2.19 2.291-3.862 4.356-5.011 3.317-1.843 7.495-1.754 10.764.544 2.904 2.041 4.31 5.497 4.026 8.465-1.162-.748-2.38-.902-3.68-.314.05-.92-.099-1.798-.3-2.67a14.842 14.842 0 00-.834-2.567 16.416 16.416 0 00-1.225-2.345l-.054.028c.103.193.21.383.309.58.402.81.642 1.67.8 2.553.152.86.25 1.724.287 2.595.027.648.003 1.294-.094 1.936-.01.066-.018.133-.027.219-1.223-1.305-2.68-2.203-4.446-2.617a9.031 9.031 0 00-5.19.29l-.033-.03z"
                                            fill="#F36"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10 12.92h-.003c.31-1.315.623-2.627.93-3.943.011-.052-.015-.145-.052-.176a1.039 1.039 0 00-.815-.247c-.082.01-.124.046-.142.135-.044.216-.088.433-.138.646-.285 1.207-.57 2.413-.859 3.62l.006.001c-.31 1.314-.623 2.626-.93 3.942-.011.052.016.145.052.177.238.196.51.285.815.247.082-.01.125-.047.142-.134.044-.215.088-.433.138-.648.282-1.208.567-2.414.857-3.62z"
                                            fill="#F36"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.983 19.203s-8.091-6.063-17.978-.467c0 0-.273.228.122.241 0 0 8.429-4.107 17.739.458-.002 0 .282.034.117-.232z"
                                            fill="#F36"
                                        ></path>
                                    </svg>
                                    <span>{room.DanhGia}</span>
                                </div>
                            </td>
                            <td>
                                <span className={`${styles.text2} ${styles.text2Name}`}>{room.TienNghi}</span>
                            </td>

                            <td className={styles.center}>
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
                                    type={9}
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
