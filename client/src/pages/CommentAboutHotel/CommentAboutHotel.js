import React from 'react'
import classes from './CommentAboutHotel.module.scss'
import { ButtonPrimary } from '~/components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const CommentAboutHotel = () => {
    return (
        <React.Fragment>
            <div className={classes.container1}>
                <div className={classes.container2}>
                    <form className={classes['contact1-form']}>
                        <div className={classes['contact1-form-title']}>Đánh giá khách sạn</div>

                        <div className={classes['wrap-input1']}>
                            <label for="name">Tiêu đề:</label>
                            <input
                                className={classes.input1}
                                type="text"
                                name="title"
                                id="name"
                                placeholder="Nhập tiêu đề"
                                autocomplete="off"
                            />
                            <span className={classes['shadow-input1']}></span>
                        </div>

                        <div class={classes['wrap-input1']}>
                            <label for="subject">Điểm đánh giá:</label>
                            <div className={classes.rating}>
                                <div className="d-flex flex-column ">
                                    <input type="radio" name="rating" value="10" />
                                    <label>10</label>
                                </div>
                                <div className="d-flex flex-column ">
                                    <input type="radio" name="rating" value="9" />
                                    <label>9</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="8" />
                                    <label>8</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="7" />
                                    <label>7</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="6" />
                                    <label>6</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="5" />
                                    <label>5</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="4" />
                                    <label>4</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="3" />
                                    <label>3</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="2" />
                                    <label>2</label>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="radio" name="rating" value="1" />
                                    <label>1</label>
                                </div>
                            </div>
                        </div>

                        <div class={classes['wrap-input1']}>
                            <label for="message">Nội dung đánh giá:</label>
                            <textarea
                                className={classes.input1}
                                name="content"
                                id="message"
                                placeholder="Nhập nội dung đánh giá"
                            ></textarea>
                            <span className={classes['shadow-input1']}></span>
                        </div>

                        <div className={classes.formBtn}>
                            <ButtonPrimary className="btnSubmit">
                                Gửi <img src="icons/arrow_right.png" alt="" className={classes.Image} />
                            </ButtonPrimary>
                        </div>
                    </form>
                    <div className={classes.back}>
                        <NavLink to="/profile/order">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span>Quay lại đơn phòng</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CommentAboutHotel
