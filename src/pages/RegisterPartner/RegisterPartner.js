import React, { useEffect, useState } from 'react'
import classes from './RegisterPartner.module.scss'
const RegisterPartner = () => {
    const [enteredNameCompany, setEnteredNameCompany] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredAddress, setEnteredAddress] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredTaxCode, setEnteredTaxCode] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredUserName, setEnteredUserName] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredEmail, setEnteredEmail] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredPass, setEnteredPass] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredRePass, setEnteredRePass] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredIntroducedPhoneNumber, setEnteredIntroducedPhoneNumber] = useState(() => {
        return { value: '', error: '', isValid: false }
    })

    const [selectedOption, setSelectedOption] = useState(false)

    useEffect(() => {
        if (enteredIntroducedPhoneNumber.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredIntroducedPhoneNumber.value.length < 10 || enteredIntroducedPhoneNumber >= 1) {
                    setEnteredIntroducedPhoneNumber({ ...enteredIntroducedPhoneNumber, error: 'Độ dài cần 8-10 kí tự' })
                } else {
                    setEnteredIntroducedPhoneNumber({ ...enteredIntroducedPhoneNumber, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredIntroducedPhoneNumber.value])

    useEffect(() => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (enteredEmail.isValid === true) {
            const identifier = setTimeout(() => {
                if (!filter.test(enteredEmail.value)) {
                    setEnteredEmail({ ...enteredEmail, error: 'Email không đúng ' })
                } else if (enteredEmail.value.length === 0) {
                    setEnteredEmail({ ...enteredEmail, error: 'Thông tin bắt buộc' })
                } else {
                    setEnteredEmail({ ...enteredEmail, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredEmail.value])

    useEffect(() => {
        if (enteredPhoneNumber.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredPhoneNumber.value.length === 0) {
                    setEnteredPhoneNumber({ ...enteredPhoneNumber, error: 'Thông tin bắt buộc' })
                } else if (enteredPhoneNumber.value.length < 10 || enteredPhoneNumber >= 1) {
                    setEnteredPhoneNumber({ ...enteredPhoneNumber, error: 'Độ dài cần 8-10 kí tự' })
                } else {
                    setEnteredPhoneNumber({ ...enteredPhoneNumber, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredPhoneNumber.value])

    useEffect(() => {
        if (enteredPass.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredPass.value.length === 0) {
                    setEnteredPass({ ...enteredPass, error: 'Thông tin bắt buộc' })
                } else if (enteredPass.value.length < 8 || enteredPhoneNumber >= 1) {
                    setEnteredPass({ ...enteredPass, error: 'Mật khẩu chứa ít nhất 8 kí tự' })
                } else {
                    setEnteredPass({ ...enteredPass, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredPass.value])

    useEffect(() => {
        if (enteredRePass.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredRePass.value.length === 0) {
                    setEnteredRePass({ ...enteredRePass, error: 'Thông tin bắt buộc' })
                } else if (enteredRePass.value !== enteredPass.value) {
                    setEnteredRePass({ ...enteredRePass, error: 'Mật khẩu không khớp' })
                } else {
                    setEnteredRePass({ ...enteredRePass, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredRePass.value])

    useEffect(() => {
        if (enteredNameCompany.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredNameCompany.value.length === 0) {
                    setEnteredNameCompany({ ...enteredNameCompany, error: 'Thông tin bắt buộc' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredNameCompany.value])

    useEffect(() => {
        if (enteredAddress.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredAddress.value.length === 0) {
                    setEnteredAddress({ ...enteredAddress, error: 'Thông tin bắt buộc' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredAddress.value])

    useEffect(() => {
        if (enteredTaxCode.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredTaxCode.value.length === 0) {
                    setEnteredTaxCode({ ...enteredTaxCode, error: 'Thông tin bắt buộc' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredTaxCode.value])

    useEffect(() => {
        if (enteredUserName.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredUserName.value.length === 0) {
                    setEnteredUserName({ ...enteredUserName, error: 'Thông tin bắt buộc' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredUserName.value])

    const nameCompanyChangeHandler = (event) => {
        setEnteredNameCompany({ value: event.target.value, error: '', isValid: true })
    }
    const addressChangeHandler = (event) => {
        setEnteredAddress({ value: event.target.value, error: '', isValid: true })
    }
    const taxCodeChangeHandler = (event) => {
        setEnteredTaxCode({ value: event.target.value, error: '', isValid: true })
    }
    const useNameChangeHandler = (event) => {
        setEnteredUserName({ value: event.target.value, error: '', isValid: true })
    }
    const phoneNumberChangeHandler = (event) => {
        setEnteredPhoneNumber({ value: event.target.value, error: '', isValid: true })
    }
    const emailChangeHandler = (event) => {
        setEnteredEmail({ value: event.target.value, error: '', isValid: true })
    }
    const passChangeHandler = (event) => {
        setEnteredPass({ value: event.target.value, error: '', isValid: true })
    }
    const rePassChangeHandler = (event) => {
        setEnteredRePass({ value: event.target.value, error: '', isValid: true })
    }
    const introducedPhoneNumberChangeHandler = (event) => {
        setEnteredIntroducedPhoneNumber({ value: event.target.value, error: '', isValid: true })
    }
    const handleOptionChange = () => {
        setSelectedOption(!selectedOption)
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
                                            <div className="col-md-7">
                                                <div className="form-outline">
                                                    <label className={`form-label ${classes.nameCompany}`}>
                                                        Tên Công Ty
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1m"
                                                        className={`form-control form-control-lg ${
                                                            enteredNameCompany.error !== '' &&
                                                            classes.lineUnderWhenError
                                                        }`}
                                                        placeholder="Nhập tên công ty "
                                                        value={enteredNameCompany.value}
                                                        onChange={nameCompanyChangeHandler}
                                                    />
                                                    <span
                                                        id="error"
                                                        className={`${classes.errorEmail}  ${classes.err}`}
                                                    >
                                                        {enteredNameCompany.error}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
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
                                            <div className="col-md-7 ">
                                                <div className="form-outline">
                                                    <label className="form-label">Địa chỉ</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1m1"
                                                        className={`form-control form-control-lg ${
                                                            enteredAddress.error !== '' && classes.lineUnderWhenError
                                                        }`}
                                                        placeholder="Nhập địa chỉ "
                                                        value={enteredAddress.value}
                                                        onChange={addressChangeHandler}
                                                    />
                                                    <span
                                                        id="error"
                                                        className={`${classes.errorEmail}  ${classes.err}`}
                                                    >
                                                        {enteredAddress.error}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="form-outline">
                                                    <label className="form-label">Mã số thuế</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1n1"
                                                        className={`form-control form-control-lg ${
                                                            enteredTaxCode.error !== '' && classes.lineUnderWhenError
                                                        }`}
                                                        placeholder="Nhập mã số thuế "
                                                        value={enteredTaxCode.value}
                                                        onChange={taxCodeChangeHandler}
                                                    />
                                                    <span
                                                        id="error"
                                                        className={`${classes.errorEmail}  ${classes.err}`}
                                                    >
                                                        {enteredTaxCode.error}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4 ">
                                                <div className="form-outline">
                                                    <label className="form-label">Tên người liên hệ</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1m1"
                                                        className={`form-control form-control-lg ${
                                                            enteredUserName.error !== '' && classes.lineUnderWhenError
                                                        }`}
                                                        placeholder="Nhập tên người liên hệ "
                                                        value={enteredUserName.value}
                                                        onChange={useNameChangeHandler}
                                                    />
                                                    <span
                                                        id="error"
                                                        className={`${classes.errorEmail}  ${classes.err}`}
                                                    >
                                                        {enteredUserName.error}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="form-outline">
                                                    <label className="form-label">Số điện thoại</label>
                                                    <input
                                                        type="tel"
                                                        id="phoneInput"
                                                        className={`form-control form-control-lg ${
                                                            enteredPhoneNumber.error !== '' &&
                                                            classes.lineUnderWhenError
                                                        }`}
                                                        placeholder="Nhập số điện thoại "
                                                        value={enteredPhoneNumber.value}
                                                        onChange={phoneNumberChangeHandler}
                                                    />
                                                    <span className={`${classes.err}`}>{enteredPhoneNumber.error}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1n1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="emailInput"
                                                        className={`form-control form-control-lg ${
                                                            enteredEmail.error !== '' && classes.lineUnderWhenError
                                                        }`}
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
                                            <div className="col-md-6 ">
                                                <div className="form-outline">
                                                    <label className="form-label">Mật khẩu</label>
                                                    <input
                                                        type="password"
                                                        id="form3Example1m1"
                                                        className={`form-control form-control-lg ${
                                                            enteredPass.error !== '' && classes.lineUnderWhenError
                                                        }`}
                                                        placeholder="******"
                                                        value={enteredPass.value}
                                                        onChange={passChangeHandler}
                                                    />
                                                    <span
                                                        id="error"
                                                        className={`${classes.errorEmail}  ${classes.err}`}
                                                    >
                                                        {enteredPass.error}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ">
                                                <div className="form-outline">
                                                    <label className="form-label">Nhập lại mật khẩu</label>
                                                    <input
                                                        type="password"
                                                        id="form3Example1n1"
                                                        className={`form-control form-control-lg ${
                                                            enteredRePass.error !== '' && classes.lineUnderWhenError
                                                        }`}
                                                        placeholder="******"
                                                        value={enteredRePass.value}
                                                        onChange={rePassChangeHandler}
                                                    />
                                                    <span
                                                        id="error"
                                                        className={`${classes.errorEmail}  ${classes.err}`}
                                                    >
                                                        {enteredRePass.error}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline ">
                                            <label className="form-label">Số điện thoại người giới thiệu</label>
                                            <input
                                                type="text"
                                                id="form3Example8"
                                                className={`form-control form-control-lg ${
                                                    enteredIntroducedPhoneNumber.error !== '' &&
                                                    classes.lineUnderWhenError
                                                }`}
                                                placeholder="Nhập số điện thoại "
                                                value={enteredIntroducedPhoneNumber.value}
                                                onChange={introducedPhoneNumberChangeHandler}
                                            />
                                            <span id="error" className={`${classes.errorEmail}  ${classes.err}`}>
                                                {enteredIntroducedPhoneNumber.error}
                                            </span>
                                        </div>

                                        <div className="form-outline  mt-3">
                                            <input type="radio" onClick={handleOptionChange} checked={selectedOption} />
                                            <span className={classes.agree}>
                                                <label className="form-label ml-5">
                                                    Tôi đồng ý với các điều khoản và điều kiện của doanh nghiệp
                                                </label>
                                            </span>
                                        </div>

                                        <div className="d-flex justify-content-end pt-3">
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-lg ms-2"
                                                disabled={!selectedOption}
                                            >
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
