import React, { useState, useEffect } from 'react'
import Search from '~/components/Search'
import classes from './Detail.module.scss'
import {
    faBath,
    faBed,
    faBlender,
    faBoxTissue,
    faBroom,
    faCocktail,
    faCouch,
    faDumbbell,
    faElevator,
    faGlassCheers,
    faHotTub,
    faHouse,
    faJugDetergent,
    faKey,
    faLuggageCart,
    faMapMarkedAlt,
    faMugHot,
    faParking,
    faPhone,
    faPlaneDeparture,
    faPumpSoap,
    faRulerCombined,
    faShower,
    faSink,
    faSmokingBan,
    faSoap,
    faSpa,
    faSwimmer,
    faTv,
    faUserCheck,
    faUserShield,
    faUserTie,
    faUtensilSpoon,
    faUtensils,
    faWheelchair,
    faWifi,
    faWind,
    faWineBottle,
    faWineGlass,
    faWineGlassAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ButtonPrimary from '~/components/Button/ButtonPrimary'
import { faBell, faBuilding, faCalendar, faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import RoomsList from '~/components/DetailRoom/RoomList/RoomsList'
// import ImageHotel from '~/components/DetailRoom/ButtonPopUpDetail/ImageHotel'
import PriceDetail from './PriceDetail/PriceDeatil'
import FacilityList from '~/components/DetailRoom/FacilityList/FacilityList'
import { RecentViews, SliderHotels } from '~/components'
import notableDes from '~/assets/jsons/notable.json'
import PictureDetail from './PictureDetail/PictureDetail'
import Rating from './Rating/Rating'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
const Detail = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        Axios.get('http://localhost:8800/hotel/detail', { params: { idKs: 8 } })
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <React.Fragment>
            <div className={classes.spacing}> </div>
            <Search />
            {/* <div className={classes.container}>
                <ImageHotel />
            </div> */}
            {data && (
                <>
                    <div className={classes.subContainer}>
                        <PictureDetail picHotel={data.picHotel} />
                    </div>
                    <PriceDetail infor={data.infor} />

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
                    <hr className={classes.spacing2} />
                    <div id="roomListContainer">
                        <RoomsList />
                    </div>

                    <div className={classes.subContainer}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div>
                                    <div className={classes['box-title']}>
                                        <h3>Chính sách Khách sạn </h3>
                                    </div>
                                    <div className={classes.hotelPolicyHour}>
                                        <div className={classes.hour}>
                                            <div className={classes.CheckInAndOut}>
                                                <div>Nhận phòng</div>
                                                <div className={classes.hourPolicy}>
                                                    Từ {data.infor.GioNhanPhong}:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.hour}>
                                            <div className={classes.CheckInAndOut}>
                                                <div>Trả phòng</div>
                                                <div className={classes.hourPolicy}>
                                                    Trước {data.infor.GioTraPhong}:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.hotelPolicyRegular}>
                                        <div className={classes.regular}>
                                            {/* <span className={classes.regularTitle}>Chính sách chung</span> */}
                                            <div className={classes.regularContent}>
                                                <div dangerouslySetInnerHTML={{ __html: data.infor.ChinhSach }} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mt-1">
                                <div>
                                    <div className={classes['box-title']}>
                                        <h3>Thông tin hữu ích </h3>
                                    </div>
                                    <div className={classes.usefulInformation}>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faBuilding} />
                                                </span>
                                                <span className={classes.text}>Khoảng cách tới trung tâm</span>
                                            </div>
                                            <span>--:--km</span>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                                </span>
                                                <span className={classes.text}>Khoảng cách tới sân bay</span>
                                            </div>
                                            <span>--:--km</span>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                                </span>
                                                <span className={classes.text}>Khoảng cách tới trung tâm thị trấn</span>
                                            </div>
                                            <span>--:--km</span>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faCalendar} />
                                                </span>
                                                <span className={classes.text}>Năm khách sạn xây dựng</span>
                                            </div>
                                            <span>2018</span>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faWineGlassAlt} />
                                                </span>
                                                <span className={classes.text}>Số quán bar</span>
                                            </div>
                                            <span>2</span>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faBed} />
                                                </span>
                                                <span className={classes.text}>Số phòng khách sạn</span>
                                            </div>
                                            <span>80</span>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faUtensils} />
                                                </span>
                                                <span className={classes.text}>Số nhà hàng</span>
                                            </div>
                                            <span>2</span>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.partOfItem}>
                                                <span>
                                                    <FontAwesomeIcon icon={faRulerCombined} />
                                                </span>
                                                <span className={classes.text}>Số tầng khách sạn</span>
                                            </div>
                                            <span>15</span>
                                        </div>
                                    </div>

                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.subContainer}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className={classes['box-title']}>
                                    <h3>Giới thiệu về khách sạn</h3>
                                </div>
                                <p>
                                    <div dangerouslySetInnerHTML={{ __html: data.infor.GioiThieu }} />
                                </p>
                            </div>
                        </div>
                    </div>

                    <RecentViews />
                    <div className="part">
                        <div className="part__content">
                            <h1 className="part__title">Các khách sạn tương tự</h1>

                            <SliderHotels hotels={notableDes} />
                        </div>
                    </div>

                    <Rating feedback={data.feedbackHotel} infor={data.infor} />
                </>
            )}
        </React.Fragment>
    )
}
export default Detail
