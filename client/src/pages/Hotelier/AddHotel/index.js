import styles from './AddHotel.module.scss'
import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import CheckFacility from '../../../components/CheckFacility/CheckFacility'
import { ButtonPrimary } from '~/components'
import AddMultiple from '../../../components/AddMultiple/AddMultiple'
import Rating from 'material-ui-rating'
import { Editor } from '@tinymce/tinymce-react'
import 'animate.css'
import axios from 'axios'
import './styles.scss'
import FormData from 'form-data'
import { NumericFormat } from 'react-number-format'
import { v4 as uuidv4 } from 'uuid'
import { Cloudinary } from 'cloudinary-core'
import { useNavigate } from 'react-router-dom'
const options = [
    { value: 8, label: '8:00 AM' },
    { value: 9, label: '9:00 AM' },
    { value: 10, label: '10:00 AM' },
    { value: 11, label: '11:00 AM' },
    { value: 12, label: '12:00 PM' },
    { value: 13, label: '1:00 PM' },
    { value: 14, label: '2:00 PM' },
    { value: 15, label: '3:00 PM' },
    { value: 16, label: '4:00 PM' },
    { value: 17, label: '5:00 PM' },
]

const AddHotel = () => {
    const [selectedSite, setSelectedSite] = useState(1)
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])

    const Nav = useNavigate()

    const [hotel, setHotel] = useState(() => {
        return {
            Ten: '',
            DiaChi: '',
            soSao: '',
            GioiThieu: '',
            GioNhanPhong: '',
            GioTraPhong: '',
            ChinhSach: '',
            GiamGia: '',
        }
    })
    const [diaChi, setDiaChi] = useState(() => {
        return {
            ThanhPho: '',
            Quan: '',
            Phuong: '',
            Duong: '',
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
        if (diaChi.ThanhPho) {
            const check = host + 'p/' + diaChi.ThanhPho.value + '?depth=2'
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
    }, [diaChi.ThanhPho])
    useEffect(() => {
        if (diaChi.Quan) {
            const check = host + 'd/' + diaChi.Quan.value + '?depth=2'
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
    }, [diaChi.Quan])

    // Tiện nghi
    const [tienNghi, setTienNghi] = useState(null)
    const [thongTin, setThongTin] = useState(null)
    const [nhan, setNhan] = useState(null)
    useEffect(() => {
        axios
            .get('http://localhost:8800/cks/facility')
            .then((response) => {
                for (let check of response.data.types) {
                    check.checked = false
                }
                for (let check of response.data.useFull) {
                    check.NoiDung = ''
                }
                console.log(response.data)
                setTienNghi(response.data.types)
                setThongTin(response.data.useFull)
            })
            .catch((error) => {
                console.log('lấy lỗi')
            })
    }, [])
    const handleChangeTienNghi = (tienNghi) => {
        setTienNghi(tienNghi)
    }
    const handleChangeThongTin = (thongTin) => {
        setThongTin(thongTin)
    }
    const handleChangeNhan = (nhan) => {
        setNhan(nhan)
    }

    //image
    const [selectedFiles, setSelectedFiles] = useState([])
    const handleImagesChange = (event) => {
        console.log('fdsfsdfsdf')
        setSelectedFiles([...event.target.files])
    }

    const handleCheckboxSite = (value) => {
        if (selectedSite === 1 && parseInt(value) !== 1) {
            for (const key in hotel) {
                if (hotel[key] === '') {
                    setNextCheck(true)
                    return
                }
            }
            if (hotel.GiamGia > 100) {
                setNextCheck(true)
                return
            }
        }
        setNextCheck(false)
        setSelectedSite(value)
    }
    const handleNext = () => {
        if (selectedSite === 1) {
            for (const key in hotel) {
                if (hotel[key] === '' || selectedFiles.length === 0) {
                    setNextCheck(true)
                    return
                }
            }
        }
        // if (selectedSite === 2) {
        //     const filteredTienNghi = tienNghi?.filter((item) => item.checked)

        //     const filteredThongTin = thongTin.filter((item) => item.NoiDung !== '')
        //     if (filteredTienNghi.length === 0 || filteredThongTin.length === 0 || nhan === null) {
        //         setNextCheck(true)
        //         return
        //     }
        // }
        setNextCheck(false)
        if (selectedSite < 2) setSelectedSite(selectedSite + 1)
    }
    const handlePrev = () => {
        // if (selectedSite === 1) {
        //     for (const key in hotel) {
        //         if (hotel[key] === '') {
        //             setNextCheck(true)
        //             return
        //         }
        //     }
        // }
        if (selectedSite === 2) {
            let filteredTienNghi = tienNghi?.filter((item) => item.checked)

            const filteredThongTin = thongTin.filter((item) => item.NoiDung !== '')
            if (filteredTienNghi.length === 0 || filteredThongTin.length === 0 || nhan === null) {
                setNextCheck(true)
                return
            }
        }
        if (selectedSite > 1) setSelectedSite(selectedSite - 1)
    }

    const handleChange = (value, name) => {
        setHotel((prev) => ({ ...prev, [name]: value }))
    }
    const handleChangeDiaChi = (value, name) => {
        if (name === 'ThanhPho') {
            setDiaChi((prev) => ({ ...prev, Quan: null }))
            setDiaChi((prev) => ({ ...prev, Phuong: null }))
            setHotel((prev) => ({ ...prev, DiaChi: '' }))
        } else if (name === 'Quan') {
            setDiaChi((prev) => ({ ...prev, Phuong: null }))
            setHotel((prev) => ({ ...prev, DiaChi: '' }))
        } else if (name === 'Phuong') {
            setDiaChi((prev) => ({ ...prev, [name]: value }))
            setHotel((prev) => ({ ...prev, DiaChi: '' }))
        } else {
            setDiaChi((prev) => ({ ...prev, [name]: value }))
            if (diaChi.Phuong !== '' && diaChi.Quan !== '' && diaChi.ThanhPho !== '') {
                const DiaChi1 =
                    value + ', ' + diaChi.Phuong.label + ', ' + diaChi.Quan.label + ', ' + diaChi.ThanhPho.label
                setHotel((prev) => ({ ...prev, DiaChi: DiaChi1 }))
            }
        }
        setDiaChi((prev) => ({ ...prev, [name]: value }))
    }

    // Submit
    const handleSubmit = async (event) => {
        // Gửi dữ liệu formData về server
        try {
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
            console.log(url.length)

            if (url.length === 0) return
            const IDTienNghi = []
            console.log(nhan)
            const filteredTienNghi = tienNghi?.filter((item) => item.checked)
            for (const loai of filteredTienNghi) {
                for (const tiennghi of loai.TienNghi) {
                    IDTienNghi.push(tiennghi.ID)
                }
            }
            const filteredThongTin = thongTin.filter((item) => item.NoiDung !== '')
            hotel.nhan = nhan
            console.log(hotel)
            hotel.IDChuKhachSan = 1

            const res = await axios.post('http://localhost:8800/cks/addHotel', {
                HinhAnh: url,
                hotel: hotel,
                tienNghi: IDTienNghi,
                thongTin: filteredThongTin,
            })
            Nav('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section>
            <div className={`${styles.title} container`}>Đăng ký khách sạn của bạn với mytour chỉ 4 bước đơn giản</div>
            <div className={`${styles.content}  `}>
                <div className="row d-flex justify-content-center">
                    <div className="col col-xl-12">
                        <div className={`card ${styles.card}`} style={{ borderRadius: '1rem' }}>
                            <div className={styles.cardHeader}>
                                <h4 className={styles.cardTitle}>Form step</h4>
                            </div>
                            <div className={styles.cardBody}>
                                <ul id="progressbar">
                                    <li
                                        onClick={() => handleCheckboxSite(1)}
                                        className={`check ${selectedSite >= 1 && 'active'}`}
                                        id="account"
                                    ></li>
                                    <li
                                        onClick={() => handleCheckboxSite(2)}
                                        id="personal"
                                        className={`check ${selectedSite >= 2 && 'active'}`}
                                    ></li>
                                    {/* <li
                                        onClick={() => handleCheckboxSite(3)}
                                        id="confirm"
                                        className={`check ${selectedSite >= 3 && 'active'}`}
                                    ></li> */}
                                </ul>

                                <div
                                    className={`animate__animated animate__fadeInRight ${styles.contentHotel}`}
                                    style={{ display: `${selectedSite === 1 ? 'block' : 'none'}` }}
                                >
                                    <div className="row">
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Họ và tên
                                                    <span>
                                                        <span>*</span>
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.Ten === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    placeholder="Tên khách sạn"
                                                    onChange={(e) => {
                                                        handleChange(e.target.value, 'Ten')
                                                    }}
                                                    required=""
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Sao<span>*</span>
                                                </label>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={parseInt(hotel.soSao)}
                                                    onChange={(newValue) => {
                                                        handleChange(newValue.toString(), 'soSao')
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    % Giảm giá<span>*</span>
                                                </label>
                                                <NumericFormat
                                                    value={hotel.GiamGia}
                                                    // thousandSeparator="."
                                                    // decimalSeparator=","
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.GiamGia === '' && nextCheck && styles.inputRed
                                                    } ${hotel.GiamGia > 100 && styles.inputRed}`}
                                                    suffix=" %"
                                                    decimalScale={0}
                                                    allowNegative={false}
                                                    onValueChange={(values) =>
                                                        handleChange(values.floatValue, 'GiamGia')
                                                    }
                                                    min={1}
                                                    max={100}
                                                />
                                                {/* <input
                                                    type="number"
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.GiamGia === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    placeholder="Phần trăm"
                                                    onChange={(e) => {
                                                        handleChange(e.target.value, 'GiamGia')
                                                    }}
                                                    required=""
                                                /> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Tỉnh/thành phố<span>*</span>
                                                </label>
                                                <Select
                                                    // className={`form-control `}
                                                    className={` ${
                                                        diaChi.ThanhPho === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    value={diaChi.ThanhPho}
                                                    options={provinces}
                                                    placeholder="Chọn tỉnh/thành phố"
                                                    onChange={(selectedOption) =>
                                                        handleChangeDiaChi(selectedOption, 'ThanhPho')
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Quận/huyện<span>*</span>
                                                </label>
                                                <Select
                                                    // className={`form-control `}
                                                    className={` ${diaChi.Quan === '' && nextCheck && styles.inputRed}`}
                                                    value={diaChi.Quan}
                                                    options={districts}
                                                    placeholder="Chọn quận/huyện"
                                                    onChange={(selectedOption) =>
                                                        handleChangeDiaChi(selectedOption, 'Quan')
                                                    }
                                                    isDisabled={!diaChi.ThanhPho}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Phường/Xã <span>*</span>
                                                </label>
                                                <Select
                                                    // className={`form-control `}
                                                    className={` ${
                                                        diaChi.Phuong === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    value={diaChi.Phuong}
                                                    options={wards}
                                                    placeholder="Chọn phường/xã"
                                                    onChange={(selectedOption) =>
                                                        handleChangeDiaChi(selectedOption, 'Phuong')
                                                    }
                                                    isDisabled={!diaChi.ThanhPho || !diaChi.Quan}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Số nhà/Tên Đường<span>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    onChange={(e) => handleChangeDiaChi(e.target.value, 'Duong')}
                                                    className={`form-control ${styles.formControl}  ${
                                                        diaChi.Duong === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    placeholder="Nhập đường"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>Địa chỉ cụ thể</label>
                                                <input
                                                    disabled
                                                    type="text"
                                                    className={`form-control ${styles.formControl} ${styles.disabled}`}
                                                    value={hotel.DiaChi}
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Giờ nhận phòng<span>*</span>
                                                </label>
                                                <Select
                                                    className={` ${
                                                        hotel.GioNhanPhong === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    value={hotel.GioNhanPhong}
                                                    options={options}
                                                    placeholder="Chọn giờ nhận phòng"
                                                    onChange={(selectedOption) =>
                                                        handleChange(selectedOption, 'GioNhanPhong')
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Giờ Trả phòng<span>*</span>
                                                </label>
                                                <Select
                                                    className={` ${
                                                        hotel.GioTraPhong === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    value={hotel.GioTraPhong}
                                                    options={options}
                                                    placeholder="Chọn giờ trả phòng"
                                                    onChange={(selectedOption) =>
                                                        handleChange(selectedOption, 'GioTraPhong')
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Chính sách<span>*</span>
                                                </label>
                                                <textarea
                                                    rows={20}
                                                    cols={10}
                                                    onChange={(e) => {
                                                        handleChange(e.target.value, 'ChinhSach')
                                                    }}
                                                    className={`form-control ${styles.formControl} ${
                                                        hotel.ChinhSach === '' && nextCheck && styles.inputRed
                                                    }`}
                                                    defaultValue={hotel.ChinhSach}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Giới thiệu<span>*</span>
                                                </label>

                                                <Editor
                                                    onInit={() => 'gfd'}
                                                    // initialValue="<p>This is the initial content of the editor.</p>"
                                                    init={{
                                                        menubar: false,
                                                        plugins: [
                                                            'image',
                                                            'code',
                                                            'table',
                                                            'link',
                                                            'media',
                                                            'codesample',
                                                            'lists',
                                                        ],
                                                        toolbar: [
                                                            'undo redo | bold italic underline strikethrough | numlist bullist | alignleft aligncenter alignright| forecolor backcolor | table link image media codesample',
                                                        ],
                                                        codesample_languages: [
                                                            { text: 'HTML/XML', value: 'markup' },
                                                            { text: 'JavaScript', value: 'javascript' },
                                                            { text: 'CSS', value: 'css' },
                                                            { text: 'PHP', value: 'php' },
                                                            { text: 'Ruby', value: 'ruby' },
                                                            { text: 'Python', value: 'python' },
                                                            { text: 'Java', value: 'java' },
                                                            { text: 'C', value: 'c' },
                                                            { text: 'C#', value: 'csharp' },
                                                            { text: 'C++', value: 'cpp' },
                                                        ],
                                                    }}
                                                    onChange={(e) => {
                                                        handleChange(e.target.getContent(), 'GioiThieu')
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <div className="form-group mb-3">
                                                <label className={`text-label ${styles.label}`}>
                                                    Chọn ảnh khách sạn<span>*</span>
                                                </label>
                                                <AddMultiple
                                                    handleImagesChange={handleImagesChange}
                                                    // display={`${selectedSite === 3 ? 'block' : 'none'}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CheckFacility
                                    check={false}
                                    nextCheck={nextCheck}
                                    handleChangeTienNghi={handleChangeTienNghi}
                                    handleChangeThongTin={handleChangeThongTin}
                                    handleChangeNhan={handleChangeNhan}
                                    tienNghi={tienNghi}
                                    thongTin={thongTin}
                                    nhan={nhan}
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
                                            Đăng Ký
                                        </ButtonPrimary>
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
export default AddHotel
