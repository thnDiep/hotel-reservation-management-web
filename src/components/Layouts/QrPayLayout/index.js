import styles from './QrPayLayout.module.scss'
import Header from './Header'
import Footer from './Footer'

function QrPayLayout({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <div className={styles.contentBody}>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default QrPayLayout
