import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import classes from "./Popup.module.scss"
import "./Popup.scss"
import { clsx } from 'clsx'
const Popup = () => {
    return (
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
    )
}
export default Popup;
