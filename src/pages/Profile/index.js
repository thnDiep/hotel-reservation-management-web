// import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import styles from './profile.module.scss'
import Account from './accountPage/account.js'
import Reserve from './reservePage/reserve.js'
import Wishlist from './wishlistPage/wishlist.js'

function Profile() {
    const [showModule, setShowModule] = useState(1)

    return (
        <div>
            <div className={styles.wrap}>
                <h1>Tài khoản</h1>
                <div className={styles.profileMenu}>
                    <label htmlFor="tk" className={styles.buttonMenu}>
                        Tài khoản
                        <input type="radio" name="menu" id="tk" onClick={() => setShowModule(1)} />
                    </label>
                    <label htmlFor="dp" className={styles.buttonMenu}>
                        Đơn phòng
                        <input type="radio" name="menu" id="dp" onClick={() => setShowModule(2)} />
                    </label>
                    <label htmlFor="ksyt" className={styles.buttonMenu}>
                        Khách sạn yêu thích
                        <input type="radio" name="menu" id="ksyt" onClick={() => setShowModule(3)} />
                    </label>
                </div>
            </div>

            {/* <div>
                {buttons.map(function(name, index){
                    return <input type="button" value={name} onClick={handleSelectMenu} key={name}/> 
                })}
            </div> */}
            <div>
                {showModule === 1 && <Account />}
                {showModule === 2 && <Reserve />}
                {showModule === 3 && <Wishlist />}
            </div>
        </div>
    )
}

export default Profile
