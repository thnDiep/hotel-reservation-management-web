import clsx from 'clsx'
import { useState } from 'react'

import styles from './NavBar.module.scss'

function NavBar({ list, onChoose }) {
    const [active, setActive] = useState(0)

    function handleChoose(index) {
        setActive(index)
        onChoose(index)
    }
    return (
        <div className={styles.nav}>
            {list.map((item, index) => (
                <div
                    key={index}
                    className={clsx(styles.navItem, { [styles.active]: index === active })}
                    onClick={() => handleChoose(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default NavBar
