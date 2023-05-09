import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './datetime.scss'
import { vi } from 'date-fns/locale'

function FlashSaleForm({ data, onEdit, formData, styles }) {
    function handleChange(e, type) {
        if (type === 'BatDau' || type === 'KetThuc' || type === 'IDKhungGio') {
            onEdit({ errors: { ...data.errors, [type]: null }, fields: { ...data.fields, [type]: e } })

            return
        }
        onEdit({ errors: { ...data.errors, [type]: null }, fields: { ...data.fields, [type]: e.target.value } })
    }

    return (
        <React.Fragment>
            <div className="d-flex">
                {/* Tiêu đề */}
                <div className={clsx(styles.form__part, styles.form__left)}>
                    <div className={styles.form__input}>
                        <span className={styles.title}>
                            Tiêu đề <sup>*</sup>
                        </span>
                        <input
                            type="text"
                            placeholder="FlashSale bùng nổ ngày hè"
                            className={clsx({ [styles.error]: data.errors.TieuDe })}
                            value={data.fields.TieuDe || ''}
                            onChange={(e) => handleChange(e, 'TieuDe')}
                        />
                        <span className={styles.form__error}>{data.errors.TieuDe}</span>
                    </div>
                </div>

                {/* Phần trăm khuyến mãi */}
                <div className={clsx(styles.form__part, styles.form__right)}>
                    <div className={styles.form__input}>
                        <span className={styles.title}>
                            Phần trăm KM <sup>*</sup>
                        </span>
                        <input
                            type="number"
                            min="1"
                            max="99"
                            placeholder="14"
                            className={clsx({ [styles.error]: data.errors.PhanTramKM })}
                            value={data.fields.PhanTramKM || ''}
                            onChange={(e) => handleChange(e, 'PhanTramKM')}
                        />
                        <span className={styles.form__error}>{data.errors.PhanTramKM}</span>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                {/* Thời gian bắt đầu */}
                <div className={clsx(styles.form__part, 'form', styles.form__left)}>
                    <div className={styles.form__input}>
                        <span className={styles.title}>
                            Ngày bắt đầu <sup>*</sup>
                        </span>
                        <DatePicker
                            locale={vi}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            className={clsx({ [styles.error]: data.errors.BatDau })}
                            selected={data.fields.BatDau || new Date()}
                            onChange={(e) => handleChange(e, 'BatDau')}
                        />
                        <span className={styles.form__error}>{data.errors.BatDau}</span>
                    </div>
                </div>

                {/* Thời gian kết thúc */}
                <div className={clsx(styles.form__part, 'form', styles.form__right)}>
                    <div className={styles.form__input}>
                        <span className={styles.title}>Ngày kết thúc</span>
                        <DatePicker
                            locale={vi}
                            dateFormat="dd/MM/yyyy"
                            minDate={data.fields.BatDau}
                            className={clsx({ [styles.error]: data.errors.KetThuc })}
                            selected={data.fields.KetThuc || null}
                            onChange={(e) => handleChange(e, 'KetThuc')}
                        />
                        <span className={styles.form__error}>{data.errors.KetThuc}</span>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                {/* Chọn khách sạn */}
                <div className={clsx(styles.form__part, styles.form__left)}>
                    <div className={styles.form__input}>
                        <label className={styles.title} htmlFor="ks">
                            Khách sạn áp dụng <sup>*</sup>
                        </label>
                        <select
                            name="khachSan"
                            id="ks"
                            value={data.fields.IDKhachSan}
                            onChange={(e) => handleChange(e, 'IDKhachSan')}
                        >
                            {formData.hotels &&
                                formData.hotels.map((hotel, index) => (
                                    <option key={index} value={hotel.ID}>
                                        {hotel.Ten}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                {/* Chọn khung giờ */}
                <div className={clsx(styles.form__part, styles.form__right)}>
                    <span className={styles.title} style={{ alignSelf: 'center' }}>
                        Khung giờ <sup>*</sup>
                    </span>

                    <div>
                        {formData.hotels &&
                            formData.periods.map((period, index) => (
                                <div key={index} className={styles.form__input}>
                                    <input
                                        type="radio"
                                        name="time"
                                        id={period.ID}
                                        checked={data.fields.IDKhungGio === period.ID}
                                        onChange={() => handleChange(period.ID, 'IDKhungGio')}
                                    />
                                    <label htmlFor={period.ID} className={styles.subTitle}>
                                        {moment(period.GioBatDau, 'HH:mm:ss').format('HH:mm')}&nbsp;&nbsp;-&nbsp;&nbsp;
                                        {moment(period.GioKetThuc, 'HH:mm:ss').format('HH:mm')}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FlashSaleForm
