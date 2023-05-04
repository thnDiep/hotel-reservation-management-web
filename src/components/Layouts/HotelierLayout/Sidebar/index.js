import React from 'react'
import './Sidebar.scss'
const Sidebar = ({ checkHide }) => {
    return (
        <section id="sidebar" className={`${checkHide && 'hide'}`}>
            <a href="/" className="brand">
                <i className="bx bxs-smile icon"></i> AdminSite
            </a>
            <ul className="side-menu">
                <li>
                    <a href="/">
                        <i className="bx bxs-dashboard icon"></i> Dashboard
                    </a>
                </li>
                <li className="divider" data-text="main">
                    Main
                </li>
                <li>
                    <a href="/" className="active">
                        <i className="bx bxs-inbox icon"></i> Quản lý khách sạn
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-chart icon"></i> Quản lý phòng
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-widget icon"></i> Quản lý đơn đặt phòng
                    </a>
                </li>
            </ul>
            <div className="ads mt-5">
                <div className="wrapper">
                    <a href="/" className="btn-upgrade">
                        Đăng xuất
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Sidebar
