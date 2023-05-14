import React, { useState, useEffect } from 'react'
import classes from './CheckOrder.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWpforms } from '@fortawesome/free-brands-svg-icons'
import { ButtonPrimary } from '~/components'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const CheckOrder = () => {
    const Nav = useNavigate()
    const [enteredCode, setEnteredCode] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredPhoneNum, setEnteredPhoneNum] = useState(() => {
        return { value: '', error: '', isValid: false }
    })

    const [data, setData] = useState(() => {
        return { code: '', phone: '', isValid: false }
    })

    useEffect(() => {
        const filter = /^\d{7}$/
        if (data.isValid === true) {
            const identifier = setTimeout(() => {
                if (data.code.length === 0) {
                    setEnteredCode({ ...enteredCode, error: 'Vui lòng nhập thông tin mã đơn hàng' })
                } else if (!filter.test(data.code)) {
                    setEnteredCode({ ...enteredCode, error: 'Mã đơn hàng không đúng định dạng' })
                } else {
                    setEnteredCode({ ...enteredCode, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [data.code])

    useEffect(() => {
        const filter = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        if (enteredPhoneNum.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredPhoneNum.value.length === 0) {
                    setEnteredPhoneNum({ ...enteredPhoneNum, error: 'Vui lòng nhập thông tin số điện thoại' })
                } else {
                    setEnteredPhoneNum({ ...enteredPhoneNum, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredPhoneNum.value])

    const codeChangeHandler = (event) => {
        setEnteredCode({ value: event.target.value, isValid: true, error: '' })
    }
    const phoneNumChangeHandler = (event) => {
        setEnteredPhoneNum({ value: event.target.value, isValid: true, error: '' })
    }

    const handleCheckOrder = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8800/user/checkOrder', {
                MaDatPhong: data.code,
                SoDienThoai: data.phone,
            })
            if (res.status === 200) {
                await Swal.fire('Đã tìm thấy đơn đặt hàng', 'Nhấn nút để xem', 'success')
                Nav(`/profile/order/${data.code}`, { id: data.code })
            }
        } catch (err) {
            console.log('sai')
            await Swal.fire('Không tìm thấy đơn đặt hàng', 'Nhấn nút để tiếp tục tìm kiếm', 'error')
        }
    }
    return (
        <div className={classes.container}>
            <form>
                <div className={classes.checkForm}>
                    <h4 className={classes.title}>Kiểm tra đơn hàng</h4>

                    <div className={classes.gr}>
                        <div className={classes.item}>
                            <FontAwesomeIcon icon={faWpforms} className={classes.icon} />
                            <input
                                type="text"
                                className={classes.Input}
                                id="formGroupExampleInput"
                                placeholder="Nhập mã đơn hàng"
                                onChange={(e) => setData({ ...data, code: e.target.value, isValid: true })}
                                name="code"
                            />
                        </div>
                        <p className={classes.err}>{enteredCode.error}</p>
                    </div>
                    <div className={classes.gr}>
                        <div className={classes.item}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={classes.iconPhone} />
                            <input
                                type="text"
                                className={classes.Input}
                                id="formGroupExampleInput"
                                placeholder="Nhập số điện thoại"
                                onChange={(e) => setData({ ...data, phone: e.target.value, isValid: true })}
                                name="phone"
                            />
                        </div>
                        <p className={classes.err}>{enteredPhoneNum.error}</p>
                    </div>
                </div>
                <ButtonPrimary className="btnCheck" onSubmit={handleCheckOrder}>
                    Kiểm tra
                </ButtonPrimary>
            </form>
        </div>
    )
}
export default CheckOrder
