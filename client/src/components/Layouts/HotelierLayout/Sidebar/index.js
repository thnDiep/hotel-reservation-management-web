import React from 'react'
import './Sidebar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import DataContext from '~/contexts/DataContext'
const chooses = [
    {
        id: 1,
        name: 'Quản lý khách sạn',
        icon: <i className="fas fa-hotel icon"></i>,
        link: '/cks/manageHotel',
    },
    {
        id: 2,
        name: 'Quản lý phòng',
        icon: <i className="fas fa-person-booth icon"></i>,
        link: '/cks/manage-room',
    },
    {
        id: 3,
        name: 'Quản lý đơn đặt phòng',
        icon: <i className="fas fa-receipt icon"></i>,
        link: '/cks/manageOrder',
    },
    {
        id: 4,
        name: 'Quản lý khuyến mãi',
        icon: <i className="fas fa-ticket-alt icon"></i>,
        link: '/cks/voucher',
    },
    {
        id: 5,
        name: 'Thông tin cá nhân',
        icon: <i className="fas fa-user icon"></i>,
        link: '/cks/profile',
    },
]
const Sidebar = ({ checkHide }) => {
    const [select, setSelect] = useState(1)
    const Nav = useNavigate()
    const handleSelect = (value) => {
        localStorage.setItem('activeCKS', value)

        setSelect(value)
    }
    useEffect(() => {
        setSelect(+localStorage.getItem('activeCKS'))
        const [choose] = chooses.filter((item) => item.id === +localStorage.getItem('activeCKS'))

        Nav(choose.link)
    }, [])

    const { LogoutHandler } = useContext(DataContext)
    const handle = () => {
        LogoutHandler()
        Nav('/login')
    }
    return (
        <section id="sidebar" className={`${checkHide && 'hide'}`}>
            <Link to="/" className="brand">
                <img
                    className="logoCks"
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMgiTOs33abnEsiYTsqGrPaj5JsZJOjS-gQ&usqp=CAU"
                />{' '}
                myTravel
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
                                {choose.icon} {choose.name}
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
                    <div onClick={handle} className="btn-upgrade">
                        Đăng xuất
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sidebar
