import clsx from 'clsx'
import styles from './NavBar.module.scss'

function NavBar({ list, noneBorder, active, onActive }) {
    return (
        <div className={styles.nav}>
            {list.map((item, index) => (
                <div
                    key={index}
                    className={clsx(styles.navItem, {
                        [styles.active]: index === active,
                        [styles.noneBorder]: noneBorder,
                    })}
                    onClick={() => onActive(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default NavBar
