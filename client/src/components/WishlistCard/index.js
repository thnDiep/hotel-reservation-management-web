import './wishlistCard.module.scss'
import styles from './wishlistCard.module.scss'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import HeartButton from '~/components/Button/HeartButton'
import { Link } from 'react-router-dom'
import Axios from 'axios'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function WishlistCard({ list, liked, onEmpty }) {
    const [data, setData] = useState(list)

    function handleClickHeart(id, isLike) {
        const data = { IDKhachHang: 4, IDKhachSan: id }

        if (!isLike) {
            Axios.post('http://localhost:8800/profile/addToWishList', { data })
                .then(() => {
                    // const newList = list.filter((item) => item.ID !== IDKhachSan)
                    // setList(newList)
                })
                .catch((error) => console.log(error))
        } else {
            Axios.post('http://localhost:8800/profile/removeFromWishList', { data })
                .then(() => {
                    const newList = list.filter((item) => item.ID !== id)
                    setData(newList)
                })
                .catch((error) => console.log(error))
        }
    }

    useEffect(() => {
        if (data && data.length === 0) {
            onEmpty(true)
        } else {
            onEmpty(false)
        }
    }, [data])

    useEffect(() => {
        setData(list)
    }, [list])

    return (
        <div>
            {data &&
                data.map((item, index) => (
                    <div className="place">
                        <Link className="link" to={`/hotels/detail/${item.ID}`}>
                            {' '}
                        </Link>
                        <div className="place__img">
                            <div className="image">
                                <img className="image" src={item.HinhAnh} alt="Anh khach san" />
                            </div>
                            <HeartButton liked handleClick={handleClickHeart} IDKhachSan={item.ID} />
                        </div>
                        <div className="place__detail">
                            <div className="place__detail--content">
                                <div className="place__detail--endow">
                                    <div className="place__detail--endow1">{item.Nhan}</div>
                                </div>
                                <div className="place__detail--title">{item.Ten}</div>
                                <div className="place__detail--star">
                                    <FontAwesomeIcon className="fa-star" icon={faStar} />
                                    <FontAwesomeIcon className="fa-star" icon={faStar} />
                                    <FontAwesomeIcon className="fa-star" icon={faStar} />
                                    <FontAwesomeIcon className="fa-star" icon={faStar} />
                                    <FontAwesomeIcon className="fa-star" icon={faStar} />
                                    <div
                                        className="overlay--star"
                                        style={{ width: `0.8-calc(100% - ${item.soSao}/5*100%)` }}
                                    ></div>
                                </div>
                                <div className="place__detail--scored">
                                    <span className="place__detail--scored1">
                                        <svg width="21" height="16" fill="none" style={{ marginRight: '3px' }}>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.825 8.157c.044-.13.084-.264.136-.394.31-.783.666-1.548 1.118-2.264.3-.475.606-.95.949-1.398.474-.616 1.005-1.19 1.635-1.665.27-.202.55-.393.827-.59.019-.015.034-.033.038-.08-.036.015-.078.025-.111.045-.506.349-1.024.68-1.51 1.052A15.241 15.241 0 006.627 4.98c-.408.47-.78.97-1.144 1.474-.182.249-.31.534-.474.818-1.096-1.015-2.385-1.199-3.844-.77.853-2.19 2.291-3.862 4.356-5.011 3.317-1.843 7.495-1.754 10.764.544 2.904 2.041 4.31 5.497 4.026 8.465-1.162-.748-2.38-.902-3.68-.314.05-.92-.099-1.798-.3-2.67a14.842 14.842 0 00-.834-2.567 16.416 16.416 0 00-1.225-2.345l-.054.028c.103.193.21.383.309.58.402.81.642 1.67.8 2.553.152.86.25 1.724.287 2.595.027.648.003 1.294-.094 1.936-.01.066-.018.133-.027.219-1.223-1.305-2.68-2.203-4.446-2.617a9.031 9.031 0 00-5.19.29l-.033-.03z"
                                                fill="#F36"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10 12.92h-.003c.31-1.315.623-2.627.93-3.943.011-.052-.015-.145-.052-.176a1.039 1.039 0 00-.815-.247c-.082.01-.124.046-.142.135-.044.216-.088.433-.138.646-.285 1.207-.57 2.413-.859 3.62l.006.001c-.31 1.314-.623 2.626-.93 3.942-.011.052.016.145.052.177.238.196.51.285.815.247.082-.01.125-.047.142-.134.044-.215.088-.433.138-.648.282-1.208.567-2.414.857-3.62z"
                                                fill="#F36"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.983 19.203s-8.091-6.063-17.978-.467c0 0-.273.228.122.241 0 0 8.429-4.107 17.739.458-.002 0 .282.034.117-.232z"
                                                fill="#F36"
                                            ></path>
                                        </svg>
                                        9.2
                                    </span>
                                    <span className="place__detail--scored2">Tuyệt vời</span>
                                    <span className="place__detail--scored3">179 đánh giá</span>
                                </div>
                                <div className="place__detail--map">
                                    <div className="place__detail--map1">
                                        <span className="map1__icon">
                                            <svg width="16" height="16" fill="none">
                                                <path
                                                    d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className="map1__content">{item.DiaChi}</span>
                                    </div>
                                    <div className="place__detail--map2">Xem trên bản đồ</div>
                                </div>

                                <div className={styles.confirm}>
                                    <span className={styles.confirmIcon}>
                                        <svg width="16" height="16" fill="none">
                                            <path
                                                d="M12.739 6.478L6.652 15l1.217-5.478H3L9.087 1 7.87 6.478h4.87z"
                                                stroke="#ED8936"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className={styles.comfirmContent}>Xác nhận ngay</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default WishlistCard
