import styles from './HomeLayout.module.scss'
import Header from './Header'
import Footer from './Footer/footer'

function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}

export default HomeLayout
