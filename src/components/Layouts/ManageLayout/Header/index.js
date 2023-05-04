import classes from './Header.module.scss'
import NavBar from '~/components/NavBar'

function Header({ onChoose }) {
    return (
        <div className={classes.header}>
            <div className={classes.header__nav}>
                <a href="/" className={classes.logo}>
                    {/* <h1>SunLight</h1> */}
                    <img
                        src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_logo_mytour_red.svg"
                        className={classes.img}
                        alt="logo_mytour"
                    />
                </a>
                <div className={classes.nav__title}>
                    <NavBar list={['Quản lý khách sạn', 'Quản lý người dùng']} onChoose={onChoose} noneBorder />
                </div>
            </div>
        </div>
    )
}

export default Header
