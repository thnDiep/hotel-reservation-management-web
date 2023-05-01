import styles from './HomeLayout.module.scss'
import Header from './Header'

function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default HomeLayout
