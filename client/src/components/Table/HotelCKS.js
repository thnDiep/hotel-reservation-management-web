import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import { DropdownOption } from '~/components'
import styles from './Table.module.scss'
import { useState, useContext } from 'react'
import FooterPaging from '../FooterPaging/FooterPaging'
import DataContext from '~/contexts/DataContext'

import Star from '../Star/Star'
function HotelCKSTable({ option, hotels }) {
    const [allChecked, setAllChecked] = useState(false)
    const [checkboxState, setCheckboxState] = useState({})
    // const hotel1 = useContext(DataContext)
    // const hotels = useContext(DataContext)

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

    // const hotels = [
    //     {
    //         HoTen: 'Đoàn văn bơ Quận 5',
    //         TenPhong: ['deluxe', 'public', 'yeu duong'],
    //         DiaChi: '77 Chuyên dùng 9 Phường Phú Mỹ quận 7 TPhCm',
    //         TienIch: 'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi',
    //         Sao: 4,
    //         TrangThai: 'Active',
    //     },
    //     {
    //         HoTen: 'Hotel A',
    //         TenPhong: ['deluxe', 'public', 'yeu duong'],

    //         DiaChi: '77 Chuyên dùng 9 Phường Phú Mỹ quận 7 TPhCm',
    //         TienIch: 'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi',
    //         Sao: 4,
    //         TrangThai: 'Active',
    //     },
    // ]
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
                    {hotels &&
                        hotels.hotels.map((hotel, index) => (
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
                                    <div className="d-flex">
                                        <img className={styles.imgLarge} src={hotel.HinhAnh[0].HinhAnh} alt="khoong " />
                                        <div className={`${styles.text1} ${styles.checkImg}`}>
                                            <span>{index + 1}</span>
                                            <br />
                                            <span className={styles.text1Name}>{hotel.Ten}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.text}>d</div>
                                    <div className={styles.text}>s</div>
                                </td>
                                <td>
                                    <span className={`${styles.text2} ${styles.text2Name}`}>{hotel.DiaChi}</span>
                                </td>
                                <td>
                                    <span className={`${styles.text2} ${styles.text2Name}`}>{hotel.tienNghi}</span>
                                </td>
                                <td>
                                    <div>
                                        <Star number={hotel.soSao} />
                                    </div>
                                </td>
                                <td>
                                    <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>
                                </td>
                                <td className={styles.last}>
                                    <DropdownOption type={9} idActive={hotel.ID} list={option} hides={true} />
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
