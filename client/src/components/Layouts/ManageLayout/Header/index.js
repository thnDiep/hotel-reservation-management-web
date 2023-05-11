import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import { NavLink } from '~/components'
import nav from '~/assets/jsons/Navigation/admin.json'
import { ButtonPrimary } from '~/components/Button'

function Header({ onChoose }) {
    return (
        <div className={classes.header}>
            <div className={classes.header__nav}>
                <Link to="/" className={classes.logo}>
                    {/* <h1>SunLight</h1> */}
                    <img
                        src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_logo_mytour_red.svg"
                        className={classes.img}
                        alt="logo_mytour"
                    />
                </Link>
                <div className="d-flex">
                    <NavLink list={nav.nav} noneBorder />

                    <Link to="/" className="btn-1 nohover">
                        Đăng xuất
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
