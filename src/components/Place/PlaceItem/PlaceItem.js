import './PlaceItem.scss'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PlaceItem = ({ item }) => {
    const [currentSlide, setCurrentSlide] = useState(0); // Khởi tạo state lưu giá trị của currentSlide

    const handleAfterChange = (currentSlide) => {
        setCurrentSlide(currentSlide);
    };
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <svg width="8" height="14" fill="none" style={{ transform: 'rotate(180deg)' }}>
                <path d="M1 1l6 6-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <svg width="8" height="14" fill="none">
                <path d="M1 1l6 6-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        // "data-currentslide": currentSlide,

    };
    const renderSlides = item.imgs.map(image =>
        <div className="image" key={image.id}>
            <img className="image" src={image.image} alt='hello' />
        </div>
    )

    return (
        <div className="place">
            <div className="place__img">

                <Slider {...settings}>

                    {renderSlides}
                </Slider>
                <button className="MuiButtonBase-root MuiIconButton-root jss300" tabIndex="0" type="button"><span
                    className="MuiIconButton-label"><svg width="28" height="28" fill="none" className="svgFillAll jss302">
                        <g filter="url(#icon_heart_svg__filter0_d)">
                            <path
                                d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                fill="#000" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>

                    </svg></span><span className="MuiTouchRipple-root"></span>
                </button>
            </div>
            <div className='place__detail'>

                <div className='place__detail--content'>
                    <div className="place__detail--endow">
                        <div className="place__detail--endow1">{item.endow[0]}</div>
                        <div className="place__detail--endow2">{item.endow[1]}</div>
                    </div>
                    <div className="place__detail--title">{item.title}</div>
                    <div className="place__detail--rate">{item.title}</div>
                    <div className="place__detail--star">
                        <FontAwesomeIcon className="fa-star" icon={faStar} />
                        <FontAwesomeIcon className="fa-star" icon={faStar} />
                        <FontAwesomeIcon className="fa-star" icon={faStar} />
                        <FontAwesomeIcon className="fa-star" icon={faStar} />
                        <FontAwesomeIcon className="fa-star" icon={faStar} />
                        <div className="overlay--star" style={{ width: `0.8-calc(100% - ${item.rate}/5*100%)` }}></div>
                    </div>
                    <div className="place__detail--scored">
                        <span className="place__detail--scored1">
                            <svg width="21" height="16" fill="none" style={{ marginRight: '3px' }}>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M5.825 8.157c.044-.13.084-.264.136-.394.31-.783.666-1.548 1.118-2.264.3-.475.606-.95.949-1.398.474-.616 1.005-1.19 1.635-1.665.27-.202.55-.393.827-.59.019-.015.034-.033.038-.08-.036.015-.078.025-.111.045-.506.349-1.024.68-1.51 1.052A15.241 15.241 0 006.627 4.98c-.408.47-.78.97-1.144 1.474-.182.249-.31.534-.474.818-1.096-1.015-2.385-1.199-3.844-.77.853-2.19 2.291-3.862 4.356-5.011 3.317-1.843 7.495-1.754 10.764.544 2.904 2.041 4.31 5.497 4.026 8.465-1.162-.748-2.38-.902-3.68-.314.05-.92-.099-1.798-.3-2.67a14.842 14.842 0 00-.834-2.567 16.416 16.416 0 00-1.225-2.345l-.054.028c.103.193.21.383.309.58.402.81.642 1.67.8 2.553.152.86.25 1.724.287 2.595.027.648.003 1.294-.094 1.936-.01.066-.018.133-.027.219-1.223-1.305-2.68-2.203-4.446-2.617a9.031 9.031 0 00-5.19.29l-.033-.03z"
                                    fill="#F36"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M10 12.92h-.003c.31-1.315.623-2.627.93-3.943.011-.052-.015-.145-.052-.176a1.039 1.039 0 00-.815-.247c-.082.01-.124.046-.142.135-.044.216-.088.433-.138.646-.285 1.207-.57 2.413-.859 3.62l.006.001c-.31 1.314-.623 2.626-.93 3.942-.011.052.016.145.052.177.238.196.51.285.815.247.082-.01.125-.047.142-.134.044-.215.088-.433.138-.648.282-1.208.567-2.414.857-3.62z"
                                    fill="#F36"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M15.983 19.203s-8.091-6.063-17.978-.467c0 0-.273.228.122.241 0 0 8.429-4.107 17.739.458-.002 0 .282.034.117-.232z"
                                    fill="#F36"></path>
                            </svg>
                            {item.scored}
                        </span>
                        <span className="place__detail--scored2">Tuyệt vời</span>
                        <span className="place__detail--scored3">179 đánh giá</span>
                    </div>
                    <div className="place__detail--map">
                        <div className="place__detail--map1">
                            <span className='map1__icon'>
                                <svg width="16" height="16" fill="none">
                                    <path d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8" stroke="currentColor" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path
                                        d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                            <span className='map1__content'>Dương Tơ, Phú Quốc</span>
                        </div>
                        <div className="place__detail--map2">Xem trên bản đồ</div>
                    </div>
                    <div className='place__detail--status'>
                        <span className='status__icon'>
                            <svg width="16" height="16" fill="none">
                                <path d="M2.667 7.556V6.222a.889.889 0 01.888-.889h3.556a.889.889 0 01.889.89v1.333" stroke="#4A5568"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M8 7.556V6.222a.889.889 0 01.889-.889h3.555a.889.889 0 01.89.89v1.333" stroke="#4A5568"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                <path
                                    d="M2.518 7.556h10.963a1.185 1.185 0 011.186 1.185v2.815H1.333V8.74a1.185 1.185 0 011.185-1.185v0zM1.333 11.556v1.777M14.666 11.556v1.777"
                                    stroke="#4A5568" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M13.333 7.556v-4a.889.889 0 00-.889-.89H3.555a.889.889 0 00-.889.89v4" stroke="#4A5568"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>

                        </span>
                        <span className='status__content'>{item.status}</span>
                    </div>
                    <div className='place__detail--service place__detail--status'>
                        <span className='status__icon'><svg width="16" height="16" fill="none" >
                            <path
                                d="M11.31 11.976l1.862 1.862M3.241 3.908l4.966 4.965M4.483 2.667L7.586 5.77 5.103 8.253 2 5.149M3.241 13.838l10.552-10.55a5.036 5.036 0 01-1.242 4.965c-2.194 2.194-3.724 2.482-3.724 2.482"
                                stroke="#48BB78" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></span>
                        <span className='status__content'>{item.service}</span>
                    </div>

                </div>
                <div className='place__detail--price'>
                    <div className='price__discount'>
                        -{item.discount}
                        <span className='price__discount1'></span></div>
                    <span className='price__new'>2.722.909 ₫</span>
                    <span className='price__old' style={{ color: 'rgb(26, 32, 44)' }}>2.844.276 ₫</span>
                </div>
            </div>
        </div>)
}
export default PlaceItem