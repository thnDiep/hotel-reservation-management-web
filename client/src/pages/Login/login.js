import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './login.module.scss'
import { useNavigate } from 'react-router-dom'

function Login() {
    const Nav = useNavigate()
    const data = JSON.parse(localStorage.getItem('identification'))
    const [valid, setValid] = useState(false)

    const [email, setEmail] = useState(() => {
        return { value: '', error: ' ', isValid: false }
    })

    useEffect(() => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (email.isValid === true) {
            const identifier = setTimeout(() => {
                if (!filter.test(email.value)) {
                    setEmail({ ...email, error: 'Email không đúng ' })
                    setValid(false)
                } else if (email.value.length === 0) {
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
    }, [email.value])

    function handleLogin() {
        if (valid) {
            Nav('/')
        }
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.introduction}>
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
                <p className={styles.title1}>Welcome back!</p>
                <p className={styles.title2}>Solution for a great trip</p>
                <img
                    className={styles.image}
                    src="https://travl.dexignlab.com/react/demo/static/media/pic1.5182ad472b66273c2b70.png"
                />
            </div>
            <div className={styles.triangleDown}></div>
            <div className={styles.triangleUp}></div>
            <div className={styles.login}>
                <div>
                    <p className={styles.title}>Đăng nhập vào tài khoản</p>
                    <div>
                        <label className={styles.label}>
                            Email hoặc số điện thoại
                            <span>*</span>
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="email"
                                type="text"
                                placeholder="Nhập email"
                                onChange={(e) => setEmail({ ...email, value: e.target.value, isValid: true })}
                            />
                        </div>
                        <p className={styles.err}>{email.error}</p>
                    </div>
                    <div>
                        <label className={styles.label}>
                            Mật khẩu
                            <span>*</span>
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="password"
                                type="password"
                                placeholder="Nhập mật khẩu"
                            />
                        </div>
                    </div>

                    <button onClick={handleLogin} className={styles.loginBtn}>
                        Đăng nhập
                    </button>

                    <p className={styles.title3}>
                        <p>
                            <a className={styles.ggLink}>Đăng nhập bằng Google</a>
                        </p>
                        Bạn không có tài khoản?
                        <NavLink to="/signUp">
                            <span className={styles.signUpLink}>Đăng ký</span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
