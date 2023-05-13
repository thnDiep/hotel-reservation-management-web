import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import classes from './Popup.module.scss'
import './Popup.scss'
import { clsx } from 'clsx'
const Popup = ({ picHotel }) => {
    return (
        <div className="row">
            <div className="col-8">
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-interval="false"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {picHotel.map((pic, index) => (
                            <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={pic.HinhAnh}>
                                <img src={pic.HinhAnh} alt="" />
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <FontAwesomeIcon icon={faCaretLeft} />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span className="visually-hidden">Next</span>
                    </button>
                    {/* indicator */}

                    <div className={clsx(classes['carousel-indicators-image'], 'carousel-indicators')}>
                        {picHotel.map((pic, index) => (
                            <div
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={`${classes['active']} ${index === 0 ? 'active' : ''} `}
                            >
                                <img src={pic.HinhAnh} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={clsx(classes['box-popup-content'], 'col-4')}>
                <div className={classes.boxContentItem}>
                    <div className={classes.boxItem}>
                        <div className={classes.title}>Điểm đặc trưng</div>
                        <div className={classes.content}>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Diện tích phòng: 32m</span>
                            </div>

                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Hướng biển</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Wifi miễn phí</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Ban công / sân hiên</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Không hút thuốc</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Phòng tắm vòi sen & bồn tắm</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.boxItem}>
                        <div className={classes.title}>Điểm đặc trưng</div>
                        <div className={classes.content}>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Diện tích phòng: 32m</span>
                            </div>

                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Hướng biển</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Wifi miễn phí</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Ban công / sân hiên</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Không hút thuốc</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Phòng tắm vòi sen & bồn tắm</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.boxItem}>
                        <div className={classes.title}>Điểm đặc trưng</div>
                        <div className={classes.content}>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Diện tích phòng: 32m</span>
                            </div>

                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Hướng biển</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Wifi miễn phí</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Ban công / sân hiên</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Không hút thuốc</span>
                            </div>
                            <div>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                    className={classes.icon}
                                    alt=""
                                />
                                <span>Phòng tắm vòi sen & bồn tắm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.boxInfoPrice}>
                    <div className={classes.boxPromo}>
                        <span className={classes.title}>Promo giảm 40% </span>
                    </div>
                    <div className={classes.boxPrice}>
                        <label>Giá phòng chỉ từ</label> 3,234,400 VND <span className={classes.tag}>/đêm</span>
                    </div>
                    <button className={classes['box-popup-content__button']}>Xem phòng còn trống</button>
                </div>
                {/* <button className={classes['box-popup-content__button']}>Xem phòng còn trống</button> */}
            </div>
        </div>
    )
}
export default Popup
