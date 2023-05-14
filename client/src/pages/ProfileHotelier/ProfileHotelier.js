import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import clsx from 'clsx'
import Axios from 'axios'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './datetime.scss'
import { vi } from 'date-fns/locale'

import DataContext from '~/contexts/DataContext'
import styles from './ProfileHotelier.module.scss'

const ProfileHotelier = () => {
    const { data, handleData } = useContext(DataContext)
    const [showInformModal, setShowInformModal] = useState(false)

    const [info, setInfo] = useState()

    const [fileAvt, setFileAvt] = useState()
    const [fileQr, setFileQr] = useState()
    const fileInputAvt = useRef(null)
    const fileInputQr = useRef(null)

    const options = useRef([
        { value: '1 - 19 nhân viên', label: '1 - 19 nhân viên' },
        { value: '20 - 49 nhân viên', label: '20 - 49 nhân viên' },
        { value: '50 - 99 nhân viên', label: '50 - 99 nhân viên' },
        { value: '100 - 199 nhân viên', label: '100 - 199 nhân viên' },
        { value: '200 - 499 nhân viên', label: '200 - 499 nhân viên' },
        { value: '500 - 1000 nhân viên', label: '500 - 1000 nhân viên' },
    ])
    // Dữ liệu cho bảng -> Lấy lúc đầu
    useEffect(() => {
        if (data) {
            Axios.get('http://localhost:8800/cks/profile', { params: { idCKS: data.curUser.ID } })
                .then((response) => {
                    const info = response.data.user
                    if (response.data.bank) {
                        info.IDBank = response.data.bank.ID
                        info.TenNganHang = response.data.bank.TenNganHang
                        info.HoTenTK = response.data.bank.HoTenTK
                        info.SoTaiKhoan = response.data.bank.SoTaiKhoan
                        info.NgayHetHan = response.data.bank.NgayHetHan
                        info.anhQR = response.data.bank.anhQR
                        info.IDKhachHang = response.data.bank.IDKhachHang
                    } else {
                        info.IDBank = null
                        info.TenNganHang = null
                        info.HoTenTK = null
                        info.SoTaiKhoan = null
                        info.NgayHetHan = null
                        info.anhQR = null
                        info.IDKhachHang = response.data.user.ID
                    }

                    const result = { errors: {}, fields: { ...info } }
                    setInfo(result)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [data])

    function handleChange(e, type) {
        if (type === 'QuyMo') {
            setInfo({ errors: { ...info.errors, [type]: null }, fields: { ...info.fields, [type]: e.value } })
            return
        }
        if (type === 'NgayHetHan') {
            setInfo({ errors: { ...info.errors, [type]: null }, fields: { ...info.fields, [type]: e } })
            return
        }
        setInfo({ errors: { ...info.errors, [type]: null }, fields: { ...info.fields, [type]: e.target.value } })
    }

    function handleChangeAvt(e) {
        setFileAvt(e.target.value)

        const PRESET_NAME = 'ml_default'
        const CLOUD_NAME = 'dzawgnpm9'
        const FOLDER_NAME = 'khachsan'
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formData = new FormData()
        formData.append('upload_preset', PRESET_NAME)
        formData.append('folder', FOLDER_NAME)
        formData.append('file', e.target.files[0])
        Axios.post(api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                setInfo({ ...info, fields: { ...info.fields, ['HinhAnh']: res.data.url } })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function handleChangeQr(e) {
        setFileQr(e.target.value)

        const PRESET_NAME = 'ml_default'
        const CLOUD_NAME = 'dzawgnpm9'
        const FOLDER_NAME = 'khachsan'
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formData = new FormData()
        formData.append('upload_preset', PRESET_NAME)
        formData.append('folder', FOLDER_NAME)
        formData.append('file', e.target.files[0])
        Axios.post(api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                setInfo({ ...info, fields: { ...info.fields, ['anhQR']: res.data.url } })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function handleSubmit() {
        let validForm = true

        const fields = info.fields
        const errors = {}

        if (!fields.HoTen) {
            errors.HoTen = 'Bạn chưa nhập họ tên'
            validForm = false
        }

        if (!fields.Email) {
            errors.Email = 'Bạn chưa nhập địa chỉ Email'
            validForm = false
        } else {
            const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            if (!filter.test(fields.Email)) {
                errors.Email = 'Địa chỉ Email sai định dạng'
                validForm = false
            }
        }

        if (!fields.SoDienThoai) {
            errors.SoDienThoai = 'Bạn chưa nhập số điện thoại'
            validForm = false
        } else {
            if (fields.SoDienThoai.length < 8 || fields.SoDienThoai.length > 10) {
                errors.SoDienThoai = 'Độ dài cần 8-10 kí tự'
                validForm = false
            }
        }

        if (!fields.TenCongTy) {
            errors.TenCongTy = 'Bạn chưa nhập tên công ty'
            validForm = false
        }

        if (!fields.MaSoThue) {
            errors.MaSoThue = 'Bạn chưa nhập mã số thuế'
            validForm = false
        } else {
            if (fields.MaSoThue.length < 10 || fields.MaSoThue.length > 13) {
                errors.MaSoThue = 'Độ dài cần 10-13 kí tự'
                validForm = false
            }
        }

        if (!fields.QuyMo) {
            errors.QuyMo = 'Bạn chưa chọn quy mô'
            validForm = false
        }

        if (!fields.DiaChi) {
            errors.DiaChi = 'Bạn chưa nhập địa chỉ'
            validForm = false
        }

        if (!fields.TenNganHang) {
            errors.TenNganHang = 'Bạn chưa nhập tên ngân hàng'
            validForm = false
        }

        if (!fields.HoTenTK) {
            errors.HoTenTK = 'Bạn chưa nhập họ tên chủ tài khoản'
            validForm = false
        }

        if (!fields.SoTaiKhoan) {
            errors.SoTaiKhoan = 'Bạn chưa nhập số tài khoản'
            validForm = false
        } else {
            if (fields.SoTaiKhoan.length < 9 || fields.SoTaiKhoan.length > 14) {
                errors.SoTaiKhoan = 'Độ dài cần 9-14 kí tự'
                validForm = false
            }
        }

        if (!fields.NgayHetHan) {
            errors.NgayHetHan = 'Bạn chưa nhập ngày hết hạn tài khoản'
            validForm = false
        }

        const form = { fields, errors }
        setInfo(form)

        let { IDBank, TenNganHang, HoTenTK, SoTaiKhoan, NgayHetHan, anhQR, IDKhachHang, ...user } = form.fields
        const submitData = { user: {}, bank: {} }

        // nguoi dung
        submitData.user = user

        // taikhoanthanhtoan
        submitData.bank.ID = IDBank
        submitData.bank.IDKhachHang = IDKhachHang
        submitData.bank.TenNganHang = TenNganHang
        submitData.bank.HoTenTK = HoTenTK
        submitData.bank.SoTaiKhoan = SoTaiKhoan
        submitData.bank.NgayHetHan = NgayHetHan
        submitData.bank.anhQR = anhQR

        if (validForm) {
            console.log(submitData)
            Axios.post(`http://localhost:8800/cks/profile`, {
                thongtin: submitData,
            })
                .then((response) => {
                    setShowInformModal(true)
                    window.setTimeout(function () {
                        setShowInformModal(false)
                    }, 1000)
                    // console.log('Thông tin update thành công: ', voucherState.fields)
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div className={styles['main-content']}>
            {info && (
                <div className="container-fluid mt-7">
                    <div className="mt-5 mb-xl-0">
                        <div className={`card shadow ${styles.container1}`}>
                            <div className={`card-body ${styles.form}`}>
                                <div className={clsx(styles.form__part)}>
                                    <div className={styles.form__left}>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={clsx(styles.form__left)}>
                                                <h6
                                                    className={`${styles[`heading-small`]} ${
                                                        styles['text-muted']
                                                    } mb-4`}
                                                >
                                                    Avatar
                                                </h6>
                                                <div className={styles.avatar} id="avatar">
                                                    <div id="preview" className={styles.preview}>
                                                        {info.fields.HinhAnh && (
                                                            <img
                                                                src={info.fields.HinhAnh}
                                                                id="avatar-image"
                                                                className={styles.avatarImage}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className={styles.avatarUpload}>
                                                        <label className={styles.uploadLabel}>
                                                            Upload
                                                            <input
                                                                type="file"
                                                                id="upload"
                                                                className={styles.upload}
                                                                value={fileAvt}
                                                                ref={fileInputAvt}
                                                                onChange={(e) => handleChangeAvt(e)}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={clsx(styles.form__left)}>
                                                <h6
                                                    className={`${styles[`heading-small`]} ${
                                                        styles['text-muted']
                                                    } mb-4`}
                                                >
                                                    QR-PAY
                                                </h6>
                                                <div className={clsx(styles.avatar, styles.qr)} id="avatar">
                                                    <div id="preview" className={styles.preview}>
                                                        {info.fields.anhQR && (
                                                            <img
                                                                src={info.fields.anhQR}
                                                                id="avatar-image"
                                                                className={styles.avatarImage}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className={styles.avatarUpload}>
                                                        <label className={styles.uploadLabel}>
                                                            Upload
                                                            <input
                                                                type="file"
                                                                id="upload"
                                                                className={styles.upload}
                                                                value={fileQr}
                                                                ref={fileInputQr}
                                                                onChange={(e) => handleChangeQr(e)}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.form__right}>
                                        <h6 className={`${styles[`heading-small`]} ${styles['text-muted']} mb-4`}>
                                            Thông tin cá nhân
                                        </h6>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Họ tên <sup>*</sup>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={info.fields.HoTen}
                                                    onChange={(e) => handleChange(e, 'HoTen')}
                                                />
                                                <span className={styles.form__error}>{info.errors.HoTen}</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Email <sup>*</sup>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={info.fields.Email}
                                                    onChange={(e) => handleChange(e, 'Email')}
                                                />
                                                <span className={styles.form__error}>{info.errors.Email}</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Số điện thoại <sup>*</sup>
                                                </span>
                                                <input
                                                    type="number"
                                                    value={info.fields.SoDienThoai}
                                                    onChange={(e) => handleChange(e, 'SoDienThoai')}
                                                />
                                                <span className={styles.form__error}>{info.errors.SoDienThoai}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={clsx(styles.form__part)}>
                                    <div className={styles.form__left}>
                                        <h6 className={`${styles[`heading-small`]} ${styles['text-muted']} mb-4`}>
                                            Thông tin công ty
                                        </h6>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Tên công ty <sup>*</sup>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={info.fields.TenCongTy}
                                                    onChange={(e) => handleChange(e, 'TenCongTy')}
                                                />
                                                <span className={styles.form__error}>{info.errors.TenCongTy}</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Mã số thuế <sup>*</sup>
                                                </span>
                                                <input
                                                    type="number"
                                                    value={info.fields.MaSoThue}
                                                    onChange={(e) => handleChange(e, 'MaSoThue')}
                                                />
                                                <span className={styles.form__error}>{info.errors.MaSoThue}</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Quy mô <sup>*</sup>
                                                </span>
                                                <Select
                                                    className={`col-5 ${styles.select}`}
                                                    value={{ value: info.fields.QuyMo, label: info.fields.QuyMo }}
                                                    options={options.current}
                                                    onChange={(e) => handleChange(e, 'QuyMo')}
                                                />
                                                <span className={styles.form__error}>{info.errors.QuyMo}</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Địa chỉ <sup>*</sup>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={info.fields.DiaChi}
                                                    onChange={(e) => handleChange(e, 'DiaChi')}
                                                />
                                                <span className={styles.form__error}>{info.errors.DiaChi}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.form__right}>
                                        <h6 className={`${styles[`heading-small`]} ${styles['text-muted']} mb-4`}>
                                            Tài khoản ngân hàng
                                        </h6>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Tên ngân hàng <sup>*</sup>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={info.fields.TenNganHang}
                                                    onChange={(e) => handleChange(e, 'TenNganHang')}
                                                />
                                                <span className={styles.form__error}>{info.errors.TenNganHang}</span>
                                            </div>
                                        </div>
                                        <div className={styles.form__left}>
                                            <div className={clsx(styles.form__part)}>
                                                <div className={styles.form__input}>
                                                    <span className={styles.title}>
                                                        Chủ tài khoản <sup>*</sup>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={info.fields.HoTenTK}
                                                        onChange={(e) => handleChange(e, 'HoTenTK')}
                                                    />
                                                    <span className={styles.form__error}>{info.errors.HoTenTK}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.form__part)}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Số tài khoản <sup>*</sup>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={info.fields.SoTaiKhoan}
                                                    onChange={(e) => handleChange(e, 'SoTaiKhoan')}
                                                />
                                                <span className={styles.form__error}>{info.errors.SoTaiKhoan}</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.form__part, 'form')}>
                                            <div className={styles.form__input}>
                                                <span className={styles.title}>
                                                    Ngày hết hạn <sup>*</sup>
                                                </span>
                                                <DatePicker
                                                    locale={vi}
                                                    dateFormat="dd/MM/yyyy"
                                                    className={clsx({ [styles.error]: info.errors.NgayHetHan })}
                                                    selected={new Date(info.fields.NgayHetHan)}
                                                    onChange={(e) => handleChange(e, 'NgayHetHan')}
                                                />
                                                <span className={styles.form__error}>{info.errors.NgayHetHan}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.btn} onClick={handleSubmit}>
                                    Lưu
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Thông báo thành công */}
            {showInformModal && (
                <div id="myModal" className="myModal1">
                    {/* <!-- Modal content --> */}
                    <div className="modalContent">
                        <FontAwesomeIcon icon={faCheckCircle} className="modalIcon" />
                        <div>Thao tác thành công</div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProfileHotelier
