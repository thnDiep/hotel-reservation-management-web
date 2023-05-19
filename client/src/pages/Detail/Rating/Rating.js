import React from 'react'
import classes from './Rating.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPencil, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
const Rating = ({ feedback, infor }) => {
    const Bar50 = styled.div`
        width: ${(props) => props.percent}%;
        height: 9px;
        background-color: rgb(255, 51, 102);
        border-radius: 20px;
    `
    return (
        <div className={`container-fluid px-1 py-5 mx-auto `}>
            <div className={classes.cmt}>Đánh giá</div>
            <div className={classes.subCmt}>100% đánh giá từ khách hàng đặt phòng trên MyTravel</div>

            <div className={`${classes.card} d-flex `}>
                <div className={classes['circle-img']}>
                    <img className={classes.Image} alt="" />
                    <div className={classes['rating-on-img']}>
                        <h3 className={classes[`head-rate`]}>
                            {Number.isInteger(infor.avgScore) ? infor.avgScore.toFixed(1) : infor.avgScore}
                        </h3>
                        {/* <h3 className={classes[`subhead-rate`]}>out of 10</h3> */}
                    </div>
                </div>

                <div className={`${classes['rating-bar0']} justify-content-center`}>
                    <table className="text-left ">
                        <tbody>
                            <tr>
                                <td className={classes['rating-label']}>Tuyệt vời</td>
                                <td className={classes['rating-bar']}>
                                    <div className={classes['bar-container0']}>
                                        <Bar50 percent={infor.perfectPercent}></Bar50>
                                    </div>
                                </td>
                                <td className={classes.figure}>{infor.perfect}</td>
                            </tr>
                            <tr>
                                <td className={classes['rating-label']}>Xuất sắc</td>
                                <td className={classes['rating-bar']}>
                                    <div className={classes['bar-container']}>
                                        <Bar50 percent={infor.execellentPercent}></Bar50>
                                    </div>
                                </td>
                                <td className={classes.figure}>{infor.execellent}</td>
                            </tr>
                            <tr>
                                <td className={classes['rating-label']}>Tốt</td>
                                <td className={classes['rating-bar']}>
                                    <div className={classes['bar-container']}>
                                        <Bar50 percent={infor.goodPercent}></Bar50>
                                    </div>
                                </td>
                                <td className={classes.figure}>{infor.good}</td>
                            </tr>
                            <tr>
                                <td className={classes['rating-label']}>Trung bình</td>
                                <td className={classes['rating-bar']}>
                                    <div className={classes['bar-container']}>
                                        <Bar50 percent={infor.mediumPercent}></Bar50>
                                    </div>
                                </td>
                                <td className={classes.figure}>{infor.medium}</td>
                            </tr>
                            <tr>
                                <td className={classes['rating-label']}>Kém</td>
                                <td className={classes['rating-bar']}>
                                    <div className={classes['bar-container']}>
                                        <Bar50 percent={infor.badPercent}></Bar50>
                                    </div>
                                </td>
                                <td className={classes.figure}>{infor.bad}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <div className={`${classes['rating-bar']} justify-content-center`}>
                    <table className="text-left mx-auto">
                        <tbody>
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
                        </tbody>
                    </table>
                </div> */}
            </div>
            <div className={classes.cmtContent}>
                {feedback.map((fb) => (
                    <div className={classes.contentItem} key={fb.ID}>
                        <div className={classes.userInfo}>
                            <div className={classes.userInfoItem}>
                                <div className={classes.ava}>C</div>
                                <div className={classes.detailCmt}>
                                    <span className={classes.name}>{fb.HoTen}</span>
                                    <div className={classes.editTime}>
                                        <FontAwesomeIcon icon={faEdit} className={classes.icon} />
                                        <span>
                                            {new Date(fb.ThoiGian).toLocaleDateString('en-SG', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.content}>
                            <span className={classes.title}>{fb.TieuDe}</span>
                            <div className={classes.score}>
                                <p className={classes.tag}>
                                    <FontAwesomeIcon icon={faUmbrellaBeach} className={classes.iconTag} />
                                    {Number.isInteger(fb.Diem) ? fb.Diem.toFixed(1) : fb.Diem}
                                </p>
                                {fb.Diem > 9.0 && <span>Tuyệt vời</span>}
                                {fb.Diem <= 9.0 && fb.Diem > 8.0 && <span>Xuất sắc</span>}
                                {fb.Diem <= 8.0 && fb.Diem > 7.0 && <span>Tốt</span>}
                                {fb.Diem <= 7.0 && fb.Diem > 6.0 && <span>Trung bình</span>}
                                {fb.Diem <= 6.0 && <span>Kém</span>}
                            </div>
                            <div className={classes.mainContent}>
                                <div>{fb.NoiDung}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Rating
