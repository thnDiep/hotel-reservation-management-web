import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './signUp.module.scss'
import axios from "axios";
function SignUp() {
    const [email, setEmail] = useState(() => {
        return { value: '', error: ' ', isValid: false }
    })
    useEffect(() => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (email.isValid === true) {
            const identifier = setTimeout(() => {
                if (!filter.test(email.value)) {
                    setEmail({ ...email, error: 'Email không đúng định dạng' })
                } else if (email.value.length === 0) {
                    setEmail({ ...email, error: 'Thông tin bắt buộc' })
                } else {
                    setEmail({ ...email, error: ' ' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [email.value])

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8800/auth/signup", {
                HoTen: 'Nguyễn Đăng Mạnh Tú',
                Email: "manhtu2272002@gmail.com",
                MatKhau: "123",
                PhanQuyen: 0,
            });
            // navigate("/")
        } catch (err) {
            console.log(err.response.data)
            console.log('sai')
        }
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <div className={styles.infoWeb}>
                    <img
                        className={styles.logo}
                        src="https://static.vecteezy.com/system/resources/previews/016/892/364/original/hotel-icon-free-vector.jpg"
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
                            Tên người dùng
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="name"
                                type="text"
                                placeholder="Tên người dùng"
                            />
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>Email</label>
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
                        <label htmlFor="field-password" className={styles.label2}>
                            Mật khẩu
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-password"
                                name="password"
                                type="text"
                                placeholder="Nhập mật khẩu"
                            // value={email.value}
                            // onChange={(e) => setEmail({ ...email, value: e.target.value })}
                            // onFocus={handleOnFocus_email}
                            // onBlur={handleOnBlur_email}
                            />
                            {/* <hr id="lineUnderEmail" className={styles.lineUnderOnBlur} />
                            <p id="noticeForFieldEmail" className={styles.notice} value="1">
                                {email.error}
                            </p> */}
                        </div>
                    </div>
                </div>

                <form action="/">
                    <input type="button" value="Đăng ký"
                        onClick={handleClick}
                        className={styles.loginBtn} />
                </form>

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
