import React, { useState, useEffect } from 'react'
import classes from './CheckOrder.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWpforms } from '@fortawesome/free-brands-svg-icons'
import { ButtonPrimary } from '~/components'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const CheckOrder = () => {
    const [enteredCode, setEnteredCode] = useState(() => {
        return { value: '', error: '', isValid: false }
    })
    const [enteredPhoneNum, setEnteredPhoneNum] = useState(() => {
        return { value: '', error: '', isValid: false }
    })

    useEffect(() => {
        const filter = /^[A-Z]\d{7}$/
        if (enteredCode.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredCode.value.length === 0) {
                    setEnteredCode({ ...enteredCode, error: 'Vui lòng nhập thông tin mã đơn hàng' })
                } else if (!filter.test(enteredCode.value)) {
                    setEnteredCode({ ...enteredCode, error: 'Mã đơn hàng không đúng định dạng' })
                } else {
                    setEnteredCode({ ...enteredCode, error: '' })
                }
            }, 500)
            return () => {
                clearTimeout(identifier)
            }
        }
    }, [enteredCode.value])

    useEffect(() => {
        const filter = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        if (enteredPhoneNum.isValid === true) {
            const identifier = setTimeout(() => {
                if (enteredPhoneNum.value.length === 0) {
                    setEnteredPhoneNum({ ...enteredPhoneNum, error: 'Vui lòng nhập thông tin số điện thoại' })
                } else if (!filter.test(enteredPhoneNum.value)) {
                    setEnteredPhoneNum({ ...enteredPhoneNum, error: 'Số điện thoại không đúng định dạng' })
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
                                value={enteredCode.value}
                                onChange={codeChangeHandler}
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
                                onChange={phoneNumChangeHandler}
                            />
                        </div>
                        <p className={classes.err}>{enteredPhoneNum.error}</p>
                    </div>
                </div>
                <ButtonPrimary className="btnCheck">Kiểm tra</ButtonPrimary>
            </form>
        </div>
    )
}
export default CheckOrder
