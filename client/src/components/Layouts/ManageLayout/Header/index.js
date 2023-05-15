import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.scss'
import { faAngleDown, faHome, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                {/* <FontAwesomeIcon icon={faBars} onClick={onClick} className={styles.menu} /> */}

                <Link to={'/'} className={styles.link}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMgiTOs33abnEsiYTsqGrPaj5JsZJOjS-gQ&usqp=CAU" />
                    <span>MyTravel</span>
                </Link>
            </div>

            <div className={styles.right} onClick={() => setShow(!show)}>
                <img src="https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png" />
                <span>Hello, Admin</span>
                <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />

                {show && (
                    <div className={styles.menu}>
                        <Link to={'/admin/hotel'} className={styles.menuItem}>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Quản lý khách sạn</span>
                        </Link>
                        <Link to={'/admin/account'} className={styles.menuItem}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Quản lý người dùng</span>
                        </Link>
                        <Link to={'/signUp'} className={styles.menuItem}>
                            <FontAwesomeIcon icon={faSignOut} />
                            <span>Đăng xuất</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Header
