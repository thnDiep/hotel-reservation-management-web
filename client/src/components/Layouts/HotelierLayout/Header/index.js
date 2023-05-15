import Breadcrumb from '~/components/Breadcrumb/Breadcrumb'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
const Header = ({ onClick }) => {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <nav>
            <i onClick={onClick} className={`bx bx-menu ${styles['toggle-sidebar']}`} />
            {/* <span className={styles['form-group']}>Home</span> */}
            <Breadcrumb />
            {/* <ol className={`${styles['form-group']} breadcrumb`}>
                <li className="breadcrumb-item">
                    <span>Quản lý khách sạn</span>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Thêm khách sạn
                </li>
            </ol> */}
            {/* <a href="/" className={styles['nav-link']}>
                <i className={`bx bxs-bell ${styles.icon}`}></i>
                <span className="badge">5</span>
            </a> */}
            {/* <a href="/" className={styles['nav-link']}>
                <i className={`bx bxs-message-square-dots ${styles.icon}`}></i>
                <span className={styles.badge}>8</span>
            </a> */}
            <span className={styles.divider}></span>
            <div className={styles.profile}>
                <Link to="/cks/profile">
                    <img src={user.HinhAnh} alt="" />
                    <ul className={styles['profile-link']}>
                        <li>
                            <i className={`bx bxs-user-circle ${styles.icon}`}></i> Profile
                        </li>
                    </ul>
                </Link>
            </div>
        </nav>
    )
}
export default Header
