import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Footer.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className="text-center text-lg-start bg-light text-muted">
                <div className="d-flex justify-content-center  p-4 border-bottom text-align-center">
                    <div className="me-5 d-none d-lg-block">
                        <a href="" className="me-4">
                            <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
                        </a>
                        <a href="" className="me-4 ">
                            <FontAwesomeIcon icon={faTwitterSquare} className={classes.icon} />
                        </a>
                        <a href="" className="me-4 ">
                            <FontAwesomeIcon icon={faInstagramSquare} className={classes.icon} />
                        </a>
                    </div>
                </div>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>MyTour
                                </h6>
                                <p>
                                    <span>Công ty cổ phần du lịch Việt Nam VNTravel</span>
                                    <div>Tổng đài chăm sóc: 1900 2083</div>
                                    <div>Email: hotro@mytour.vn</div>
                                    <div>
                                        Văn phòng Hà Nội: Tầng 11, Tòa Peakview, 36 Hoàng Cầu, Đống Đa Văn phòng HCM:
                                        Tầng 3, Tòa nhà ACM, 96 Cao Thắng, Quận 3
                                    </div>
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Laravel
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Help
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>
                                    <i className="fas fa-home me-3"></i> New York, NY 10012, US
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

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
