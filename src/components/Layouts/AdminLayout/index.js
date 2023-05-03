import styles from './AdminLayout.module.scss'
import Header from './Header'

function AdminLayout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default AdminLayout
