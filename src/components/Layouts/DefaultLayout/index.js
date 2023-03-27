import styles from './DefaultLayout.module.scss'
import Header from './Header'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default DefaultLayout
