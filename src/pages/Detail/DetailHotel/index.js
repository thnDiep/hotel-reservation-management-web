import React, { useState } from 'react'
import classes from './DetailHotel.module.scss'
import DatePicker from 'react-datepicker'
import Input from '~/components/Input/Input'
import { SearchButtonVer2 } from '~/components/Button'
function DetailHotel() {
    return (
        <React.Fragment>
            <div className={classes.detailHotel}>
                <div className={classes.leftBox}>
                    <div className={classes.finding}>
                        <button className={classes.btn_tag}>
                            <span aria-hidden="true" className={classes.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z"></path>
                                </svg>
                            </span>
                            Chúng tôi luôn khớp giá
                        </button>
                    </div>
                    <form className={classes.form}>
                        <div className={classes.form__sub}>
                            <span className={classes.title}>Tìm</span>
                            <Input label={'Tên chỗ nghỉ / điểm đến:'}>
                                <span className={classes.icon1} aria-hidden="true">
                                    <svg viewBox="0 0 128 128" width="1em" height="1em">
                                        <path d="M118.8 113.2l-31-31A4 4 0 0 0 85 81a44 44 0 1 0-4 4 4 4 0 0 0 1.2 2.8l31 31a4 4 0 0 0 5.6-5.7zM52 88a36 36 0 1 1 36-36 36 36 0 0 1-36 36z"></path>
                                    </svg>
                                </span>
                                <input
                                    className={classes.input}
                                    type={'text'}
                                    placeholder={'Bạn muốn đến đâu?'}
                                ></input>
                            </Input>
                            <Input label={'Ngày nhận phòng:'} type={'date'} check="true">
                                <span className={classes.icon1} aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path>
                                    </svg>
                                </span>
                                <input className={classes.input} type={'date'}></input>
                            </Input>

                            <Input label={'Ngày trả phòng:'} type={'date'} check="true">
                                <span className={classes.icon1} aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path>
                                    </svg>
                                </span>
                                <input className={classes.input} type={'date'}></input>
                            </Input>
                            <Input check="true">
                                <button type="button" className={classes.input}>
                                    2 người lớn · 0 trẻ em · 1 phòng
                                </button>
                            </Input>
                            <div className={classes.check}>
                                <input type="checkbox" value="business"></input>
                                <label>Tôi đi công tác</label>
                                <span className={classes.question}>
                                    <span aria-label="Nếu bạn đánh dấu lựa chọn này, chúng tôi sẽ hiển thị tới bạn những tính năng được khách đi công tác ưa chuộng như bữa sáng, Wi-Fi và chỗ đậu xe miễn phí.">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svgQues">
                                            <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <SearchButtonVer2 type="submit" className="my-search-button" style={{ backgroundColor: 'red' }}>
                            Tìm
                        </SearchButtonVer2>
                    </form>
                    <div className={classes.map}>map</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DetailHotel
