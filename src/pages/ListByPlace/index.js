import classes from "./ListByPlace.module.scss";
import React, { Fragment, useState } from "react";
import PlacesList from "~/components/Place/PlaceList/PlacesList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import PriceSlider from "~/components/Place/Filter/Price/Price";
import Star from "~/components/Place/Filter/Rate/Star/Star"
import Service from "~/components/Place/Filter/Rate/Service/Service"
import UserRate from "~/components/Place/Filter/Rate/UserRate/UserRate";
import Search from "~/components/Search";
const listPlace = [
    {
        imgs: [
            {
                id: 1,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/40454%2F3A1O4S311J_ICPQ_Resort%20Exterior(2).jpg?generation=1593766513879962&alt=media'
            },
            {
                id: 2,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            }],
        id: 1,
        endow: ["Miễn phí thu trẻ em", "Hô bơi vô cực"],
        title: "InterContinental Phú Quốc Long Beach Resort",
        rate: 3,
        scored: 9.2,
        map: 'Dương Tơ, Phú Quốc',
        status: 'Classic Garden View',
        service: "Bữa sáng miễn phí",
        priceOld: 3336610,
        discount: 0.2
    }, {
        imgs: [
            {
                id: 1,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/40454%2F3A1O4S311J_ICPQ_Resort%20Exterior(2).jpg?generation=1593766513879962&alt=media'
            },
            {
                id: 2,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            }, {
                id: 3,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            }],
        id: 2,
        endow: ["Miễn phí thu trẻ em", "Hô bơi vô cực"],
        title: "InterContinental Phú Quốc Long Beach Resort",
        rate: 3,
        scored: 9.2,
        map: 'Dương Tơ, Phú Quốc',
        status: 'Classic Garden View',
        service: "Bữa sáng miễn phí",
        priceOld: 3336610,
        discount: 0.2
    },
    {
        imgs: [
            {
                id: 1,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://www.googleapis.com/download/storage/v1/b/hotelcdn/o/40454%2F3A1O4S311J_ICPQ_Resort%20Exterior(2).jpg?generation=1593766513879962&alt=media'
            },
            {
                id: 2,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            }, {
                id: 3,
                image: 'https://img.tripi.vn/cdn-cgi/image/width=572,height=428/https://storage.googleapis.com/hms_prod/photo/thumb/458955zvd/150592923.jpg',
            }],
        id: 3,
        endow: ["Miễn phí thu trẻ em", "Hô bơi vô cực"],
        title: "InterContinental Phú Quốc Long Beach Resort",
        rate: 3,
        scored: 9.2,
        map: 'Dương Tơ, Phú Quốc',
        status: 'Classic Garden View',
        service: "Bữa sáng miễn phí",
        priceOld: 3336610,
        discount: 0.2
    }
]
function ListByPlace() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return <Fragment>
        <div className={classes.Search}>
            <Search />
        </div>
        <div className={classes.listPlace}>
            <div className={classes.title}>
                <h2>111 Khách sạn tại Phú Quốc, Kiên Giang</h2>
            </div>
            <div className={classes.content}>
                <div className={classes.filter}>
                    <div className={classes.filter__map}>
                        <div className={classes['filter__map--img']}>
                            <img src="https://storage.googleapis.com/tripi-assets/mytour/images/img_map_listing_hotel.png" alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className={classes['filter__map--icon']}>
                            <svg width="40" height="40" fill="none">
                                <path
                                    d="M19.47 38.33l.53.53.53-.53 9.9-9.9a14.75 14.75 0 10-24.058-4.785l.689-.285-.69.285A14.75 14.75 0 009.57 28.43s0 0 0 0l9.9 9.9zm2.828-18.032a3.25 3.25 0 11-4.596-4.596 3.25 3.25 0 014.596 4.596z"
                                    fill="#F36" stroke="#fff" strokeWidth="1.5"></path>
                            </svg>
                            <span style={{ marginTop: '4px' }}>
                                Xem trên bản đồ
                            </span>
                        </div>
                    </div>
                    <div className={classes.filter__choose}>
                        <div className={classes.filter__tiltle}>
                            <h3>Bộ lọc</h3>
                            <a href="/">Xóa tất cả lọc</a>
                        </div>
                        <div className={classes.filter__hr}></div>
                        <div className={classes.filter__price}>
                            <h4>Khoảng giá (1 đêm)</h4>
                            {/* <div className={classes['filter__price--sub']} style={{ fontWeight: 'normal', marginTop: '8px' }}>0 ₫ - 5.000.000 ₫+ </div> */}
                            <PriceSlider />
                        </div>
                        <div className={classes.filter__hr}></div>
                        <div className={classes.filter__star}>
                            <span className={classes['filter__star--title']}>Hạng khách sạn</span>
                            <Star />
                        </div>
                        <div className={classes.filter__hr}></div>
                        <div className={classes.filter__star}>
                            <span className={classes['filter__star--title']}>Dịch vụ đi kèm</span>
                            <Service />
                        </div>
                        <div className={classes.filter__hr}></div>
                        <div className={classes.filter__star}>
                            <span className={classes['filter__star--title']}>Người dùng đánh giá</span>
                            <UserRate />
                        </div>

                    </div>
                </div>
                <div className={classes.room}>
                    <div className={classes.room__nav}>
                        <div className={classes['room__nav--choose']}>
                            <span style={{ fontWeight: '400', marginRight: '4px' }}>Sắp xếp:</span>
                            <div className={`${classes.sort} ${classes.active}`}>Phù hợp nhất</div>
                            <div className={classes.sort}>Rẻ nhất</div>
                            <div className={classes.sort}>Đắt nhất</div>
                            <div className={classes.sort}>Xếp hạng sao</div>
                            <div className={classes.sort}>Đánh giá cao nhất</div>
                        </div>
                        <div className={classes.confirm}>
                            <span className={classes.confirm__icon}>
                                <svg width="16" height="16" fill="none">
                                    <path d="M12.739 6.478L6.652 15l1.217-5.478H3L9.087 1 7.87 6.478h4.87z" stroke="#ED8936" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </span>
                            <span className={classes.comfirm__content}>Xác nhận ngay</span>
                            <span className={classes.confirm__switch}>
                                <input type="checkbox" id="switch" checked={checked} onChange={handleChange} />
                                <label htmlFor="switch">
                                    <FontAwesomeIcon className={classes['confirm__switch--icon']} icon={checked ? faToggleOn : faToggleOff} />
                                </label>
                            </span>
                        </div>
                    </div>
                    <PlacesList items={listPlace} />
                </div>
            </div>
        </div>
    </Fragment>
}

export default ListByPlace
