import { Editor } from '@tinymce/tinymce-react'
import React, { useRef, useState } from 'react'

import clsx from 'clsx'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { vi } from 'date-fns/locale'
import './datetime.scss'

function VoucherForm({ data, onEdit, formData, styles }) {
    const editorRef = useRef(null)
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
        }
    }

    function handleChange(e, type) {
        if (type === 'BatDau' || type === 'KetThuc') {
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
                            placeholder="Khách sạn giảm đến 200K"
                            className={clsx({ [styles.error]: data.errors.TieuDe })}
                            value={data.fields.TieuDe || ''}
                            onChange={(e) => handleChange(e, 'TieuDe')}
                        />
                        <span className={styles.form__error}>{data.errors.TieuDe}</span>
                    </div>
                </div>
                <div className={clsx(styles.form__part, styles.form__right)}>
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
            </div>

            <div className="d-flex">
                {/* Mã voucher */}
                <div className={clsx(styles.form__part, styles.form__left)}>
                    <div className={styles.form__input}>
                        <span className={styles.title}>
                            Mã Voucher <sup>*</sup>
                        </span>
                        <input
                            type="text"
                            placeholder="CHAOHE23"
                            className={clsx({ [styles.error]: data.errors.MaKhuyenMai })}
                            value={data.fields.MaKhuyenMai || ''}
                            onChange={(e) => handleChange(e, 'MaKhuyenMai')}
                        />
                        <span className={styles.form__error}>{data.errors.MaKhuyenMai}</span>
                    </div>
                </div>

                <div className={clsx(styles.form__right, 'd-flex')}>
                    {/* Phần trăm KM */}
                    <div className={clsx(styles.form__part)}>
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

                    {/* Số lượng */}
                    <div className={styles.form__part} style={{ marginLeft: '110px' }}>
                        <div className={styles.form__input}>
                            <span className={styles.title} style={{ width: 'fit-content' }}>
                                Số lượng giới hạn
                            </span>
                            <input
                                type="number"
                                min="1"
                                max="99"
                                placeholder="14"
                                className={clsx({ [styles.error]: data.errors.SoLuongKM })}
                                value={data.fields.SoLuongKM || ''}
                                onChange={(e) => handleChange(e, 'SoLuongKM')}
                            />
                            <span className={styles.form__error}>{data.errors.SoLuongKM}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                {/* Thời gian bắt đầu */}
                <div className={clsx(styles.form__part, 'form', styles.form__left)}>
                    <div className={styles.form__input}>
                        <span className={styles.title}>
                            Thời gian bắt đầu <sup>*</sup>
                        </span>
                        <DatePicker
                            locale={vi}
                            dateFormat="dd/MM/yyyy - hh:mm aa"
                            minDate={new Date()}
                            className={clsx({ [styles.error]: data.errors.BatDau })}
                            selected={data.fields.BatDau || new Date()}
                            timeInputLabel="Time:"
                            showTimeInput
                            onChange={(e) => handleChange(e, 'BatDau')}
                        />
                        <span className={styles.form__error}>{data.errors.BatDau}</span>
                    </div>
                </div>

                {/* Thời gian kết thúc */}
                <div className={clsx(styles.form__part, 'form', styles.form__right)}>
                    <div className={styles.form__input}>
                        <span className={styles.title}>Thời gian kết thúc</span>
                        <DatePicker
                            locale={vi}
                            dateFormat="dd/MM/yyyy - hh:mm aa"
                            minDate={data.fields.start}
                            className={clsx({ [styles.error]: data.errors.KetThuc })}
                            selected={data.fields.KetThuc || null}
                            timeInputLabel="Time:"
                            showTimeInput
                            onChange={(e) => handleChange(e, 'KetThuc')}
                            placeholderText="08/05/2023 - 06:00 PM"
                        />
                        <span className={styles.form__error}>{data.errors.KetThuc}</span>
                    </div>
                </div>
            </div>

            {/* Mô tả khuyến mãi */}
            <div className={styles.form__part}>
                <div className={styles.form__input}>
                    <span className={styles.title}>Mô tả khuyến mãi</span>
                    <textarea rows={5} value={data.fields.MoTa || ''} onChange={(e) => handleChange(e, 'MoTa')} />
                </div>
            </div>

            {/* Điều kiện & thể lệ chương trình */}
            <div className={styles.form__part}>
                <div className={styles.form__input}>
                    <div>
                        <span className={styles.title}>Điều kiện & thể lệ chương trình</span>
                    </div>
                    <div className={styles.editor}>
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            initialValue={data.fields.DieuKien || ''}
                            onChange={(e) => handleChange(e, 'DieuKien')}
                            init={{
                                menubar: false,
                                plugins: ['code', 'table', 'link', 'lists'],
                                toolbar: [
                                    'undo redo | bold italic underline strikethrough | numlist bullist | alignleft aligncenter alignright| forecolor backcolor | table link image media codesample',
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VoucherForm
