import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import { DropdownOption } from '~/components'
import styles from './Table.module.scss'
import { useState } from 'react'
import FooterPaging from '../FooterPaging/FooterPaging'
import Star from '../Star/Star'
function HotelCKSTable() {
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

    const hotels = [
        {
            HoTen: 'Đoàn văn bơ Quận 5',
            TenPhong: ["deluxe", "public", "yeu duong"],
            DiaChi: '77 Chuyên dùng 9 Phường Phú Mỹ quận 7 TPhCm',
            TienIch: "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
            Sao: 4,
            TrangThai: 'Active',
        },
        {
            HoTen: 'Hotel A',
            TenPhong: ["deluxe", "public", "yeu duong"],

            DiaChi: '77 Chuyên dùng 9 Phường Phú Mỹ quận 7 TPhCm',
            TienIch: "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
            Sao: 4,
            TrangThai: 'Active',
        },
    ]

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
                            <h3 className={styles.title}>Tên khách sạn</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Loại phòng</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Địa chỉ</h3>
                        </th>

                        <th>
                            <h3 className={styles.title}>Tiện ích</h3>
                        </th>
                        <th>
                            <h3 className={`${styles.star} ${styles.title}`}>Sao</h3>
                        </th>
                        <th>
                            <h3 className={styles.title}>Trạng thái</h3>
                        </th>
                        <th className={styles.last}></th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map((hotel, index) => (
                        <tr key={index} className={styles.memberRow}>
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
                                    <img src="https://travl.dexignlab.com/react/demo/static/media/room4.f452c0a5f4a4a74cef98.jpg" />
                                    <div className={styles.text1}>
                                        <span>{index + 1}</span>
                                        <br />
                                        <span>{hotel.HoTen}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.text}>{hotel.TenPhong[0]}</div>
                                <div className={styles.text}>{hotel.TenPhong[1]}</div>
                            </td>
                            <td>
                                <span className={styles.text2}>{hotel.DiaChi}</span>
                            </td>
                            <td>
                                <span className={styles.text2}>{hotel.TienIch}</span>
                            </td>
                            <td>
                                <div >
                                    <Star number={4} />
                                </div>
                            </td>
                            <td>
                                <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>
                            </td>
                            <td className={styles.last}>
                                <DropdownOption list={['Chỉnh sửa', 'Xóa']} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <FooterPaging />
        </div>
    )
}
export default HotelCKSTable
