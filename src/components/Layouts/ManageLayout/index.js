import styles from './ManageLayout.module.scss'
import Header from './Header'

function ManageLayout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default ManageLayout
