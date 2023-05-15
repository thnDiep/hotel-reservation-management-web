import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

function NotFound() {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className={styles.wrap}>
            <div className={styles.notFound}>
                <div className={styles.notFound404}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                {!user && (
                    <Link to={'/'} className={styles.btn}>
                        Homepage
                    </Link>
                )}
                {user && user.PhanQuyen === 0 && (
                    <Link to={'/'} className={styles.btn}>
                        Homepage
                    </Link>
                )}
                {user && user.PhanQuyen === 1 && (
                    <Link to={'/cks'} className={styles.btn}>
                        Homepage
                    </Link>
                )}
                {user && user.PhanQuyen === 2 && (
                    <Link to={'/admin'} className={styles.btn}>
                        Homepage
                    </Link>
                )}
            </div>
        </div>
    )
}

export default NotFound
