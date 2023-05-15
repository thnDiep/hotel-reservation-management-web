import styles from './HomeLayout.module.scss'
import Footer from '../../Footer/footer'
import Header from '../Header'

function HomeLayoutAdmin({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}

export default HomeLayoutAdmin
