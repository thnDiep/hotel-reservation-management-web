import clsx from 'clsx'
import { useState } from 'react'

import styles from './NavBar.module.scss'

function NavBar({ list }) {
    const [active, setActive] = useState(0)
    return (
        <div className={styles.nav}>
            {list.map((item, index) => (
                <div
                    className={clsx(styles.navItem, { [styles.active]: index === active })}
                    onClick={() => setActive(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default NavBar
