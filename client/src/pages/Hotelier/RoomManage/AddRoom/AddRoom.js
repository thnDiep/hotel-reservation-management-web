import styles from './AddRoom.module.scss'
import React, { useState, useEffect } from 'react'
// import Select from 'react-select'
import CheckFacility from '~/components/CheckFacility/CheckFacility'
import { ButtonPrimary } from '~/components'
import AddMultiple from '~/components/AddMultiple/AddMultiple'

const AddRoom = () => {
    const [selectedSite, setSelectedSite] = useState(1)
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    // const [hotel.ThanhPho, setSelectedProvince] = useState(null)
    // const [hotel.SoNguoi, setSelectedDistrict] = useState(null)
    // const [hotel.Phuong, setSelectedWards] = useState(null)
    const [hotel, setHotel] = useState(() => {
        return {
            Ten: '',
            SoLuong: '',
            DienTich: '',
            SoNguoi: '',
            Gia: '',
        }
    })
    const [nextCheck, setNextCheck] = useState(false)
    const host = 'https://provinces.open-api.vn/api/'

    const handleCheckboxSite = (event) => {
        if (selectedSite === 1 && parseInt(event.target.value) !== 1) {
            for (const key in hotel) {
                if (hotel[key] === '') {
                    setNextCheck(true)
                    return
                }
            }
        }
        setNextCheck(false)
        setSelectedSite(parseInt(event.target.value))
    }
    const handleNext = () => {
        if (selectedSite === 1 && selectedSite < 4) {
            for (const key in hotel) {
                if (hotel[key] === '') {
                    console.log(2)
                    console.log(key)
                    setNextCheck(true)
                    return
                }
            }
        }
        console.log(1)
        setNextCheck(false)
        if (selectedSite < 4) setSelectedSite(selectedSite + 1)
    }
    const handlePrev = () => {
        if (selectedSite > 1) setSelectedSite(selectedSite - 1)
    }

    const handleChange = (value, name) => {
        setHotel((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <section>
            <div className="container">Đăng ký khách sạn của bạn với mytour chỉ 4 bước đơn giản</div>
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className={` row g-0 ${styles.header}`}>
                                <div className={` col-3 ${styles.flexCenter}`}>
                                    <input
                                        onChange={handleCheckboxSite}
                                        value="1"
                                        className={`${styles.checkb} ${styles.c1}`}
                                        checked={selectedSite === 1 ? true : false}
                                        type="checkbox"
                                    />
                                    <span>Thông tin cơ bản</span>
                                </div>
                                <div className={` col-3 ${styles.flexCenter}`}>
                                    <input
                                        checked={selectedSite === 2 ? true : false}
                                        onChange={handleCheckboxSite}
                                        value="2"
                                        className={`${styles.checkb} ${styles.c2}`}
                                        type="checkbox"
                                    />
                                    <span>Tiện ích phòng</span>
                                </div>
                                <div className={` col-3 ${styles.flexCenter}`}>
                                    <input
                                        checked={selectedSite === 3 ? true : false}
                                        onChange={handleCheckboxSite}
                                        value="3"
                                        className={`${styles.checkb} ${styles.c3}`}
                                        type="checkbox"
                                    />
                                    <span>Ưu đãi của phòng</span>
                                </div>
                                <div className={` col-3 ${styles.flexCenter}`}>
                                    <input
                                        checked={selectedSite === 4 ? true : false}
                                        onChange={handleCheckboxSite}
                                        value="4"
                                        className={`${styles.checkb} ${styles.c4}`}
                                        type="checkbox"
                                    />
                                    <span>Hình ảnh</span>
                                </div>
                            </div>
                            {selectedSite === 1 && (
                                <div className={styles.content}>
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Tên loại phòng</span>
                                        <div className={`${styles.padding_0} col-5`}>
                                            <div
                                                className={`${styles.input} ${
                                                    hotel.Ten === '' && nextCheck && styles.inputRed
                                                }`}
                                            >
                                                <input
                                                    onChange={(e) => handleChange(e.target.value, 'Ten')}
                                                    type="text"
                                                    value={hotel.Ten}
                                                    name="Ten"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Số lượng phòng</span>
                                        <div className={`${styles.padding_0} col-5`}>
                                            <div
                                                className={`${styles.input} ${
                                                    hotel.SoLuong === '' && nextCheck && styles.inputRed
                                                }`}
                                            >
                                                <input
                                                    value={hotel.SoLuong}
                                                    name="SoLuong"
                                                    onChange={(e) => handleChange(e.target.value, 'SoLuong')}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Diện tích</span>
                                        <div className={`${styles.padding_0} col-5`}>
                                            <div
                                                className={`${styles.input} ${
                                                    hotel.DienTich === '' && nextCheck && styles.inputRed
                                                }`}
                                            >
                                                <input
                                                    value={hotel.DienTich}
                                                    name="SoLuong"
                                                    onChange={(e) => handleChange(e.target.value, 'DienTich')}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Số người</span>
                                        <div className={`${styles.padding_0} col-5`}>
                                            <div
                                                className={`${styles.input} ${
                                                    hotel.SoNguoi === '' && nextCheck && styles.inputRed
                                                }`}
                                            >
                                                <input
                                                    value={hotel.SoNguoi}
                                                    name="SoNguoi"
                                                    onChange={(e) => handleChange(e.target.value, 'SoNguoi')}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Giá phòng</span>
                                        <div className={`${styles.padding_0} col-5`}>
                                            <div
                                                className={`${styles.input} ${
                                                    hotel.Gia === '' && nextCheck && styles.inputRed
                                                }`}
                                            >
                                                <input
                                                    value={hotel.Gia}
                                                    name="Gia"
                                                    onChange={(e) => handleChange(e.target.value, 'Gia')}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedSite === 2 && (
                                <div className={styles.content}>
                                    <CheckFacility check={false} />
                                </div>
                            )}

                            <div
                                className={styles.content}
                                style={{ display: `${selectedSite !== 4 ? 'none' : 'block'}` }}
                            >
                                <AddMultiple />
                            </div>
                            <div className={` ${styles.header1}`}>
                                {selectedSite !== 1 && (
                                    <ButtonPrimary onSubmit={handlePrev} className="btnLarge2">
                                        Lùi lại
                                    </ButtonPrimary>
                                )}
                                {selectedSite !== 4 ? (
                                    <ButtonPrimary onSubmit={handleNext} className="btnLarge2">
                                        Tiếp tục
                                    </ButtonPrimary>
                                ) : (
                                    <ButtonPrimary className="btnLarge2">Đăng Ký</ButtonPrimary>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AddRoom
