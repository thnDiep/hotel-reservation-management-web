import React from 'react'
import classes from './Rating.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPencil, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
const Rating = () => {
    return (
        <React.Fragment className={`container-fluid px-1 py-5 mx-auto `}>
            <div className={classes.cmt}>Đánh giá</div>
            <div className={classes.subCmt}>100% đánh giá từ khách hàng đặt phòng trên Mytour</div>
            <p></p>
            <div className={`${classes.card} d-flex `}>
                <div className={classes['circle-img']}>
                    <img className={classes.Image} alt="" />
                    <div className={classes['rating-on-img']}>
                        <h3 className={classes[`head-rate`]}>4.7</h3>
                        <h3 className={classes[`subhead-rate`]}>out of 5</h3>
                    </div>
                </div>

                <div className={`${classes['rating-bar0']} justify-content-center`}>
                    <table className="text-left ">
                        <tr>
                            <td className={classes['rating-label']}>Tuyệt vời</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container0']}>
                                    <div className={classes['bar-50']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>123</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Xuất sắc</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-40']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>23</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Tốt</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-30']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>10</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Trung bình</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-20']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>3</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Kém</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-10']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>0</td>
                        </tr>
                    </table>
                </div>

                <div className={`${classes['rating-bar']} justify-content-center`}>
                    <table className="text-left mx-auto">
                        <tr>
                            <td className={classes['rating-label']}>Vị trí</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-5']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>123</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Giá cả</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-4']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>23</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Phục vụ</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-3']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>10</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Vệ sinh</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-2']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>3</td>
                        </tr>
                        <tr>
                            <td className={classes['rating-label']}>Tiện nghi</td>
                            <td className={classes['rating-bar']}>
                                <div className={classes['bar-container']}>
                                    <div className={classes['bar-1']}></div>
                                </div>
                            </td>
                            <td className={classes.figure}>0</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={classes.cmtContent}>
                <div className={classes.contentItem}>
                    <div className={classes.userInfo}>
                        <div className={classes.userInfoItem}>
                            <div className={classes.ava}>A</div>
                            <div className={classes.detailCmt}>
                                <span className={classes.name}>Anonymous</span>
                                <div className={classes.editTime}>
                                    <FontAwesomeIcon icon={faEdit} className={classes.icon} />
                                    <span>06/02/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <span className={classes.title}>Hài lòng, khách sạn đẹp</span>
                        <div className={classes.score}>
                            <p className={classes.tag}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={classes.iconTag} />
                                9.0
                            </p>
                            <span>Tuyệt vời</span>
                        </div>
                        <div className={classes.mainContent}>
                            <div>Khách sạn đẹp, nv phục vụ tốt</div>
                        </div>
                    </div>
                </div>
                <div className={classes.contentItem}>
                    <div className={classes.userInfo}>
                        <div className={classes.userInfoItem}>
                            <div className={classes.ava}>A</div>
                            <div className={classes.detailCmt}>
                                <span className={classes.name}>Anonymous</span>
                                <div className={classes.editTime}>
                                    <FontAwesomeIcon icon={faEdit} className={classes.icon} />
                                    <span>06/02/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <span className={classes.title}>Hài lòng, khách sạn đẹp</span>
                        <div className={classes.score}>
                            <p className={classes.tag}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={classes.iconTag} />
                                9.0
                            </p>
                            <span>Tuyệt vời</span>
                        </div>
                        <div className={classes.mainContent}>
                            <div>Khách sạn đẹp, nv phục vụ tốt</div>
                        </div>
                    </div>
                </div>
                <div className={classes.contentItem}>
                    <div className={classes.userInfo}>
                        <div className={classes.userInfoItem}>
                            <div className={classes.ava}>A</div>
                            <div className={classes.detailCmt}>
                                <span className={classes.name}>Anonymous</span>
                                <div className={classes.editTime}>
                                    <FontAwesomeIcon icon={faEdit} className={classes.icon} />
                                    <span>06/02/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <span className={classes.title}>Hài lòng, khách sạn đẹp</span>
                        <div className={classes.score}>
                            <p className={classes.tag}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={classes.iconTag} />
                                9.0
                            </p>
                            <span>Tuyệt vời</span>
                        </div>
                        <div className={classes.mainContent}>
                            <div>Khách sạn đẹp, nv phục vụ tốt</div>
                        </div>
                    </div>
                </div>
                <div className={classes.contentItem}>
                    <div className={classes.userInfo}>
                        <div className={classes.userInfoItem}>
                            <div className={classes.ava}>A</div>
                            <div className={classes.detailCmt}>
                                <span className={classes.name}>Anonymous</span>
                                <div className={classes.editTime}>
                                    <FontAwesomeIcon icon={faEdit} className={classes.icon} />
                                    <span>06/02/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <span className={classes.title}>Hài lòng, khách sạn đẹp</span>
                        <div className={classes.score}>
                            <p className={classes.tag}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={classes.iconTag} />
                                9.0
                            </p>
                            <span>Tuyệt vời</span>
                        </div>
                        <div className={classes.mainContent}>
                            <div>Khách sạn đẹp, nv phục vụ tốt</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Rating
