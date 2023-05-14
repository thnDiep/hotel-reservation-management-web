import { useState } from 'react'

import styles from './profile.module.scss'
import { NavLink } from '~/components'
import nav from '~/assets/jsons/nav.json'

function Profile({ children }) {
    const [active, setActive] = useState(0)
    // console.log(active)
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <NavLink list={nav.profile} />

                <div className={styles.content}>{children}</div>
            </div>
        </div>
    )
}

export default Profile
