import React, { useState } from "react";
import classes from "./ImageHotel.module.scss"
import "./Image.scss"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { clsx } from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const MySwal = withReactContent(Swal);
const ImageHotel = () => {
    const handleButtonClick = () => {
        MySwal.fire({
            title: 'Hình ảnh khách sạn',
            html: (
                <div className="row">
                    <div className="col-8">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <FontAwesomeIcon icon={faCaretLeft} aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <FontAwesomeIcon icon={faCaretRight} aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                            {/* indicator */}
                            <div className={clsx(classes['carousel-indicators-image'], 'carousel-indicators')}>

                                <div data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={clsx(classes['active'], 'active')}  >
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                        alt=""
                                    />
                                </div>
                                <div data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" >
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                        alt=""
                                    />
                                </div>
                                <div data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" >
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                        alt=""
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={clsx(classes['box-popup-content'], 'col-4')}>
                        <button className={classes['box-popup-content__button']}>Xem phòng còn trống</button>
                    </div>
                </div>
            ),
            showCloseButton: true,
            showConfirmButton: false,
            width: '1140px',
            height: '80vh',
            backdrop: 'rgba(39,46,52,1)',
        });
    };
    return (
        <>
            <div className="row" style={{ color: '#545454' }} onClick={handleButtonClick}>
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
                                    <span >Xem tất cả ảnh</span>
                                    <div className={classes.viewAll}></div>
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/511a3eb5dc56b4a69e42ba2c93fc1d96.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>)
}
export default ImageHotel;