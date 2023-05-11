import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './signUp.module.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const [data, setData] = useState(() => {
        return { name: '', email: '', pass: '', isValid: false }
    })
    const [email, setEmail] = useState(() => {
        return { value: '', error: ' ', isValid: false }
    })
    const [valid, setValid] = useState(false)

    const Nav = useNavigate()
    useEffect(() => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (data.isValid === true) {
            const identifier = setTimeout(() => {
                if (!filter.test(data.email)) {
                    setEmail({ ...email, error: 'Email không đúng định dạng' })
                    setValid(false)
                } else if (data.email.length === 0) {
                    setEmail({ ...email, error: 'Thông tin bắt buộc' })
                    setValid(false)
                } else {
                    setEmail({ ...email, error: ' ' })
                    setValid(true)
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [data.email])

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8800/auth/signup', {
                HoTen: data.name,
                Email: data.email,
                MatKhau: data.pass,
                PhanQuyen:0,
            })
            Nav('/login')
        } catch (err) {
            console.log(err.response.data)
            console.log('sai')
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
                        <label htmlFor="field-name" className={styles.label}>
                            Họ tên
                            <span>*</span>
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="name"
                                type="text"
                                placeholder="Tên người dùng"
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>
                            Email
                            <span>*</span>
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="email"
                                type="text"
                                placeholder="Nhập email"
                                onChange={(e) => setData({ ...data, email: e.target.value, isValid: true })}
                            />
                        </div>
                        <p className={styles.err}>{email.error}</p>
                    </div>

                    <div>
                        <label htmlFor="field-password" className={styles.label2}>
                            Mật khẩu
                            <span>*</span>
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-password"
                                name="password"
                                type="text"
                                placeholder="Nhập mật khẩu"
                                onChange={(e) => setData({ ...data, pass: e.target.value })}
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
