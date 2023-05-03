import classes from './Header.module.scss'
import TitleButton from '~/components/Button/TitleButton'
import ButtonPrimary from '~/components/Button/ButtonPrimary'
function Header() {
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
                    <ButtonPrimary className="signIn">Sign in</ButtonPrimary>
                    <ButtonPrimary className="signUp">Sign up</ButtonPrimary>
                </div>
            </div>
            {/* <div className={classes.header__choose}>
            <TitleButton name="Khách sạn" className="btnChoose" active="active"></TitleButton>
            <TitleButton name="Biệt thự, Homestay" className="btnChoose"></TitleButton>
            <TitleButton name="Top Thương hiệu" className="btnChoose"></TitleButton>
            <TitleButton name="Nhà hàng" className="btnChoose"></TitleButton>
            <TitleButton name="Sự kiện" className="btnChoose"></TitleButton>
        </div> */}
        </div>
    )
}

export default Header
