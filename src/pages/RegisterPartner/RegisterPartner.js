import React, { useEffect, useState } from 'react'
import classes from './RegisterPartner.module.scss'
const RegisterPartner = () => {
    const [enteredNameCompany, setEnteredNameCompany] = useState(() => {
        return { value: '', error: '' }
    })
    const [enteredAddress, setEnteredAddress] = useState('')
    const [enteredTaxCode, setEnteredTaxCode] = useState('')
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('')
    const [enteredEmail, setEnteredEmail] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredPass, setEnteredPass] = useState('')
    const [enteredRePass, setEnteredRePass] = useState('')
    const [enteredIntroducedPhoneNumber, setEnteredIntroducedPhoneNumber] = useState('')

    useEffect(() => {
        if (enteredEmail.isValid === true) {
            const identifier = setTimeout(() => {
                if (!enteredEmail.value.includes('@') && enteredEmail.value.trim().length > 0) {
                    setEnteredEmail({ ...enteredEmail, error: 'Email không đúng định dạng' })
                } else if (enteredEmail.value.trim().length === 0) {
                    setEnteredEmail({ ...enteredEmail, error: 'Thông tin bắt buộc' })
                } else {
                    setEnteredEmail({ ...enteredEmail, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [
        enteredNameCompany,
        enteredAddress,
        enteredTaxCode,
        enteredUserName,
        enteredPhoneNumber,
        enteredEmail.value,
        enteredPass,
        enteredRePass,
        enteredIntroducedPhoneNumber,
    ])

    const nameCompanyChangeHandler = (event) => {
        setEnteredNameCompany(event.target.value)
    }
    const addressChangeHandler = (event) => {
        setEnteredAddress(event.target.value)
    }
    const taxCodeChangeHandler = (event) => {
        setEnteredTaxCode(event.target.value)
    }
    const useNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const phoneNumberChangeHandler = (event) => {
        setEnteredPhoneNumber(event.target.value)
    }
    const emailChangeHandler = (event) => {
        setEnteredEmail({ value: event.target.value, error: '', isValid: true })
    }
    const passChangeHandler = (event) => {
        setEnteredPass(event.target.value)
    }
    const rePassChangeHandler = (event) => {
        setEnteredRePass(event.target.value)
    }
    const introducedPhoneNumberChangeHandler = (event) => {
        setEnteredIntroducedPhoneNumber(event.target.value)
    }
    return (
        <form>
            <div className={`container h-60 ${classes.myContainer}`}>
                <div className="row d-flex justify-content-center align-items-center h-60">
                    <div className="col">
                        <div className="card card-registration my-4 border-light">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img
                                        src="https://agents.mytour.vn/static/media/bg_banner.88ef9b28.svg"
                                        alt="Sample photo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase ">Đăng ký tài khoản</h3>

                                        <div className="row">
                                            <div className="col-md-7 mb-4">
                                                <div className="form-outline">
                                                    <label className={`form-label ${classes.nameCompany}`}>
                                                        Tên Công Ty
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1m"
                                                        className="form-control form-control-lg"
                                                        placeholder="Nhập tên công ty "
                                                        value={enteredNameCompany}
                                                        onChange={nameCompanyChangeHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-5 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Quy mô</label>
                                                    <select className="form-select  ">
                                                        <option value="1">1 - 19 nhân viên</option>
                                                        <option value="2">20 - 49 nhân viên</option>
                                                        <option value="3">50 - 99 nhân viên</option>
                                                        <option value="4">100 - 199 nhân viên</option>
                                                        <option value="5">200 - 499 nhân viên</option>
                                                        <option value="6">500 - 1000 nhân viên</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Địa chỉ</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1m1"
                                                        className="form-control form-control-lg"
                                                        placeholder="Nhập địa chỉ "
                                                        value={enteredAddress}
                                                        onChange={addressChangeHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-5 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Mã số thuế</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1n1"
                                                        className="form-control form-control-lg"
                                                        placeholder="Nhập mã số thuế "
                                                        value={enteredTaxCode}
                                                        onChange={taxCodeChangeHandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Tên người liên hệ</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1m1"
                                                        className="form-control form-control-lg"
                                                        placeholder="Nhập tên người liên hệ "
                                                        value={enteredUserName}
                                                        onChange={useNameChangeHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Số điện thoại</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1n1"
                                                        className="form-control form-control-lg"
                                                        placeholder="Nhập số điện thoại "
                                                        value={enteredPhoneNumber}
                                                        onChange={phoneNumberChangeHandler}
                                                    />
                                                    <span className={`errorPhoneNum ${classes.err}`}></span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1n1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1n1"
                                                        className="form-control form-control-lg"
                                                        placeholder="Nhập địa chỉ email "
                                                        value={enteredEmail.value}
                                                        onChange={emailChangeHandler}
                                                    />
                                                    <span
                                                        id="error"
                                                        className={`${classes.errorEmail}  ${classes.err}`}
                                                    >
                                                        {enteredEmail.error}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Mật khẩu</label>
                                                    <input
                                                        type="password"
                                                        id="form3Example1m1"
                                                        className="form-control form-control-lg"
                                                        placeholder="******"
                                                        value={enteredPass}
                                                        onChange={passChangeHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Nhập lại mật khẩu</label>
                                                    <input
                                                        type="password"
                                                        id="form3Example1n1"
                                                        className="form-control form-control-lg"
                                                        placeholder="******"
                                                        value={enteredRePass}
                                                        onChange={rePassChangeHandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Số điện thoại người giới thiệu</label>
                                            <input
                                                type="text"
                                                id="form3Example8"
                                                className="form-control form-control-lg"
                                                placeholder="Nhập số điện thoại "
                                                value={enteredIntroducedPhoneNumber}
                                                onChange={introducedPhoneNumberChangeHandler}
                                            />
                                        </div>

                                        <div className="form-outline mb-4 mt-3">
                                            <input type="radio" />
                                            <span className={classes.agree}>
                                                <label className="form-label ml-5">
                                                    Tôi đồng ý với các điều khoản và điều kiện của doanh nghiệp
                                                </label>
                                            </span>
                                        </div>

                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-warning btn-lg ms-2">
                                                Gửi thông tin đăng ký
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default RegisterPartner
