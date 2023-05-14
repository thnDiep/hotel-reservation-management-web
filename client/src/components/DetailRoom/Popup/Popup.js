import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import classes from './Popup.module.scss'
import './Popup.scss'
import { clsx } from 'clsx'
import MySwal from 'sweetalert2'
const Popup = ({ picHotel, check, tienNghi }) => {
    const formatMoney = (amount) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    function scrollToRoomList() {
        MySwal.close()
        const roomListContainer = document.getElementById('roomListContainer')
        roomListContainer.scrollIntoView({ behavior: 'smooth' })
    }

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
                                key={pic.HinhAnh}
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
                {check ? (
                    <>
                        <div className={classes.boxContentItem}>
                            {tienNghi.tienNghi.map((data) => {
                                console.log(data)
                                return (
                                    <div className={classes.boxItem} key={data.ID}>
                                        <div className={classes.title}>{data.TenLoai}</div>
                                        <div className={classes.content}>
                                            {data.tienNghi &&
                                                data.tienNghi.map((tienNghi1) => {
                                                    console.log(tienNghi1)
                                                    return tienNghi1 === null ? (
                                                        <></>
                                                    ) : (
                                                        <div key={tienNghi1.IDTienNghi}>
                                                            {/* <img
                                                                src="https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png"
                                                                className={classes.icon}
                                                                alt=""
                                                            /> */}
                                                            <FontAwesomeIcon
                                                                className={classes.icon}
                                                                icon={['fas', tienNghi1.Icon]}
                                                            />

                                                            <span>{tienNghi1.TenTienNghi}</span>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={classes.boxInfoPrice}>
                            {tienNghi.GiamGia !== 0 && (
                                <div className={classes.boxPromo}>
                                    <span className={classes.title}>Promo giảm {tienNghi.GiamGia}% </span>
                                </div>
                            )}
                            <div className={classes.boxPrice}>
                                <label>Giá phòng chỉ từ</label> {formatMoney(tienNghi.Gia).replace('₫', '')}VND{' '}
                                <span className={classes.tag}>/đêm</span>
                            </div>
                            <button onClick={scrollToRoomList} className={classes['box-popup-content__button']}>
                                Xem phòng còn trống
                            </button>
                        </div>
                    </>
                ) : (
                    <button onClick={scrollToRoomList} className={classes['box-popup-content__button']}>
                        Xem phòng còn trống
                    </button>
                )}
                {/* */}
            </div>
        </div>
    )
}
export default Popup
