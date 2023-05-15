import React, { useState, useRef } from 'react'
import classes from './CommentAboutHotel.module.scss'
import { ButtonPrimary } from '~/components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const CommentAboutHotel = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { id } = useParams()
    const Nav = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    const today = new Date()
    const [title, setTitle] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [selectedOption, setSelectedOption] = useState(10)
    const [content, setContent] = useState(() => {
        return { value: '', error: '', isValid: false }
    })

    const titleChangeHandler = (e) => {
        setTitle({ ...title, value: e.target.value, isValid: true })
    }
    const contentChangeHandler = (e) => {
        setContent({ ...content, value: e.target.value, isValid: true })
    }
    const handleOptionChange = (value) => {
        setSelectedOption(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title.value.length === 0) {
            setTitle({ ...title, error: 'Thông tin bắt buộc' })
            return
        }
        if (content.value.length === 0) {
            setContent({ ...content, error: 'Thông tin bắt buộc' })
            return
        }
        try {
            const res = await axios.post('http://localhost:8800/user/giveFeedback', {
                IDKhachSan: id,
                IDKhachHang: user.ID,
                TieuDe: title.value,
                Diem: selectedOption,
                NoiDung: content.value,
                ThoiGian: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            })
            if (res.status === 200) {
                Nav(`/hotels/detail/${id}`, { id: id })
            }
        } catch (err) {
            console.log(err)
            //console.log('sai1')
        }
    }
    return (
        <React.Fragment>
            <div className={classes.container1}>
                <div className={classes.container2}>
                    <form className={classes['contact1-form']}>
                        <div className={classes['contact1-form-title']}>Đánh giá khách sạn</div>

                        <div className={classes['wrap-input1']}>
                            <label htmlFor="name" className={`${title.error !== '' && classes.notifyError}`}>
                                Tiêu đề:
                            </label>
                            <input
                                className={` ${classes.input1}`}
                                type="text"
                                name="title"
                                id="name"
                                placeholder="Nhập tiêu đề"
                                value={title.value}
                                onChange={titleChangeHandler}
                            />
                            <span className={classes['shadow-input1']}></span>
                        </div>

                        <div className={classes['wrap-input1']}>
                            <label htmlFor="subject">Điểm đánh giá:</label>
                            <div className={classes.rating}>
                                {num.map((select) => {
                                    return (
                                        <div
                                            key={select}
                                            onClick={() => handleOptionChange(select)}
                                            className={`${classes.radio1} d-flex flex-column`}
                                        >
                                            <input
                                                className={classes.radio}
                                                type="radio"
                                                name="rating"
                                                defaultChecked={selectedOption === select ? true : false}
                                            />
                                            <label>{select}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes['wrap-input1']}>
                            <label htmlFor="message" className={`${content.error !== '' && classes.notifyError}`}>
                                Nội dung đánh giá:
                            </label>
                            <textarea
                                className={` ${classes.input1}`}
                                name="content"
                                id="message"
                                placeholder="Nhập nội dung đánh giá"
                                value={content.value}
                                onChange={contentChangeHandler}
                            ></textarea>
                            <span className={classes['shadow-input1']}></span>
                        </div>

                        <div className={classes.formBtn}>
                            <ButtonPrimary className="btnSubmit" onSubmit={handleSubmit}>
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
