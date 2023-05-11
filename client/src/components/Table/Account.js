import { Table } from 'react-bootstrap'
import clsx from 'clsx'
import styles from './Table.module.scss'
import { DropdownOption } from '~/components'

function AccountTable({ header, option, data, filter }) {
    return (
        <div className={styles.tableWrapper}>
            <Table responsive className={clsx(styles.cusTable, styles.account)}>
                <thead>
                    <tr className={styles.headerOfTable}>
                        <th className={styles.center}>
                            <input type="checkbox" className={styles.checkBox} />
                        </th>
                        {header.map((item, index) => (
                            <th key={index}>
                                <h3 className={styles.title}>{item}</h3>
                            </th>
                        ))}
                        {/* <th>
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
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((item, index) => {
                            if (filter === 0) {
                                if (item.PhanQuyen !== 2) {
                                    return (
                                        <tr key={index}>
                                            <td className={styles.center}>
                                                <input type="checkbox" className={styles.checkBox} />
                                            </td>
                                            <td>
                                                <img src={item.HinhAnh} />
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.HoTen}</p>
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.Email}</p>
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.SoDienThoai}</p>
                                            </td>
                                            <td style={{ width: '250px' }}>
                                                <span className={styles.text2}>{item.DiaChi}</span>
                                            </td>
                                            <td>
                                                {item.TrangThai === 1 && (
                                                    <div className={clsx('btn-1', 'active', styles.status)}>
                                                        Hoạt động
                                                    </div>
                                                )}
                                                {item.TrangThai === 0 && (
                                                    <div className={clsx('btn-1', 'block', styles.status)}>Khóa</div>
                                                )}
                                            </td>

                                            <td>
                                                {/* {item.TrangThai === 1 && <DropdownOption list={option1} />} */}
                                                {/* {item.TrangThai === 0 && <DropdownOption list={option2} />} */}
                                                <DropdownOption
                                                    list={option}
                                                    idActive={item.ID}
                                                    disables={[
                                                        false,
                                                        false,
                                                        item.TrangThai === 1 || item.PhanQuyen === 1,
                                                    ]}
                                                    hides={[item.TrangThai === 0, item.TrangThai === 1, false]}
                                                />
                                            </td>
                                        </tr>
                                    )
                                }
                            } else if (filter === 1) {
                                if (item.TrangThai === 1 && item.PhanQuyen !== 2) {
                                    return (
                                        <tr key={index}>
                                            <td className={styles.center}>
                                                <input type="checkbox" className={styles.checkBox} />
                                            </td>
                                            <td>
                                                <img src={item.HinhAnh} />
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.HoTen}</p>
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.Email}</p>
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.SoDienThoai}</p>
                                            </td>
                                            <td style={{ width: '250px' }}>
                                                <span className={styles.text2}>{item.DiaChi}</span>
                                            </td>
                                            <td>
                                                {item.TrangThai === 1 && (
                                                    <div className={clsx('btn-1', 'active', styles.status)}>
                                                        Hoạt động
                                                    </div>
                                                )}
                                                {item.TrangThai === 0 && (
                                                    <div className={clsx('btn-1', 'block', styles.status)}>Khóa</div>
                                                )}
                                            </td>

                                            <td>
                                                {/* {item.TrangThai === 1 && <DropdownOption list={option1} />} */}
                                                {/* {item.TrangThai === 0 && <DropdownOption list={option2} />} */}
                                                <DropdownOption
                                                    list={option}
                                                    idActive={item.ID}
                                                    disables={[
                                                        false,
                                                        false,
                                                        item.TrangThai === 1 || item.PhanQuyen === 1,
                                                    ]}
                                                    hides={[item.TrangThai === 0, item.TrangThai === 1, false]}
                                                />
                                            </td>
                                        </tr>
                                    )
                                }
                            } else if (filter === 2) {
                                if (item.TrangThai === 0 && item.PhanQuyen !== 2) {
                                    return (
                                        <tr key={index}>
                                            <td className={styles.center}>
                                                <input type="checkbox" className={styles.checkBox} />
                                            </td>
                                            <td>
                                                <img src={item.HinhAnh} />
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.HoTen}</p>
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.Email}</p>
                                            </td>
                                            <td>
                                                <p className={styles.text1}>{item.SoDienThoai}</p>
                                            </td>
                                            <td style={{ width: '250px' }}>
                                                <span className={styles.text2}>{item.DiaChi}</span>
                                            </td>
                                            <td>
                                                {item.TrangThai === 1 && (
                                                    <div className={clsx('btn-1', 'active', styles.status)}>
                                                        Hoạt động
                                                    </div>
                                                )}
                                                {item.TrangThai === 0 && (
                                                    <div className={clsx('btn-1', 'block', styles.status)}>Khóa</div>
                                                )}
                                            </td>

                                            <td>
                                                {/* {item.TrangThai === 1 && <DropdownOption list={option1} />} */}
                                                {/* {item.TrangThai === 0 && <DropdownOption list={option2} />} */}
                                                <DropdownOption
                                                    list={option}
                                                    idActive={item.ID}
                                                    disables={[
                                                        false,
                                                        false,
                                                        item.TrangThai === 1 || item.PhanQuyen === 1,
                                                    ]}
                                                    hides={[item.TrangThai === 0, item.TrangThai === 1, false]}
                                                />
                                            </td>
                                        </tr>
                                    )
                                }
                            }
                        })}
                </tbody>
            </Table>
        </div>
    )
}

export default AccountTable
