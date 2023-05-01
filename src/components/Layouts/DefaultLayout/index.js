import styles from './DefaultLayout.module.scss'
import Footer from './Footer/footer'
import Header from './Header'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
