import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '../Promotion.module.scss'
import './datetime.scss'
import { vi } from 'date-fns/locale'

function FlashSaleForm({ data, onEdit }) {
    function handleChange(e, type) {
        if (type === 'start' || type === 'end' || type === 'idTime') {
            onEdit({ errors: { ...data.errors, [type]: null }, fields: { ...data.fields, [type]: e } })
            return
        }
        onEdit({ errors: { ...data.errors, [type]: null }, fields: { ...data.fields, [type]: e.target.value } })
    }

    return (
        <React.Fragment>
            {/* Tiêu đề */}
            <div className={styles.form__part}>
                <div className={styles.form__input}>
                    <span className={styles.title}>
                        Tiêu đề <sup>*</sup>
                    </span>
                    <input
                        type="text"
                        placeholder="FlashSale bùng nổ ngày hè"
                        className={clsx({ [styles.error]: data.errors.title })}
                        value={data.fields.title || ''}
                        onChange={(e) => handleChange(e, 'title')}
                    />
                    <span className={styles.form__error}>{data.errors.title}</span>
                </div>
            </div>

            {/* Phần trăm khuyến mãi */}
            <div className={clsx(styles.form__part, 'd-flex')}>
                <div className={styles.form__input}>
                    <span className={styles.title}>
                        Phần trăm KM <sup>*</sup>
                    </span>
                    <input
                        type="number"
                        min="1"
                        max="99"
                        placeholder="14"
                        className={clsx({ [styles.error]: data.errors.percent })}
                        value={data.fields.percent || ''}
                        onChange={(e) => handleChange(e, 'percent')}
                    />
                    <span className={styles.form__error}>{data.errors.percent}</span>
                </div>
            </div>

            {/* Chọn khung giờ */}
            <div className={styles.form__part}>
                <span className={styles.title}>
                    Khung giờ <sup>*</sup>
                </span>

                <div>
                    <div className={styles.form__input}>
                        <input
                            type="radio"
                            name="time"
                            id="0"
                            checked={data.fields.idTime === 0}
                            onChange={() => handleChange(0, 'idTime')}
                        />
                        <label htmlFor="0" className={styles.subTitle}>
                            09:00 - 12:00
                        </label>
                    </div>

                    <div className={styles.form__input}>
                        <input
                            type="radio"
                            name="time"
                            id="1"
                            checked={data.fields.idTime === 1}
                            onChange={() => handleChange(1, 'idTime')}
                        />
                        <label htmlFor="1" className={styles.subTitle}>
                            14:00 - 16:00
                        </label>
                    </div>
                    <div className={styles.form__input}>
                        <input
                            type="radio"
                            name="time"
                            id="2"
                            checked={data.fields.idTime === 2}
                            onChange={() => handleChange(2, 'idTime')}
                        />
                        <label htmlFor="2" className={styles.subTitle}>
                            19:00 - 23:00
                        </label>
                    </div>
                </div>
            </div>

            {/* Thời gian bắt đầu */}
            <div className={clsx(styles.form__part, 'form')}>
                <div className={styles.form__input}>
                    <span className={styles.title}>
                        Ngày bắt đầu <sup>*</sup>
                    </span>
                    <DatePicker
                        locale={vi}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        className={clsx({ [styles.error]: data.errors.start })}
                        selected={data.fields.start || new Date()}
                        onChange={(e) => handleChange(e, 'start')}
                    />
                    <span className={styles.form__error}>{data.errors.start}</span>
                </div>
            </div>

            {/* Thời gian kết thúc */}
            <div className={clsx(styles.form__part, 'form')}>
                <div className={styles.form__input}>
                    <span className={styles.title}>Ngày kết thúc</span>
                    <DatePicker
                        locale={vi}
                        dateFormat="dd/MM/yyyy"
                        minDate={data.fields.start}
                        className={clsx({ [styles.error]: data.errors.end })}
                        selected={data.fields.end || null}
                        onChange={(e) => handleChange(e, 'end')}
                    />
                    <span className={styles.form__error}>{data.errors.end}</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FlashSaleForm
