// import userEvent from '@testing-library/user-event'
import { useState, useRef } from 'react'
import styles from './profile.module.scss'
import Account from './accountPage/account.js'
import Reserve from './reservePage/reserve.js'
import Wishlist from './wishlistPage/wishlist.js'
import OrderDetail from './OrderDetail'
import { NavBar } from '~/components'

function Profile() {
    const [showModule, setShowModule] = useState(0)

    const nav = useRef(['Tài khoản', 'Đơn đặt phòng', 'Khách sạn yêu thích'])

    console.log(showModule)

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                {/* <h1>Tài khoản</h1> */}
                {/* <div className={styles.profileMenu}>
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
                </div> */}
                <NavBar list={['Tài khoản', 'Đơn đặt phòng', 'Khách sạn yêu thích']} onChoose={setShowModule} />

                <div className={styles.content}>
                    {showModule === 0 && <Account />}
                    {showModule === 1 && <Reserve onChoose={setShowModule} />}
                    {showModule === 2 && <Wishlist />}
                    {showModule === 3 && <OrderDetail />}
                </div>
            </div>
            {/* <div>
                {buttons.map(function(name, index){
                    return <input type="button" value={name} onClick={handleSelectMenu} key={name}/> 
                })}
            </div> */}
            {/* <div> */}

            {/* </div> */}
        </div>
    )
}

export default Profile
