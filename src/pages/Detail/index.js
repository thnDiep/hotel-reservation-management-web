import React from 'react'
import Search from '~/components/Search'
import classes from './Detail.module.scss'
import {
    faBath,
    faBlender,
    faBoxTissue,
    faBroom,
    faCocktail,
    faCouch,
    faElevator,
    faHotTub,
    faHotTubPerson,
    faHouse,
    faMugHot,
    faPersonRunning,
    faPhone,
    faPumpSoap,
    faShower,
    faSink,
    faSmokingBan,
    faSoap,
    faStar,
    faSwimmer,
    faTv,
    faUtensils,
    faWifi,
    faWind,
    faWineBottle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonPrimary from '~/components/Button/ButtonPrimary'
import { faBell, faSnowflake } from '@fortawesome/free-regular-svg-icons'
import RoomsList from '~/components/DetailRoom/RoomList/RoomsList'
const Detail = () => {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className={classes['box-slider']}>
                            <div className={`${classes['box-item-1']} `}>
                                <img
                                    src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={classes['box-item-content']}>
                                <div className={classes['box-second']}>
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/d7f96e68f2a7ee8d7fc05a9fabc6440f.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={`${classes['item-box-plus']}`}>
                                    <div className={classes['box-item-3']}>
                                        <img
                                            src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/d876d86e587c9a76cdaa1ceb46d2b483.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={classes['box-item-4']}>
                                        <img
                                            src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/511a3eb5dc56b4a69e42ba2c93fc1d96.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className={classes['single-box-content']}>
                            <div className={`${classes['box-info']} ${classes['box-content-top']} `}>
                                <table className={classes['table']}>
                                    <tbody>
                                        <tr>
                                            <td className={classes['col-left']}>
                                                <div className={classes['box-info']}>
                                                    <span className={classes.boxTitle}>Khách sạn</span>
                                                    <span className={classes['box-star']}>
                                                        <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                        <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                        <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                        <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                        <FontAwesomeIcon icon={faStar} className={classes.icon} />
                                                    </span>
                                                </div>
                                                <div className={classes.hotelTitle}>
                                                    <h1>Khách sạn Vias Vũng Tàu</h1>
                                                </div>
                                                <div className={classes.boxAddress}>
                                                    <h3>
                                                        179 Thùy Vân, Phường 8, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu
                                                    </h3>
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
            <div className={classes.container}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className={classes['box-map']}>
                            <div className={classes['box-content']}>
                                <div className={classes['box-title']}>
                                    <h3>Khám phá địa điểm lân cận</h3>
                                </div>
                                <div className={classes['content-item']}>
                                    <ul>
                                        <li>Công viên nước Vũng Tàu </li>
                                        <li>Cổng Hoa Giấy Checkin Vũng Tàu </li>
                                        <li>Căn Nhà Hoang Bãi Sau </li>
                                        <li>Sat </li>
                                        <li>Monument for War Heroes </li>
                                        <li>DU LỊCH BẢO HÂN VŨNG TÀU </li>
                                        <li>Nhà SEO FI / Selfie House </li>
                                        <li>Chùa Phước Hải Tự </li>
                                        <li>Linh Sơn Cổ Tự </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes['box-content']}>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=10.3524333,107.1015845"
                                    title=""
                                >
                                    <img
                                        src="https://data.vietnambooking.com/business/hotel/svg/common/icon_map.svg"
                                        alt="map google"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Search />
            <hr />
            <RoomsList />
            <hr />
            <div className={classes.container}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className={classes['box-fac']}>
                            <div className={classes['box-title']}>
                                <h3>Tiện nghi Khách sạn Vias Vũng Tàu</h3>
                            </div>
                            <div className={classes['box-detail-fac']}>
                                <div className={classes['box-item-fac']}>
                                    <h3>Tiện nghi chung</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWind}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Máy lạnh</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faElevator}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Thang máy</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faHouse}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Phòng gia đình</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faMugHot}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Cà phê/Trà tại sảnh</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faPumpSoap}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Tiệm làm đẹp</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWifi}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Wifi</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSmokingBan}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Phòng không hút thuốc</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBroom}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Dịch vụ phòng</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Tiện nghi phòng</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faHotTub}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Bồn tắm nước nóng</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faShower}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Phòng tắm vòi hoa sen</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBath}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Bồn tắm</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSink}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Bồn rửa tay</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faTv}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> TV</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faPhone}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Điện thoại</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWind}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Điều hòa</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSnowflake}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Tủ lạnh nhỏ trong phòng</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWineBottle}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Nước đóng chai miễn phí</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBell}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Dịch vụ báo thức</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faCouch}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Ghế sofa</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSoap}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Vật dụng tắm rửa</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBlender}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Máy xay sinh tố</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBoxTissue}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Khăn giấy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Detail
