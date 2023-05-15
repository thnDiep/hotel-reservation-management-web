import { useState } from 'react'
import Axios from 'axios'
import styles from './HeartButton.module.scss'

function HeartButton({ liked, IDKhachSan, handleClick }) {
    const [isLike, setIsLike] = useState(liked)

    const user = JSON.parse(localStorage.getItem('user'))

    const data = { IDKhachHang: user.ID, IDKhachSan }
    function onClickHeart(IDKhachSan, liked) {
        if (handleClick) {
            handleClick(IDKhachSan, liked)
        } else {
            setIsLike(!isLike)
            console.log(isLike)
            if (!isLike) {
                Axios.post('http://localhost:8800/profile/addToWishList', { data })
                    .then(() => {})
                    .catch((error) => console.log(error))
            } else {
                Axios.post('http://localhost:8800/profile/removeFromWishList', { data })
                    .then(() => {})
                    .catch((error) => console.log(error))
            }
        }
    }

    return (
        <button className={styles.heartBtn} onClick={() => onClickHeart(IDKhachSan, liked)}>
            <span>
                <svg width="28" height="28" fill="none" className="svgFillAll jss692">
                    <g filter="url(#icon_heart_svg__filter0_d)">
                        <path
                            d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                            fill={isLike ? '#ff3366' : '#000'}
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </g>
                    <defs>
                        <filter
                            id="icon_heart_svg__filter0_d"
                            x="-1"
                            y="0"
                            width="30"
                            height="30"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix
                                in="SourceAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="3"></feOffset>
                            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </span>
        </button>
    )
}

export default HeartButton
