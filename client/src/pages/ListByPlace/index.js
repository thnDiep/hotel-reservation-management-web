import classes from './ListByPlace.module.scss'
import React, { Fragment, useEffect, useState } from 'react'
import PlacesList from '~/components/Place/PlaceList/PlacesList'
import PriceSlider from '~/components/Place/Filter/Price/Price'
import Star from '~/components/Place/Filter/Rate/Star/Star'
import Service from '~/components/Place/Filter/Rate/Service/Service'
import UserRate from '~/components/Place/Filter/Rate/UserRate/UserRate'
import Search from '~/components/Search'
import { useLocation } from 'react-router-dom'

const sort = ['Phù hợp nhất', 'Rẻ nhất', 'Đắt nhất', 'Xếp hạng sao', 'Đánh giá cao nhất']
function ListByPlace() {
    const [indexSort, setIndexSort] = useState(0)
    // Khách sạn lấy được từ thanh tìm kiếm
    const { state } = useLocation()
    const [hotels, setHotels] = useState()
    useEffect(() => {
        if (state) {
            setHotels(state.hotels)
            console.log(state.hotels)
            console.log(state)
        }
    }, [state])

    const handleChangeIndex = (index) => {
        let sortedHotels = [...hotels] // Tạo một bản sao của mảng hotels để tránh thay đổi giá trị gốc
        switch (index) {
            case 1:
                sortedHotels.sort((a, b) => a.Gia - b.Gia)
                break
            case 2:
                sortedHotels.sort((a, b) => b.Gia - a.Gia)
                break
            case 3:
                sortedHotels.sort((a, b) => b.soSao - a.soSao)
                break
            case 4:
                sortedHotels.sort((a, b) => +b.DanhGia - +a.DanhGia)
                break
            case 0:
                sortedHotels = state.hotels
                break
            default:
                break
        }
        setIndexSort(index)
        setHotels(sortedHotels) // Cập nhật state hotels với mảng đã sắp xếp
    }
    const [filterSao, setFilterSao] = useState([])
    const [filterDanhGia, setFilterDanhGia] = useState([])
    const [filterGia, setFilterGia] = useState([0, 50000000])

    useEffect(() => {
        if (hotels) {
            const filteredHotels = hotels.map((hotel) => {
                let priceInRange = hotel.Gia >= filterGia[0] && hotel.Gia <= filterGia[1]
                let ratingMatch = true
                let reviewScoreMatch = true
                if (filterSao.length !== 0) ratingMatch = filterSao.includes(hotel.soSao)
                if (filterDanhGia.length !== 0) {
                    reviewScoreMatch = filterDanhGia.some((point) => point <= +hotel.DanhGia)
                }
                console.log('ratingMatch')
                console.log(ratingMatch)
                const checked = priceInRange && ratingMatch && reviewScoreMatch

                return { ...hotel, checked }
            })
            setHotels(filteredHotels)
        }
    }, [filterSao, filterDanhGia, filterGia])
    const handleFilterGia = (min, max) => {
        setFilterGia([min, max])
    }
    const handleFilterSao = (value, index) => {
        if (index === 1) {
            setFilterSao([...filterSao, value])
        } else {
            const removedArr = filterSao.filter((item) => item !== value)
            setFilterSao(removedArr)
        }
    }
    const handleFilterDanhGia = (value, index) => {
        console.log(value)
        if (index === 1) {
            setFilterDanhGia([...filterDanhGia, +value])
        } else {
            const removedArr = filterDanhGia.filter((item) => item !== +value)
            setFilterDanhGia(removedArr)
        }
    }

    return (
        <Fragment>
            <div className={classes.Search}>
                {state && <Search {...state.searchBar} />}
                {!state && <Search />}
            </div>
            <div className={classes.listPlace}>
                <div className={classes.title}>
                    <h2>111 Khách sạn tại Phú Quốc, Kiên Giang</h2>
                </div>
                <div className={classes.content}>
                    <div className={classes.filter}>
                        <div className={classes.filter__map}>
                            <div className={classes['filter__map--img']}>
                                <img
                                    src="https://storage.googleapis.com/tripi-assets/mytour/images/img_map_listing_hotel.png"
                                    alt=""
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className={classes['filter__map--icon']}>
                                <svg width="40" height="40" fill="none">
                                    <path
                                        d="M19.47 38.33l.53.53.53-.53 9.9-9.9a14.75 14.75 0 10-24.058-4.785l.689-.285-.69.285A14.75 14.75 0 009.57 28.43s0 0 0 0l9.9 9.9zm2.828-18.032a3.25 3.25 0 11-4.596-4.596 3.25 3.25 0 014.596 4.596z"
                                        fill="#F36"
                                        stroke="#fff"
                                        strokeWidth="1.5"
                                    ></path>
                                </svg>
                                <span style={{ marginTop: '4px' }}>Xem trên bản đồ</span>
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
                                <PriceSlider handleFilterGia={handleFilterGia} />
                            </div>
                            <div className={classes.filter__hr}></div>
                            <div className={classes.filter__star}>
                                <span className={classes['filter__star--title']}>Hạng khách sạn</span>
                                <Star handleFilterSao={handleFilterSao} />
                            </div>
                            <div className={classes.filter__hr}></div>
                            {/* <div className={classes.filter__star}>
                                <span className={classes['filter__star--title']}>Dịch vụ đi kèm</span>
                                <Service />
                            </div> */}
                            <div className={classes.filter__hr}></div>
                            <div className={classes.filter__star}>
                                <span className={classes['filter__star--title']}>Người dùng đánh giá</span>
                                <UserRate handleFilterDanhGia={handleFilterDanhGia} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.room}>
                        <div className={classes.room__nav}>
                            <div className={classes['room__nav--choose']}>
                                <span style={{ fontWeight: '400', marginRight: '4px' }}>Sắp xếp:</span>
                                {sort.map((sortItem, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${classes.sort} ${index === indexSort && classes.active}`}
                                            onClick={() => handleChangeIndex(index)}
                                        >
                                            {sortItem}
                                        </div>
                                    )
                                })}
                                {/* <div className={`${classes.sort} ${classes.active}`}>Phù hợp nhất</div>
                            <div className={classes.sort}>Rẻ nhất</div>
                            <div className={classes.sort}>Đắt nhất</div>
                            <div className={classes.sort}>Xếp hạng sao</div>
                            <div className={classes.sort}>Đánh giá cao nhất</div> */}
                            </div>
                            <div className={classes.confirm}>
                                {/* <span className={classes.confirm__icon}>
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
                            </span> */}
                            </div>
                        </div>
                        {hotels && <PlacesList items={hotels} />}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ListByPlace
