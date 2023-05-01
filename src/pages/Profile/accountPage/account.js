import { useEffect, useState } from 'react'
import styles from './account.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
// import { clsx } from 'clsx'

function Account() {
    const data = JSON.parse(localStorage.getItem('data'))
    const [name, setName] = useState(() => {
        return {
            value: data ? data.valueName : [],
            error: ' ',
        }
    })
    const [email, setEmail] = useState(() => {
        return {
            value: data ? data.valueEmail : [],
            error: ' ',
        }
    })
    const [numberPhone, setNumberPhone] = useState(() => {
        return {
            value: data ? data.valueNumberPhone : [],
        }
    })
    const [address, setAddress] = useState(() => {
        return {
            value: data ? data.valueAddress : [],
        }
    })

    useEffect(() => {
        if (name.value.length === 0) {
            setName({ ...name, error: 'Bạn chưa nhập họ tên' })
            document.getElementById('noticeForFieldName').value = '0'
            document.getElementById('lineUnderName').classList.add(styles.lineUnderWhenError)
        } else {
            document.getElementById('lineUnderName').classList.remove(styles.lineUnderWhenError)
            document.getElementById('noticeForFieldName').value = '1'
        }
    }, [name.value])

    useEffect(() => {
        console.log(email.error)
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (email.value.length === 0) {
            setEmail({ ...email, error: 'Bạn chưa nhập email' })
            document.getElementById('noticeForFieldEmail').value = '0'
            document.getElementById('lineUnderEmail').classList.add(styles.lineUnderWhenError)
        } else if (!filter.test(email.value)) {
            setEmail({ ...email, error: 'Địa chỉ email sai định dạng' })
            document.getElementById('noticeForFieldEmail').value = '0'
            document.getElementById('lineUnderEmail').classList.add(styles.lineUnderWhenError)
        } else {
            setEmail({ ...email, error: ' ' })
            document.getElementById('lineUnderEmail').classList.remove(styles.lineUnderWhenError)
            document.getElementById('noticeForFieldEmail').value = '1'
        }
    }, [email.value])
    // event of name
    function handleOnBlur_name() {
        document.getElementById('lineUnderName').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderName').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_name() {
        document.getElementById('lineUnderName').classList.remove(styles.lineUnderOnBlur)
        document.getElementById('lineUnderName').classList.add(styles.lineUnderWhenVisited)
    }
    //  event of email
    function handleOnBlur_email() {
        document.getElementById('lineUnderEmail').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderEmail').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_email() {
        document.getElementById('lineUnderEmail').classList.remove(styles.lineUnderOnBlur)
        document.getElementById('lineUnderEmail').classList.add(styles.lineUnderWhenVisited)
    }
    // event of numberPhone
    function handleOnBlur_numberPhone() {
        document.getElementById('lineUnderNumberPhone').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderNumberPhone').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_numberPhone() {
        document.getElementById('lineUnderNumberPhone').classList.remove(styles.lineUnderOnBlur)
        document.getElementById('lineUnderNumberPhone').classList.add(styles.lineUnderWhenVisited)
    }
    // event of address
    function handleOnBlur_address() {
        document.getElementById('lineUnderAddress').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderAddress').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_address() {
        document.getElementById('lineUnderAddress').classList.remove(styles.lineUnderOnBlur)
        document.getElementById('lineUnderAddress').classList.add(styles.lineUnderWhenVisited)
    }

    // Get the modal
    var modal = document.getElementById('myModal')

    // When the user clicks on <span> (x), close the modal
    function closeModal() {
        modal.style.display = 'none'
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'
        }
    }

    function handleSubmit() {
        var noticeOfName = document.getElementById('noticeForFieldName').value
        var noticeOfEmail = document.getElementById('noticeForFieldEmail').value

        if (noticeOfEmail === '1' && noticeOfName === '1') {
            const data = {
                valueName: name.value,
                valueEmail: email.value,
                valueNumberPhone: numberPhone.value,
                valueAddress: address.value,
            }
            localStorage.setItem('data', JSON.stringify(data))
            modal.style.display = 'block'
            // alert('Thay đổi thông tin thành công!')
        }
    }
    return (
        <div className={styles.contentWrap}>
            <div className={styles.formInformation}>
                {/* avatar */}
                <div>
                    <img src={process.env.PUBLIC_URL + '/avt.png'} alt="avata" className={styles.profileAvt} />
                </div>
                {/* Thong tin ca nhan */}
                <div className={styles.information}>
                    {/* Ho ten */}
                    <div>
                        <label htmlFor="field-name" className={styles.label}>
                            Họ tên
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="name"
                                type="text"
                                // autoFocus
                                value={name.value}
                                onChange={(e) => setName({ error: ' ', value: e.target.value })}
                                onFocus={handleOnFocus_name}
                                onBlur={handleOnBlur_name}
                            />
                            <hr id="lineUnderName" className={styles.lineUnderOnBlur} />
                            <p id="noticeForFieldName" className={styles.notice} value="1">
                                {name.error}
                            </p>
                        </div>
                    </div>
                    {/* Email */}
                    <div>
                        <label htmlFor="field-email" className={styles.label}>
                            Email
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-email"
                                name="email"
                                type="text"
                                value={email.value}
                                onChange={(e) => setEmail({ ...email, value: e.target.value })}
                                onFocus={handleOnFocus_email}
                                onBlur={handleOnBlur_email}
                            />
                            <hr id="lineUnderEmail" className={styles.lineUnderOnBlur} />
                            <p id="noticeForFieldEmail" className={styles.notice} value="1">
                                {email.error}
                            </p>
                        </div>
                    </div>

                    {/* So dien thoai */}
                    <div>
                        <label htmlFor="field-numberPhone" className={styles.label}>
                            Số điện thoại
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-numberPhone"
                                name="numberPhone"
                                type="number"
                                value={numberPhone.value}
                                onChange={(e) => setNumberPhone({ ...numberPhone, value: e.target.value })}
                                onFocus={handleOnFocus_numberPhone}
                                onBlur={handleOnBlur_numberPhone}
                            />
                            <hr id="lineUnderNumberPhone" />
                        </div>
                    </div>
                    {/* Dia chi */}
                    <div>
                        <label htmlFor="field-address" className={styles.label}>
                            Địa chỉ
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-address"
                                name="address"
                                type="text"
                                value={address.value}
                                onChange={(e) => setAddress({ ...address, value: e.target.value })}
                                onFocus={handleOnFocus_address}
                                onBlur={handleOnBlur_address}
                            />
                            <hr id="lineUnderAddress" />
                        </div>
                    </div>

                    <button className={styles.buttonSave} onClick={handleSubmit}>
                        Lưu lại
                    </button>

                    {/* Modal */}
                    <div id="myModal" class="modal">
                        {/* <!-- Modal content --> */}
                        <div className={styles.modalContent}>
                            <span className={styles.close} onClick={closeModal}>
                                &times;
                            </span>
                            <p>
                                <FontAwesomeIcon icon={faCheckCircle} className={styles.successIcon} />
                                Thay đổi thông tin thành công
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
