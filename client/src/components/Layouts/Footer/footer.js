import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Footer.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className="text-center text-lg-start bg-light text-muted">




                <div className={classes.detail}>
                    <p>All material herein © 2005–2023 MyTour Company Pte. Ltd. All Rights Reserved.</p>
                    <p>
                        MyTour is part of Booking Holdings Inc., the world leader in online travel & related services.
                    </p>

                    <img
                        className={classes.detailPicture}
                        src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_company_group.svg"
                        alt="vntravel_company_logo"
                    />
                </div>
            </footer>
        </div>
    )
}
export default Footer
