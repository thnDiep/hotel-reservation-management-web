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
            <div className={`${styles.title} container`}>Đăng ký phòng của bạn với mytour chỉ 4 bước đơn giản</div>
            <div className={`${styles.content}  `}>
                <div className="row d-flex justify-content-center">
                    <div className="col col-xl-12">
                        <div className={`card ${styles.card}`} style={{ borderRadius: '1rem' }}>
                            <div className={styles.cardHeader}>
                                <h4 className={styles.cardTitle}>Form step</h4>
                            </div>
                            <div className={styles.cardBody}>
                                <ul id="progressbar">
                                    <li className={`check ${selectedSite >= 1 && 'active'}`} id="account"></li>
                                    <li id="personal" className={`check ${selectedSite >= 2 && 'active'}`}></li>
                                    <li id="confirm" className={`check ${selectedSite >= 3 && 'active'}`}></li>
                                </ul>

                                <div className={`animate__animated animate__fadeInRight ${styles.contentHotel}`} style={{ display: `${selectedSite === 1 ? 'block' : 'none'}` }}>
                                    <div className="row" >
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>Họ và tên<span><span>*</span></span></label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className={`form-control ${styles.formControl} ${hotel.Ten === '' && nextCheck && styles.inputRed
                                                        }`}
                                                    placeholder="Tên phòng"
                                                    onChange={(e) => {
                                                        handleChange(e.target.value, 'Ten')
                                                    }}
                                                    required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>Số lượng phòng<span>*</span></label>
                                                <input
                                                    type="number"
                                                    value={hotel.SoLuong}
                                                    onChange={(e) => handleChange(e.target.value, "SoLuong")}
                                                    className={`form-control ${styles.formControl} ${hotel.SoLuong === '' && nextCheck && styles.inputRed
                                                        }`} placeholder="Số lượng phòng" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>Diện tích<span>*</span></label>
                                                <input
                                                    type="number"
                                                    value={hotel.DienTich}
                                                    onChange={(e) => handleChange(e.target.value, "DienTich")}
                                                    className={`form-control ${styles.formControl} ${hotel.DienTich === '' && nextCheck && styles.inputRed
                                                        }`} placeholder="Diện tích" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>Số người ở<span>*</span></label>
                                                <input
                                                    type="number"
                                                    value={hotel.SoNguoi}
                                                    onChange={(e) => handleChange(e.target.value, "SoNguoi")}
                                                    className={`form-control ${styles.formControl} ${hotel.SoNguoi === '' && nextCheck && styles.inputRed
                                                        }`} placeholder="Số người ở" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>Giá phòng<span>*</span></label>
                                                <input
                                                    type="number"
                                                    value={hotel.Gia}
                                                    onChange={(e) => handleChange(e.target.value, "Gia")}
                                                    className={`form-control ${styles.formControl} ${hotel.Gia === '' && nextCheck && styles.inputRed
                                                        }`} placeholder="Số người ở" required="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <CheckFacility check={true} display={`${selectedSite === 2 ? 'block' : 'none'}`} />
                                <AddMultiple display={`${selectedSite === 3 ? 'block' : 'none'}`} />
                                <div className='text-end toolbar toolbar-bottom p-2'>
                                    {selectedSite !== 1 && (
                                        <ButtonPrimary onSubmit={handlePrev} className="btnLarge2">
                                            Lùi lại
                                        </ButtonPrimary>
                                    )}
                                    {selectedSite !== 3 ? (
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
            </div>
        </section>
    )
}
export default AddRoom
