import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Sidebar = ({ checkHide }) => {
    const [select, setSelect] = useState(1)
    const handleSelect = (value) => {
        setSelect(value)
    }
    const chooses = [
        {
            id: 1,
            name: 'Quản lý khách sạn',
            link: '/cks/manageHotel',
        },
        {
            id: 2,
            name: 'Quản lý phòng',
            link: '/cks/manage-room',
        },
        {
            id: 3,
            name: 'Quản lý đơn đặt phòng',
            link: '/cks/manageOrder',
        },
        {
            id: 4,
            name: 'Quản lý khuyến mãi',
            link: '/cks/voucher',
        },
    ]
    return (
        <section id="sidebar" className={`${checkHide && 'hide'}`}>
            <Link to="/" className="brand">
                <i className="bx bxs-smile icon"></i> AdminSite
            </Link>
            <ul className="side-menu">

                {chooses.map((choose) => {
                    return (
                        <li key={choose.id}>
                            <Link
                                onClick={() => handleSelect(choose.id)}
                                to={choose.link}
                                className={`${select === choose.id && 'active'}`}
                            >
                                <i className="bx bxs-inbox icon"></i> {choose.name}
                            </Link>
                        </li>
                    )
                })}
                {/* <li>
                    <Link onClick={() => handleSelect(0)} to="/cks/manageHotel" className="active">
                        <i className="bx bxs-inbox icon"></i> Quản lý khách sạn
                    </Link>
                </li>
                <li>
                    <Link onClick={() => handleSelect(1)} to="/cks/manage-room">
                        <i className="bx bxs-chart icon"></i> Quản lý phòng
                    </Link>
                </li>
                <li>
                    <Link onClick={() => handleSelect(2)} to="/cks/manageOrder">
                        <i className="bx bxs-widget icon"></i> Quản lý đơn đặt phòng
                    </Link>
                </li> */}
            </ul>
            <div className="ads">
                <div className="wrapper">
                    <Link to="/" className="btn-upgrade">
                        Đăng xuất
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Sidebar
