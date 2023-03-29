// import userEvent from '@testing-library/user-event'
import { useEffect, useRef, useState } from 'react'
import styles from './profile.module.scss'

function Profile() {
    const menuDefault = useRef()
    useEffect(() => {
        menuDefault.current.checked = true
    }, [])

    const [name, setName] = useState({
        value: JSON.parse(localStorage.getItem('data')).valueName || [],
        error: ' ',
    })
    const [email, setEmail] = useState({
        value: JSON.parse(localStorage.getItem('data')).valueEmail || [],
        error: ' ',
    })
    const [numberPhone, setNumberPhone] = useState(JSON.parse(localStorage.getItem('data')).numberPhone || [])
    const [address, setAdress] = useState(JSON.parse(localStorage.getItem('data')).address || [])
    const [statusForm, setStautsForm] = useState(true)

    useEffect(() => {
        if (name.value.length === 0) {
            setName({ ...name, error: 'Bạn chưa nhập họ tên' })
            document.getElementById('noticeForFieldName').value = '0'
            document.getElementById('lineUnderName').classList.add(styles.lineUnderWhenError)
        } else {
            document.getElementById('lineUnderName').classList.remove(styles.lineUnderWhenError)
            // document.getElementById('lineUnderName').classList.add(styles.lineUnderWhenVisited)
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
            // document.getElementById('lineUnderEmail').classList.add(styles.lineUnderWhenVisited)
            document.getElementById('noticeForFieldEmail').value = '1'
        }
    }, [email.value])
    // event of name
    function handleOnBlur_name() {
        document.getElementById('lineUnderName').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderName').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_name() {
        document.getElementById('lineUnderName').classList.add(styles.lineUnderWhenVisited)
    }
    //  event of email
    function handleOnBlur_email() {
        document.getElementById('lineUnderEmail').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderEmail').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_email() {
        document.getElementById('lineUnderEmail').classList.add(styles.lineUnderWhenVisited)
    }
    // event of numberPhone
    function handleOnBlur_numberPhone() {
        document.getElementById('lineUnderNumberPhone').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderNumberPhone').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_numberPhone() {
        document.getElementById('lineUnderNumberPhone').classList.add(styles.lineUnderWhenVisited)
    }
    // event of address
    function handleOnBlur_address() {
        document.getElementById('lineUnderAddress').classList.remove(styles.lineUnderWhenVisited)
        document.getElementById('lineUnderAddress').classList.add(styles.lineUnderOnBlur)
    }

    function handleOnFocus_address() {
        document.getElementById('lineUnderAddress').classList.add(styles.lineUnderWhenVisited)
    }

    function handleSubmit() {
        var noticeOfName = document.getElementById('noticeForFieldName').value
        var noticeOfEmail = document.getElementById('noticeForFieldEmail').value

        if (noticeOfEmail === '1' && noticeOfName === '1') {
            const data = { valueName: name.value, valueEmail: email.value, numberPhone: numberPhone, address: address }
            localStorage.setItem('data', JSON.stringify(data))
            // localStorage.setItem('valueName', JSON.stringify(name.value))
            // localStorage.setItem('valueEmail', JSON.stringify(email.value))
            // localStorage.setItem('numberPhone', JSON.stringify(numberPhone))
            // localStorage.setItem('address', JSON.stringify(address))
            alert('Thay đổi thông tin thành công!')
        }
    }

    return (
        <div>
            <h1>Tài khoản</h1>
            <div className={styles.profileMenu}>
                <label htmlFor="tk" className={styles.buttonMenu}>
                    Tài khoản
                    <input ref={menuDefault} type="radio" name="menu" id="tk" />
                </label>
                <label htmlFor="dp" className={styles.buttonMenu}>
                    Đơn phòng
                    <input type="radio" name="menu" id="dp" />
                </label>
                <label htmlFor="ksyt" className={styles.buttonMenu}>
                    Khách sạn yêu thích
                    <input type="radio" name="menu" id="ksyt" />
                </label>
            </div>
            {/* <div>
                {buttons.map(function(name, index){
                    return <input type="button" value={name} onClick={handleSelectMenu} key={name}/> 
                })}
            </div> */}
            <div className={styles.wrap}>
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
                                value={numberPhone}
                                onChange={(e) => setNumberPhone(e.target.value)}
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
                                value={address}
                                onChange={(e) => setAdress(e.target.value)}
                                onFocus={handleOnFocus_address}
                                onBlur={handleOnBlur_address}
                            />
                            <hr id="lineUnderAddress" />
                        </div>
                    </div>

                    <button className={styles.buttonSave} onClick={handleSubmit}>
                        Lưu lại
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
