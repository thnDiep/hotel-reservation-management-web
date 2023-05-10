import React, { useEffect, useState } from 'react'
import classes from './RegisterPartner.module.scss'
import { ButtonPrimary } from '~/components'
import axios from 'axios'
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
    const [selectedValue, setSelectedValue] = useState()
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
                if (enteredEmail.value.length === 0) {
                    setEnteredEmail({ ...enteredEmail, error: 'Thông tin bắt buộc' })
                } else if (!filter.test(enteredEmail.value)) {
                    setEnteredEmail({ ...enteredEmail, error: 'Email không đúng ' })
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
        //const filter = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
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
        document.querySelector('input[type="radio"]').checked = !selectedOption
    }
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value)
    }
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (enteredNameCompany.value.length === 0) {
            setEnteredNameCompany({ ...enteredNameCompany, error: 'Thông tin bắt buộc' })
        }
        if (enteredAddress.value.length === 0) {
            setEnteredAddress({ ...enteredAddress, error: 'Thông tin bắt buộc' })
        }
        if (enteredTaxCode.value.length === 0) {
            setEnteredTaxCode({ ...enteredTaxCode, error: 'Thông tin bắt buộc' })
        }
        if (enteredUserName.value.length === 0) {
            setEnteredUserName({ ...enteredUserName, error: 'Thông tin bắt buộc' })
        }
        if (enteredPhoneNumber.value.length === 0) {
            setEnteredPhoneNumber({ ...enteredPhoneNumber, error: 'Thông tin bắt buộc' })
        }
        if (enteredEmail.value.length === 0) {
            setEnteredEmail({ ...enteredEmail, error: 'Thông tin bắt buộc' })
        }
        if (enteredPass.value.length === 0) {
            setEnteredPass({ ...enteredPass, error: 'Thông tin bắt buộc' })
        }
        if (enteredRePass.value.length === 0) {
            setEnteredRePass({ ...enteredRePass, error: 'Thông tin bắt buộc' })
        }
        try {
            const res = await axios.post('auth/signUp', {
                HoTen: enteredUserName.value,
                TenCongTy: enteredNameCompany.value,
                DiaChi: enteredAddress.value,
                QuyMo: selectedValue,
                Email: enteredEmail.value,
                MatKhau: enteredPass.value,
                SoDienThoai: enteredPhoneNumber.value,
                PhanQuyen: 1,
                MaSoThue: enteredTaxCode.value,
            })
        } catch (err) {
            console.log(err)
            console.log('sai')
        }
    }

    return (
        <form>
            <div className={`${classes.myContainer}`}>
                <div className={` ${classes.myContainer1}`}>
                    <div className="d-flex justify-content-between align-items-start">
                        <div className={`d-none d-xl-block ${classes.left}`}>
                            <p className={classes.sloganMain}>mytravel for business</p>
                            <div>
                                <p className={classes.slogan}>Giải pháp hiệu quả số 1 trong quản lý công tác phí</p>
                            </div>
                        </div>
                        <div className={`${classes.right}`}>
                            <div className=" text-black">
                                <h3 className="mb-3 text-uppercase ">Đăng ký tài khoản</h3>

                                <div className={classes.twoCol}>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1}`}>
                                        <span className={classes.label}>
                                            Tên công ty <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="text"
                                                    name="nameCompany"
                                                    value={enteredNameCompany.value}
                                                    className={`${
                                                        enteredNameCompany.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={nameCompanyChangeHandler}
                                                    placeholder="Nhập tên công ty"
                                                />
                                            </div>
                                            <p className={classes.error}>{enteredNameCompany.error}</p>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol2}`}>
                                        <span className={classes.label}>
                                            Quy mô <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <select className={classes.inputName} onChange={handleSelectChange}>
                                                <option value="">Hãy chọn quy mô</option>
                                                <option value="1 - 19 nhân viên">1 - 19 nhân viên</option>
                                                <option value="20 - 49 nhân viên">20 - 49 nhân viên</option>
                                                <option value="50 - 99 nhân viên">50 - 99 nhân viên</option>
                                                <option value="100 - 199 nhân viên">100 - 199 nhân viên</option>
                                                <option value="200 - 499 nhân viên">200 - 499 nhân viên</option>
                                                <option value="500 - 1000 nhân viên">500 - 1000 nhân viên</option>
                                            </select>
                                            <p className={`${classes.space} ${classes.error}`}>.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.twoCol}>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1}`}>
                                        <span className={classes.label}>
                                            Địa chỉ <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    value={enteredAddress.value}
                                                    className={`${
                                                        enteredAddress.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={addressChangeHandler}
                                                    placeholder="Nhập địa chỉ"
                                                />
                                            </div>
                                            <p className={classes.error}>{enteredAddress.error}</p>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol2}`}>
                                        <span className={classes.label}>
                                            Mã số thuế <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="text"
                                                    name="tax"
                                                    value={enteredTaxCode.value}
                                                    className={`${
                                                        enteredTaxCode.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={taxCodeChangeHandler}
                                                    placeholder="Nhập mã số thuế"
                                                />
                                            </div>
                                            <p className={classes.error}> {enteredTaxCode.error}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.twoCol}>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1}`}>
                                        <span className={classes.label}>
                                            Họ và tên <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="text"
                                                    name="contactUser"
                                                    value={enteredUserName.value}
                                                    className={`${
                                                        enteredUserName.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={useNameChangeHandler}
                                                    placeholder="Nhập Họ và tên"
                                                />
                                            </div>
                                            <p className={classes.error}>{enteredUserName.error}</p>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1}`}>
                                        <span className={classes.label}>
                                            Số điện thoại <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={enteredPhoneNumber.value}
                                                    className={`${
                                                        enteredPhoneNumber.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={phoneNumberChangeHandler}
                                                    placeholder="Nhập số điện thoại"
                                                />
                                            </div>
                                            <p className={classes.error}> {enteredPhoneNumber.error}</p>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1}`}>
                                        <span className={classes.label}>
                                            Email <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    value={enteredEmail.value}
                                                    className={`${
                                                        enteredEmail.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={emailChangeHandler}
                                                    placeholder="Nhập địa chỉ email"
                                                />
                                            </div>
                                            <p className={classes.error}> {enteredEmail.error}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.twoCol}>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1}`}>
                                        <span className={classes.label}>
                                            Mật khẩu <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="password"
                                                    name="pass"
                                                    value={enteredPass.value}
                                                    className={`${
                                                        enteredPass.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={passChangeHandler}
                                                    placeholder="******"
                                                />
                                            </div>
                                            <p className={classes.error}>{enteredPass.error}</p>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1} `}>
                                        <span className={classes.label}>
                                            Nhập lại mật khẩu <span className={classes.important}>*</span>
                                        </span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="password"
                                                    name="rePass"
                                                    value={enteredRePass.value}
                                                    className={`${
                                                        enteredRePass.error !== '' && classes.lineUnderWhenError
                                                    }`}
                                                    onChange={rePassChangeHandler}
                                                    placeholder="******"
                                                />
                                            </div>
                                            <p className={classes.error}> {enteredRePass.error}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.twoCol}>
                                    <div className={`d-flex flex-column align-items-start ${classes.twoCol1} `}>
                                        <span className={classes.label}>Số điện thoại người giới thiệu</span>
                                        <div className={classes.input}>
                                            <div className={classes.inputName}>
                                                <input
                                                    type="text"
                                                    name="introducedPhone"
                                                    value={enteredIntroducedPhoneNumber.value}
                                                    className={`${
                                                        enteredIntroducedPhoneNumber.error !== '' &&
                                                        classes.lineUnderWhenError
                                                    }`}
                                                    onChange={introducedPhoneNumberChangeHandler}
                                                />
                                            </div>
                                            <p className={classes.error}>{enteredIntroducedPhoneNumber.error}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-outline  ">
                                    <input type="radio" onClick={handleOptionChange} onChange={handleOptionChange} />
                                    <span className={classes.agree}>
                                        <label className="form-label ml-5">
                                            Tôi đồng ý với các điều khoản và điều kiện của doanh nghiệp
                                        </label>
                                    </span>
                                </div>

                                <div className="d-flex justify-content-start pt-1 mx-0">
                                    <ButtonPrimary
                                        type="button"
                                        onSubmit={handleSubmit}
                                        className="btnLarge4"
                                        disabled={!selectedOption}
                                    >
                                        Gửi thông tin đăng ký
                                    </ButtonPrimary>
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
