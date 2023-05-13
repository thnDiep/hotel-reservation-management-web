import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className={styles.wrap}>
            <div className={styles.notFound}>
                <div className={styles.notFound404}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link to={'/'} className={styles.btn}>
                    Homepage
                </Link>
            </div>
        </div>
    )
}

export default NotFound
