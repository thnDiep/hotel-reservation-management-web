import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <span>
                    <img src="https://pay.vnpay.vn/images/img/flags/en.svg" alt="" />
                </span>
                <span className={styles.title}>En</span>
            </div>
        </header>
    )
}

export default Header
