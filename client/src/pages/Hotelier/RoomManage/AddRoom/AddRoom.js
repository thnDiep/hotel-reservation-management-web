import styles from './AddRoom.module.scss'
import React, { useState, useEffect } from 'react'
// import Select from 'react-select'
import CheckFacility from '~/components/CheckFacility/CheckFacility'
import { ButtonPrimary } from '~/components'
import AddMultiple from '~/components/AddMultiple/AddMultiple'
import { NumericFormat } from 'react-number-format'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
const AddRoom = () => {
    const { active, id } = useParams()
    console.log(active)
    const Nav = useNavigate()
    // console.log(id)
    // const { active } = useParams()

    const [selectedSite, setSelectedSite] = useState(1)

    const [hotel, setHotel] = useState(() => {
        return {
            TenLoaiPhong: '',
            SoPhongTrong: '',
            DienTich: '',
            SoNguoi: '',
            Gia: '',
            GiuongDon: 0,
            GiuongDoi: 0,
        }
    })
    const [nextCheck, setNextCheck] = useState(false)

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
                    setNextCheck(true)
                    return
                }
            }
        }
        setNextCheck(false)
        if (selectedSite < 4) setSelectedSite(selectedSite + 1)
    }
    const handlePrev = () => {
        if (selectedSite > 1) setSelectedSite(selectedSite - 1)
    }
    const [showInformModal, setShowInformModal] = useState(false)
    const [data, setData] = useState(null)
    //image
    const [selectedFiles, setSelectedFiles] = useState([])
    const handleImagesChange = (event) => {
        setSelectedFiles([...event.target.files])
    }
    //Tiện nghi
    const [tienNghi, setTienNghi] = useState(null)
    const [uuDai, setUuDai] = useState(null)
    useEffect(() => {
        localStorage.setItem('paths', [`/Quản lý phòng/${id ? 'Chỉnh sửa' : 'Thêm phòng'}`])
        axios
            .get('http://localhost:8800/cks/room/facility')
            .then((response) => {
                setData(response.data)
                for (let check of response.data.types) {
                    for (const checked of check.TienNghi) checked.checked = false
                }
                for (let check of response.data.endow) {
                    check.checked = false
                }
                setTienNghi(response.data.types)
                setUuDai(response.data.endow)
            })
            .catch((error) => {})
    }, [])

    const handleChangeTienNghi = (tienNghi) => {
        setTienNghi(tienNghi)
    }
    const handleChangeUuDai = (uudai) => {
        setUuDai(uudai)
    }

    const handleChange = (value, name) => {
        if (name === 'Gia') {
            const numericValue = parseFloat(value, 10)
            if (!isNaN(numericValue)) {
                setHotel((prev) => ({ ...prev, [name]: numericValue }))
            }
            return
        }
        setHotel((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        // Gửi dữ liệu formData về server
        try {
            console.log('fasda')
            event.preventDefault()
            const PRESET_NAME = 'ml_default'
            const CLOUD_NAME = 'dzawgnpm9'
            const url = []
            const FOLDER_NAME = 'khachsan'
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
            const formData = new FormData()
            formData.append('upload_preset', PRESET_NAME)
            formData.append('folder', FOLDER_NAME)
            for (const file of selectedFiles) {
                formData.append('file', file)
                const res = await axios.post(api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                url.push(res.data.url)
            }
            console.log(url)
            const IDTienNghi = []
            const IDUuDai = []
            const filteredTienNghi = tienNghi?.flatMap((item) => {
                return item.TienNghi.filter((items) => items.checked)
            })
            const filteredUuDai = uuDai?.filter((item) => item.checked)
            for (const loai of filteredTienNghi) {
                IDTienNghi.push(loai.ID)
            }
            for (const ID of filteredUuDai) {
                IDUuDai.push(ID.ID)
            }
            hotel.IDKhachSan = active
            if (id) hotel.ID = +id
            console.log(hotel)
            const res = await axios.post(`http://localhost:8800/cks/room/${id ? 'update' : 'insert'}`, {
                HinhAnh: url,
                Room: hotel,
                tienNghi: IDTienNghi,
                uuDai: IDUuDai,
            })
            setShowInformModal(true)

            window.setTimeout(function () {
                setShowInformModal(false)
                window.location.href = '/cks/manage-room'
                // Nav('/cks/manage-room')
            }, 1500)
        } catch (err) {
            console.log('sai')
        }
    }
    const [image, setImage] = useState(null)

    // Lấy dữ liệu từ hotel để chỉnh sửa
    useEffect(() => {
        if (id !== undefined && data !== null) {
            axios
                .get('http://localhost:8800/cks/room/update', { params: { IDKhachSan: active, IDPhong: id } })
                .then((response) => {
                    setHotel({
                        ...response.data.room,
                    })

                    setImage(response.data.HinhAnh)
                    setTienNghi((prevTienNghi) =>
                        prevTienNghi.map((item) => {
                            item.TienNghi.map((tiennghi) => {
                                if (response.data.idTienNghi.includes(tiennghi.ID)) {
                                    tiennghi.checked = true
                                }
                                return tienNghi
                            })

                            return item
                        }),
                    )
                    setUuDai((prevUuDai) =>
                        prevUuDai.map((item) => {
                            if (response.data.idUuDai.includes(item.ID)) {
                                item.checked = true
                            }
                            return item
                        }),
                    )
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [data])
    console.log(tienNghi)
    return (
        <section>
            <div className={`${styles.title} container`}>Đăng ký phòng của bạn với mytour chỉ 2 bước đơn giản</div>
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
                                    <li id="personal" className={`check ${selectedSite === 2 && 'active'}`}></li>
                                    {/* <li id="confirm" className={`check ${selectedSite >= 3 && 'active'}`}></li> */}
                                </ul>

                                <div
                                    className={`animate__animated animate__fadeInRight ${styles.contentHotel}`}
                                    style={{ display: `${selectedSite === 1 ? 'block' : 'none'}` }}
                                >
                                    <div className="row">
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Tên loại phòng
                                                    <span>
                                                        <span>*</span>
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.TenLoaiPhong === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    value={hotel.TenLoaiPhong}
                                                    placeholder="Tên phòng"
                                                    onChange={(e) => {
                                                        handleChange(e.target.value, 'TenLoaiPhong')
                                                    }}
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Số lượng phòng<span>*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    value={hotel.SoPhongTrong}
                                                    onChange={(e) => handleChange(+e.target.value, 'SoPhongTrong')}
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.SoPhongTrong === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    min={0}
                                                    placeholder="Số lượng phòng"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Diện tích<span>*</span>
                                                </label>

                                                <input
                                                    type="number"
                                                    value={hotel.DienTich}
                                                    onChange={(e) => handleChange(+e.target.value, 'DienTich')}
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.DienTich === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    min={0}
                                                    placeholder="Diện tích"
                                                    required=""
                                                    step="0.01"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Số người ở<span>*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    value={hotel.SoNguoi}
                                                    onChange={(e) => handleChange(+e.target.value, 'SoNguoi')}
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.SoNguoi === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    min={0}
                                                    placeholder="Số người ở"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Giá phòng<span>*</span>
                                                </label>
                                                <NumericFormat
                                                    value={hotel.Gia}
                                                    thousandSeparator="."
                                                    decimalSeparator=","
                                                    suffix=" ₫"
                                                    onValueChange={(values) => {
                                                        handleChange(values.floatValue, 'Gia')
                                                    }}
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.Gia === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    placeholder="Giá phòng"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Giường đơn<span>*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    value={hotel.GiuongDon}
                                                    onChange={(e) => handleChange(+e.target.value, 'GiuongDon')}
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.GiuongDon === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    min={0}
                                                    max={5}
                                                    placeholder="Số giường đơn"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Giường đôi<span>*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    value={hotel.GiuongDoi}
                                                    onChange={(e) => handleChange(+e.target.value, 'GiuongDoi')}
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.GiuongDoi === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    min={0}
                                                    max={5}
                                                    placeholder="Số giường đôi"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Thêm ảnh vào phòng
                                                    <span>
                                                        <span>*</span>
                                                    </span>
                                                </label>
                                                <AddMultiple
                                                    check={id ? true : false}
                                                    HinhAnh={image}
                                                    handleImagesChange={handleImagesChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CheckFacility
                                    nextCheck={nextCheck}
                                    handleChangeTienNghi={handleChangeTienNghi}
                                    handleChangeUuDai={handleChangeUuDai}
                                    tienNghi={tienNghi}
                                    uuDai={uuDai}
                                    check={true}
                                    display={`${selectedSite === 2 ? 'block' : 'none'}`}
                                />
                                <div className="text-end toolbar toolbar-bottom p-2">
                                    {selectedSite !== 1 && (
                                        <ButtonPrimary onSubmit={handlePrev} className="btnLarge2">
                                            Lùi lại
                                        </ButtonPrimary>
                                    )}
                                    {selectedSite !== 2 ? (
                                        <ButtonPrimary onSubmit={handleNext} className="btnLarge2">
                                            Tiếp tục
                                        </ButtonPrimary>
                                    ) : (
                                        <ButtonPrimary className="btnLarge2" onSubmit={handleSubmit}>
                                            {id ? 'Lưu Phòng' : 'Đăng Ký'}
                                        </ButtonPrimary>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thông báo thành công */}
            {showInformModal && (
                <div id="myModal" className="myModal1">
                    {/* <!-- Modal content --> */}
                    <div className="modalContent">
                        <FontAwesomeIcon icon={faCheckCircle} className="modalIcon" />
                        <div>
                            {!id && 'Thêm thành công'}
                            {id && 'Lưu thành công'}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
export default AddRoom
