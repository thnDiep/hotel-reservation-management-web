import styles from './AddHotel.module.scss'
import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import CheckFacility from './CheckFacility/CheckFacility'
import { ButtonPrimary } from '~/components'
import PaymentIntput from './PaymentInput/PaymentInput'
import AddMultiple from './AddMultiple/AddMultiple'
const options = [
    { value: '8:00', label: '8:00 AM' },
    { value: '9:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
]
const optionStar = [
    { value: 1, label: '1 sao' },
    { value: 2, label: '2 sao' },
    { value: 3, label: '3 sao' },
    { value: 4, label: '4 sao' },
    { value: 5, label: '5 sao' },
]
const AddHotel = () => {
    const [selectedSite, setSelectedSite] = useState(1)
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    // const [hotel.ThanhPho, setSelectedProvince] = useState(null)
    // const [hotel.Quan, setSelectedDistrict] = useState(null)
    // const [hotel.Phuong, setSelectedWards] = useState(null)
    const [hotel, setHotel] = useState(() => {
        return {
            Ten: '',
            DiaChi: '',
            Diem: '',
            // GioiThieu: "",
            ThanhPho: '',
            Quan: '',
            Phuong: '',
            GioNhanPhong: '',
            GioTraPhong: '',
        }
    })
    const [nextCheck, setNextCheck] = useState(false)
    const host = 'https://provinces.open-api.vn/api/'
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/')
            .then((response) => response.json())
            .then((data) => {
                const options = data.map((province) => ({
                    label: province.name,
                    value: province.code,
                }))
                setProvinces(options)
            })
    }, [])
    useEffect(() => {
        if (hotel.ThanhPho) {
            const check = host + 'p/' + hotel.ThanhPho.value + '?depth=2'
            fetch(check)
                .then((response) => response.json())
                .then((data) => {
                    const options = data.districts.map((district) => ({
                        label: district.name,
                        value: district.code,
                    }))
                    setDistricts(options)
                })
        } else {
            setDistricts([])
        }
    }, [hotel.ThanhPho])
    useEffect(() => {
        if (hotel.Quan) {
            const check = host + 'd/' + hotel.Quan.value + '?depth=2'
            fetch(check)
                .then((response) => response.json())
                .then((data) => {
                    const options = data.wards.map((district) => ({
                        label: district.name,
                        value: district.id,
                    }))
                    setWards(options)
                })
        } else {
            setWards([])
        }
    }, [hotel.Quan])

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
        if (name?.value === 'ThanhPho') {
            setHotel((prev) => ({ ...prev, Quan: null }))
            setHotel((prev) => ({ ...prev, Phuong: null }))
        }
        if (name?.value === 'Quan') {
            setHotel((prev) => ({ ...prev, Phuong: null }))
        }
        setHotel((prev) => ({ ...prev, [name]: value }))
    }
    console.log(hotel.GioNhanPhong)

    return (
        <section
        // className="vh-100"
        // style={{
        //     backgroundImage:
        //         'url("https://icdn.dantri.com.vn/2021/04/30/dji-0788-hdr-panoa-crop-1619717280597.jpeg")',
        // }}
        >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center  h-100">
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
                                    <span>Tiện ích khách sạn</span>
                                </div>
                                <div className={` col-3 ${styles.flexCenter}`}>
                                    <input
                                        checked={selectedSite === 3 ? true : false}
                                        onChange={handleCheckboxSite}
                                        value="3"
                                        className={`${styles.checkb} ${styles.c3}`}
                                        type="checkbox"
                                    />
                                    <span>Thông tin cần thiết</span>
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
                                        <span className={` col-4 ${styles.label}`}>Tên khách sạn</span>
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
                                    <div className="row mt-4">
                                        <span className={`col-4 ${styles.label}`}>Hạng khách sạn</span>
                                        <Select
                                            className={`col-5 ${styles.padding_0} ${
                                                hotel.Diem === '' && nextCheck && styles.inputRed
                                            }`}
                                            value={hotel.Diem}
                                            options={optionStar}
                                            placeholder="Chọn hạng"
                                            onChange={(selectedOption) => handleChange(selectedOption, 'Diem')}
                                        />
                                        {/* <div className={`${styles.padding_0} col-5`}>
                                            <div className={styles.inputSelect}>
                                               
                                                <select
                                                    name="Diem"
                                                    value={hotel.Diem}
                                                    id="Diem"
                                                    onChange={(e) => handleChange(e.target.value, 'Diem')}
                                                >
                                                    <option value="1">1 sao</option>
                                                    <option value="2">2 sao</option>
                                                    <option value="3">3 sao</option>
                                                    <option value="3">4 sao</option>
                                                    <option value="3">5 sao</option>
                                                </select>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Tỉnh/Thành phố</span>
                                        <Select
                                            name="Tp"
                                            className={`col-5 ${styles.padding_0} ${
                                                hotel.ThanhPho === '' && nextCheck && styles.inputRed
                                            }`}
                                            value={hotel.ThanhPho}
                                            onChange={(e) => handleChange(e, 'ThanhPho')}
                                            options={provinces}
                                            placeholder="Chọn tỉnh/thành phố"
                                        />
                                    </div>
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Quận/Huyện</span>

                                        <Select
                                            className={`col-5 ${styles.padding_0} ${
                                                hotel.Quan === '' && nextCheck && styles.inputRed
                                            }`}
                                            value={hotel.Quan}
                                            onChange={(e) => handleChange(e, 'Quan')}
                                            options={districts}
                                            placeholder="Chọn quận/huyện"
                                            isDisabled={!hotel.ThanhPho}
                                        />
                                    </div>
                                    <div className="row mt-4 ">
                                        <span className={`col-4 ${styles.label}`}>Phường/Xã</span>
                                        <Select
                                            className={`col-5 ${styles.padding_0} ${
                                                hotel.Phuong === '' && nextCheck && styles.inputRed
                                            }`}
                                            value={hotel.Phuong}
                                            options={wards}
                                            placeholder="Chọn phường/xã"
                                            isDisabled={!hotel.ThanhPho || !hotel.Quan}
                                            onChange={(e) => handleChange(e, 'Phuong')}
                                        />
                                    </div>
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Địa chỉ cụ thể</span>
                                        <div className={`${styles.padding_0} col-5`}>
                                            <div
                                                className={`${styles.input} ${
                                                    hotel.DiaChi === '' && nextCheck && styles.inputRed
                                                }`}
                                            >
                                                <input
                                                    value={hotel.DiaChi}
                                                    name="DiaChi"
                                                    onChange={(e) => handleChange(e.target.value, 'DiaChi')}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* giờ nhận phòng */}
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Giờ nhận phòng</span>
                                        <Select
                                            className={`col-5 ${styles.padding_0} ${
                                                hotel.GioNhanPhong === '' && nextCheck && styles.inputRed
                                            }`}
                                            name="GioNhanPhong"
                                            value={hotel.GioNhanPhong}
                                            options={options}
                                            placeholder="Chọn phường/xã"
                                            onChange={(selectedOption) => handleChange(selectedOption, 'GioNhanPhong')}
                                        />
                                    </div>
                                    {/* Giờ trả phòng */}
                                    <div className="row mt-4 ">
                                        <span className={` col-4 ${styles.label}`}>Giờ trả phòng</span>
                                        <Select
                                            className={`col-5 ${styles.padding_0} ${
                                                hotel.GioTraPhong === '' && nextCheck && styles.inputRed
                                            }`}
                                            name="GioTraPhong"
                                            onChange={(selectedOption) => handleChange(selectedOption, 'GioTraPhong')}
                                            value={hotel.GioTraPhong}
                                            options={options}
                                            placeholder="Chọn phường/xã"
                                        />
                                    </div>
                                </div>
                            )}
                            {selectedSite === 2 && (
                                <div className={styles.content}>
                                    <CheckFacility />
                                </div>
                            )}
                            {selectedSite === 3 && (
                                <div className={styles.content}>
                                    <PaymentIntput />
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
export default AddHotel
