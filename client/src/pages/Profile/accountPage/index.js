import { useEffect, useRef, useState } from 'react'
import styles from './account.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Profile from '../profile'
import Axios from 'axios'

function Account() {
    const [err, setErr] = useState({ name: ' ', email: ' ' })
    const [data, setData] = useState({})
    useEffect(() => {
        Axios.get('http://localhost:8800/profile', { params: { ID: 4 } })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        if (data.HoTen !== undefined) {
            if (data.HoTen.length === 0) {
                setErr({ ...err, name: 'Bạn chưa nhập họ tên' })
                document.getElementById('noticeForFieldName').value = '0'
            } else {
                setErr({ ...err, name: ' ' })
                document.getElementById('noticeForFieldName').value = '1'
            }
        }
    }, [data.HoTen])

    useEffect(() => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (data.Email !== undefined) {
            if (data.Email.length === 0) {
                setErr({ ...err, email: 'Bạn chưa nhập email' })
                document.getElementById('noticeForFieldEmail').value = '0'
            } else if (!filter.test(data.Email)) {
                setErr({ ...err, email: 'Địa chỉ email sai định dạng' })
                document.getElementById('noticeForFieldEmail').value = '0'
            } else {
                setErr({ ...err, email: ' ' })
                document.getElementById('noticeForFieldEmail').value = '1'
            }
        }
    }, [data.Email])
    // Get the modal
    var modal = document.getElementById('myModal')

    // When the user clicks on <span> (x), close the modal
    function closeModal() {
        modal.style.display = 'none'
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }

    function handleSubmit() {
        var noticeOfName = document.getElementById('noticeForFieldName').value
        var noticeOfEmail = document.getElementById('noticeForFieldEmail').value

        if (noticeOfEmail === '1' && noticeOfName === '1') {
            Axios.post('http://localhost:8800/profile/update', { info: data })
                .then(() => {
                    // alert('Cap nhat thành công')

                    modal.style.display = 'block'
                })
                .catch((error) => console.log(error))
        }
    }
    return (
        <Profile>
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
                            Họ tên<span>*</span>
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-name"
                                name="name"
                                type="text"
                                value={data.HoTen}
                                onChange={(e) => setData({ ...data, HoTen: e.target.value })}
                            />
                            <p id="noticeForFieldName" className={styles.notice} value="1">
                                {err.name}
                            </p>
                        </div>
                    </div>
                    {/* Email */}
                    <div>
                        <label htmlFor="field-email" className={styles.label}>
                            Email<span>*</span>
                        </label>
                        <div>
                            <input
                                className={styles.fieldInput}
                                id="field-email"
                                name="email"
                                type="text"
                                value={data.Email}
                                onChange={(e) => setData({ ...data, Email: e.target.value })}
                            />
                            <p id="noticeForFieldEmail" className={styles.notice} value="1">
                                {err.email}
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
                                value={data.SoDienThoai}
                                onChange={(e) => setData({ ...data, SoDienThoai: e.target.value })}
                            />
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
                                value={data.DiaChi}
                                onChange={(e) => setData({ ...data, DiaChi: e.target.value })}
                            />
                        </div>
                    </div>
                    <button className={styles.buttonSave} onClick={() => handleSubmit()}>
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
        </Profile>
    )
}

export default Account
