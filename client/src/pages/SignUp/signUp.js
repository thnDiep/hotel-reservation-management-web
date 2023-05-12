import { useState, useEffect, isValidElement } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './signUp.module.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const [data, setData] = useState(() => {
        // name: giá trị input, nameValid: đánh dấu người dùng nhập vào
        return {
            name: '',
            phoneNumber: '',
            email: '',
            pass: '',
            nameValid: false,
            phoneNumberValid: false,
            emailValid: false,
            passValid: false,
        }
    })
    const [err, setErr] = useState(() => {
        // thông báo lỗi của mỗi input
        return { name: ' ', phoneNumber: ' ', email: ' ', pass: ' ' }
    })

    const Nav = useNavigate()

    useEffect(() => {
        if (data.nameValid === true) {
            const identifier = setTimeout(() => {
                if (data.name.length === 0) {
                    setErr({ ...err, name: 'Thông tin bắt buộc' })
                } else {
                    setErr({ ...err, name: ' ' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [data.name])

    useEffect(() => {
        if (data.phoneNumberValid === true) {
            const identifier = setTimeout(() => {
                if (data.phoneNumber.length === 0) {
                    setErr({ ...err, phoneNumber: 'Thông tin bắt buộc' })
                } else {
                    setErr({ ...err, phoneNumber: ' ' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [data.phoneNumber])

    useEffect(() => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (data.emailValid === true) {
            const identifier = setTimeout(() => {
                if (data.email.length === 0) {
                    setErr({ ...err, email: 'Thông tin bắt buộc' })
                } else if (!filter.test(data.email)) {
                    setErr({ ...err, email: 'Email không đúng định dạng' })
                } else {
                    setErr({ ...err, email: ' ' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [data.email])

    useEffect(() => {
        if (data.passValid === true) {
            const identifier = setTimeout(() => {
                if (data.pass.length === 0) {
                    setErr({ ...err, pass: 'Thông tin bắt buộc' })
                } else {
                    setErr({ ...err, pass: ' ' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [data.pass])

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            if (
                data.nameValid &&
                data.emailValid &&
                data.phoneNumberValid &&
                data.passValid &&
                err.name == ' ' &&
                err.phoneNumber == ' ' &&
                err.email == ' ' &&
                err.name == ' '
            ) {
                const res = await axios.post('http://localhost:8800/auth/signup', {
                    HoTen: data.name,
                    SoDienThoai: data.phoneNumber,
                    Email: data.email,
                    MatKhau: data.pass,
                    PhanQuyen: 0,
                })
                Nav('/login')
            }
        } catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <div className={styles.infoWeb}>
                    <img
                        className={styles.logo}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMgiTOs33abnEsiYTsqGrPaj5JsZJOjS-gQ&usqp=CAU"
                    />
                    <div>
                        <p className={styles.nameOfWeb}>MyTravel</p>
                        <p className={styles.description}>Hotels at your fingertips</p>
                    </div>
                </div>

                <p className={styles.title1}>Đăng ký tài khoản</p>
                <div>
                    <div>
                        <div className="d-flex align-items-end">
                            <label htmlFor="field-name" className={styles.label}>
                                Họ tên
                                <span>*</span>
                            </label>
                            <p className={styles.err}>{err.name}</p>
                        </div>

                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="name"
                                type="text"
                                placeholder="Nhập tên người dùng"
                                onChange={(e) => setData({ ...data, name: e.target.value, nameValid: true })}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="d-flex align-items-end">
                            <label htmlFor="field-name" className={styles.label}>
                                Số điện thoại
                                <span>*</span>
                            </label>
                            <p className={styles.err}>{err.phoneNumber}</p>
                        </div>

                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="name"
                                type="text"
                                placeholder="Nhập số điện thoại"
                                onChange={(e) =>
                                    setData({ ...data, phoneNumber: e.target.value, phoneNumberValid: true })
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <div className="d-flex align-items-end">
                            <label className={styles.label}>
                                Email
                                <span>*</span>
                            </label>
                            <p className={styles.err}>{err.email}</p>
                        </div>

                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="email"
                                type="text"
                                placeholder="Nhập email"
                                onChange={(e) => setData({ ...data, email: e.target.value, emailValid: true })}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="d-flex align-items-end">
                            <label htmlFor="field-password" className={styles.label}>
                                Mật khẩu
                                <span>*</span>
                            </label>
                            <p className={styles.err}>{err.pass}</p>
                        </div>

                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-password"
                                name="password"
                                type="text"
                                placeholder="Nhập mật khẩu"
                                onChange={(e) => setData({ ...data, pass: e.target.value, passValid: true })}
                            />
                        </div>
                    </div>
                </div>

                <button className={styles.loginBtn} onClick={handleClick}>
                    Đăng ký
                </button>

                <p className={styles.title2}>
                    Đã có tài khoản?
                    <NavLink to="/logIn">
                        <span className={styles.signUpLink}>Đăng nhập</span>
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default SignUp
