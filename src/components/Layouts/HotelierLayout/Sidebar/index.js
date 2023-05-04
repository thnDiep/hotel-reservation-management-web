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
                    <a href="/" className="active">
                        <i className="bx bxs-dashboard icon"></i> Dashboard
                    </a>
                </li>
                <li className="divider" data-text="main">
                    Main
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-inbox icon"></i> Elements
                        <i className="bx bx-chevron-right icon-right"></i>
                    </a>
                    <ul className="side-dropdown">
                        <li>
                            <a href="/">Alert</a>
                        </li>
                        <li>
                            <a href="/">Badges</a>
                        </li>
                        <li>
                            <a href="/">Breadcrumbs</a>
                        </li>
                        <li>
                            <a href="/">Button</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-chart icon"></i> Charts
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-widget icon"></i> Widgets
                    </a>
                </li>
                <li className="divider" data-text="table and forms">
                    Table and forms
                </li>
                <li>
                    <a href="/">
                        <i className="bx bx-table icon"></i> Tables
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-notepad icon"></i> Forms
                        <i className="bx bx-chevron-right icon-right"></i>
                    </a>
                    <ul className="side-dropdown">
                        <li>
                            <a href="/">Basic</a>
                        </li>
                        <li>
                            <a href="/">Select</a>
                        </li>
                        <li>
                            <a href="/">Checkbox</a>
                        </li>
                        <li>
                            <a href="/">Radio</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="ads">
                <div className="wrapper">
                    <a href="/" className="btn-upgrade">
                        Upgrade
                    </a>
                    <p>
                        Become a <span>PRO</span> member and enjoy <span>All Features</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Sidebar
