import React from 'react'
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
import ButtonPrimary from '~/components/Button/ButtonPrimary'
import { faBell, faBuilding, faCalendar, faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import RoomsList from '~/components/DetailRoom/RoomList/RoomsList'
import ImageHotel from '~/components/DetailRoom/ImageHotel/ImageHotel'
import PriceDetail from './PriceDetail/PriceDeatil'
import FacilityList from '~/components/DetailRoom/FacilityList/FacilityList'
import { RecentViews, SliderHotels } from '~/components'
import notableDes from '~/assets/jsons/notable.json'

const Detail = () => {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <ImageHotel />
            </div>
            <PriceDetail />
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
            <RoomsList />
            <div className={classes.container}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className={classes['box-fac']}>
                            <div className={classes['box-title']}>
                                <h3>Tiện nghi Khách sạn Vias Vũng Tàu</h3>
                            </div>
                            <div className={classes['box-detail-fac']}>
                                {/* <div className={classes['box-item-fac']}>
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
                                </div> */}
                                <FacilityList />
                                <div className={classes['box-item-fac']}>
                                    <h3>Hỗ trợ người khuyết tật</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWheelchair}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Thuận tiện cho người khuyết tật</span>
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
                                                icon={faWheelchair}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Phù hợp cho xe lăn</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Ăn uống</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faUtensils}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Nhà hàng</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faCocktail}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Quầy bar</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWineBottle}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Nước suối</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWineGlass}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Rượu vang / Sâmpanh</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faMugHot}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Bữa sáng tại phòng</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Dịch vụ lễ tân</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faUserTie}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Nhân viên xách hành lý</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faUserCheck}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Nhận phòng sớm</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faLuggageCart}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Giữ hành lý</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faUserShield}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Bảo vệ 24h</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faKey}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}> Lễ tân 24h</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Kết nối mạng</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faWifi}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>
                                                Wifi miễn phí có ở toàn bộ khách sạn
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Dịch vụ lau dọn</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBroom}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Dọn phòng hàng ngày</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faJugDetergent}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Giặt ủi</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Dịch vụ cho doanh nhân</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBuilding}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Trung tâm dịch vụ doanh nhân</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faGlassCheers}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Tiện nghi tổ chức hội họp / tiệc</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Thư giãn và vui chơi giải trí</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSwimmer}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Hồ bơi</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faDumbbell}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Phòng gym</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSpa}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Khu vực thư giãn / spa lounge</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faHotTub}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Phòng xông hơi</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faTv}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>TV</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Ngoài trời</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSun}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Ban công / sân hiên</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Di chuyển</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faParking}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Bãi đỗ xe</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes['box-item-fac']}>
                                    <h3>Tiện ích bếp</h3>
                                    <div className={classes.items}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faSnowflake}
                                                className={classes['icon-fac-detail']}
                                            ></FontAwesomeIcon>
                                            <span className={classes.detailName}>Tủ lạnh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
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
                                        <div className={classes.hourPolicy}>Từ 14:00</div>
                                    </div>
                                </div>
                                <div className={classes.hour}>
                                    <div className={classes.CheckInAndOut}>
                                        <div>Trả phòng</div>
                                        <div className={classes.hourPolicy}>Trước 12:00</div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.hotelPolicyRegular}>
                                <div className={classes.regular}>
                                    <span className={classes.regularTitle}>Chính sách chung</span>
                                    <div className={classes.regularContent}>
                                        <p>Không cho phép hút thuốc</p>
                                        <p>Không cho phép thú cưng</p>
                                        <p>
                                            Hạn chế người Việt Nam và người nước ngoài check-in cùng 1 phòng, nếu không
                                            xuất trình giấy đăng ký kết hôn
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.regular}>
                                    <span className={classes.regularTitle}>Chính sách trẻ em</span>
                                    <div className={classes.regularContent}>
                                        <p>Trẻ em từ 12 tuổi sẽ được xem như người lớn</p>
                                        <p>
                                            Quý khách hàng vui lòng nhập đúng số lượng khách và tuổi để có giá chính
                                            xác.
                                        </p>
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

            <RecentViews />

            <div className="part">
                <div className="part__content">
                    <h1 className="part__title">Các khách sạn tương tự</h1>

                    <SliderHotels hotels={notableDes} />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Detail
