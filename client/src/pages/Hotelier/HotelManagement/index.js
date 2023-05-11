import React from 'react'
import styles from './HotelManagement.module.scss'
import { ButtonPrimary, NavHandle } from '~/components'
import { HotelCKSTable } from '~/components/Table'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HotelManagement = () => {
    const [active, setActive] = useState(0)
    const handleActive = (value) => {
        setActive(value)
    }
    return (
        <div className={styles.content}>
            <div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
                <NavHandle
                    list={['Tất cả', 'chờ duyệt', 'hoạt động', 'Đã khóa']}
                    active={active}
                    onActive={handleActive}
                />

                {/* <NavBar list={['Tất cả', 'chờ duyệt', 'hoạt động', 'Đã khóa']}></NavBar> */}
                <div className="d-flex align-items-center mb-2">
                    <Link to="/cks/addHotel">
                        <ButtonPrimary className="btnLarge1">+ Thêm khách sạn</ButtonPrimary>
                    </Link>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12">
                    {/* <div className="card"> */}
                    {/* <div className="card-body p-0"> */}
                    {/* <div id="room_wrapper" className="dataTables_wrapper no-footer"> */}
                    <HotelCKSTable />
                    {/* <FooterPaging /> */}
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
export default HotelManagement
