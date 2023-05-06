import styles from './Header.module.scss'
const Header = ({ onClick }) => {
    return (
        <nav>
            <i onClick={onClick} className={`bx bx-menu ${styles['toggle-sidebar']}`} />
            {/* <span className={styles['form-group']}>Home</span> */}
            <ol class={`${styles['form-group']} breadcrumb`}>
                <li class="breadcrumb-item">
                    <a href="#">Quản lý khách sạn</a>
                </li>

                <li class="breadcrumb-item active" aria-current="page">
                    Thêm khách sạn
                </li>
            </ol>
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
                <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <ul className={styles['profile-link']}>
                    <li>
                        <a href="/">
                            <i className={`bx bxs-user-circle ${styles.icon}`}></i> Profile
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bxs-cog"></i> Settings
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bxs-log-out-circle"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header
