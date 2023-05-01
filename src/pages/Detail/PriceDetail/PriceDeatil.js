import React from 'react'
import classes from './PriceDetail.module.scss'
import {
    faBath,
    faBlender,
    faBoxTissue,
    faBroom,
    faCocktail,
    faCouch,
    faDumbbell,
    faElevator,
    faGlassCheers,
    faHotTub,
    faHotTubPerson,
    faHouse,
    faJugDetergent,
    faKey,
    faLuggageCart,
    faMugHot,
    faParking,
    faPersonRunning,
    faPhone,
    faPumpSoap,
    faShower,
    faSink,
    faSmokingBan,
    faSoap,
    faSpa,
    faStar,
    faSwimmer,
    faTv,
    faUserCheck,
    faUserShield,
    faUserTie,
    faUtensils,
    faWheelchair,
    faWifi,
    faWind,
    faWineBottle,
    faWineGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonPrimary from '~/components/Button/ButtonPrimary'
import { faBell, faBuilding, faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
const PriceDetail = () => {
    return (
        <div className={classes.content}>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className={classes['single-box-content']}>
                        <div className={`${classes['box-info']} ${classes['box-content-top']} `}>
                            <table className={classes['table']}>
                                <tbody>
                                    <tr>
                                        <td className={classes['col-left']}>
                                            <div class={classes['box-info']}>
                                                <span class={classes.boxTitle}>Khách sạn</span>
                                                <span class={classes['box-star']}>
                                                    <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                    <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                    <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                    <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                    <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                </span>
                                            </div>
                                            <div class={classes.hotelTitle}>
                                                <h1>Khách sạn Vias Vũng Tàu</h1>
                                            </div>
                                            <div class={classes.boxAddress}>
                                                <h3>179 Thùy Vân, Phường 8, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu</h3>
                                            </div>
                                        </td>
                                        <td className={`${classes['col-right']} ${classes['box-info']}`}>
                                            <div className={classes['price-room-from']}>Giá phòng từ</div>
                                            <div className={classes['price-old']}>3,960,000 VND</div>
                                            <div className={classes['price-medium']}>
                                                2,376,000 VND<span>/ đêm</span>
                                            </div>
                                            <ButtonPrimary className="btnChoose">LỰA CHỌN PHÒNG</ButtonPrimary>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={`${classes['box-info']} ${classes['box-content-bottom']} `}>
                            <div className={classes['box-title']}>
                                <h2>Tiện nghi khách sạn</h2>
                            </div>
                            <div className="box-fac">
                                <div className={`row ${classes['content-fac']} ${classes['content-fac-first']} `}>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faSwimmer} className={classes['icon-fac']} />
                                        <span> Hồ bơi ngoài trời (quanh năm)</span>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faPersonRunning} className={classes['icon-fac']} />
                                        <span> Trung tâm thể dục</span>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faHotTubPerson} className={classes['icon-fac']} />
                                        <span> Khu vực thư giãn/spa lounge</span>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faUtensils} className={classes['icon-fac']} />
                                        <span> Nhà hàng</span>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faCocktail} className={classes['icon-fac']} />
                                        <span> Quầy bar</span>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faWifi} className={classes['icon-fac']} />
                                        <span> Wifi</span>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faWind} className={classes['icon-fac']} />
                                        <span> Máy lạnh</span>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <FontAwesomeIcon icon={faSmokingBan} className={classes['icon-fac']} />
                                        <span> Phòng không hút thuốc</span>
                                    </div>
                                </div>

                                <div className={classes['box-readmore']}>
                                    <button className={classes['btn-readmore']}>Xem thêm tiện ích</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PriceDetail
