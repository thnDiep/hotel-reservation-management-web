import React from 'react'
import styles from './HotelManagement.module.scss'
import { ButtonPrimary, ConformModal, NavHandle } from '~/components'
import { HotelCKSTable } from '~/components/Table'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import DataContext from '~/contexts/DataContext'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
const HotelManagement = () => {
    const navigate = useNavigate()

    const [active, setActive] = useState(0)
    const handleActive = (value) => {
        setActive(value)
        if (value === 1 && value !== active) {
            setHotels(data.hotels.filter((key) => key.TrangThai === 1))
        } else if (value === 2 && value !== active) {
            setHotels(data.hotels.filter((key) => key.TrangThai === 0))
        } else if (value === 3 && value !== active) {
            setHotels(data.hotels.filter((key) => key.TrangThai === 3))
        } else {
            setHotels(data.hotels)
        }
    }
    const [option, setOption] = useState()
    // const [data, setData] = useState(null)
    // const navigate = useNavigate()
    const [hotelActive, setHotelActive] = useState(null)
    const [showDeleteModal, setShowDeleteModal] = useState(null)
    const [showStopModal, setShowStopModal] = useState(null)
    const [showInformModal, setShowInformModal] = useState(false)
    const { data, handleData } = useContext(DataContext)
    const [hotels, setHotels] = useState(null)
    const [errorMessage, setErrorMessage] = useState({ value: '', check: false })
    useEffect(() => {
        // if (hotels) {
        // console.log(hotels)
        if (data) {
            console.log(data)
            setHotels(data.hotels)
            setOption([
                {
                    name: 'Chỉnh sửa',
                    handle: function (idActive, type) {
                        navigate(`/cks/addHotel/${type}/${idActive}`)
                    },
                },
                {
                    name: 'Xóa',
                    handle: function (idActive, index) {
                        const hotel = data.hotels.find((key) => key.ID === idActive)
                        setHotelActive(hotel)
                        setShowDeleteModal(true)
                    },
                },
                {
                    name: 'Tạm ngưng',
                    handle: function (idActive, index) {
                        const hotel = data.hotels.find((key) => key.ID === idActive)
                        setHotelActive(hotel)
                        setShowStopModal(true)
                    },
                },
                {
                    name: 'Tiếp tục',
                    handle: function (idActive) {
                        const hotelActive = data.hotels.find((key) => key.ID === idActive)
                        handleStopHotel(1, 'Hoạt động thành công', hotelActive.ID)
                    },
                },
            ])
        }
        // }
    }, [data])

    function handleDeleteHotel() {
        axios
            .get('http://localhost:8800/cks/hotel/del', { params: { idKhachSan: hotelActive.ID } })
            .then((response) => {
                setErrorMessage({ value: 'Xóa thành công', check: true })
                console.log('helllo')
                handleData({
                    hotels: data.hotels.filter((key) => key.ID !== hotelActive.ID),
                })
                setHotelActive(null)
                setShowDeleteModal(false)
            })
            .catch((error) => {
                // console
                setErrorMessage({ value: error.response.data, check: false })
                // setErrorMessage(error.response.data)
                setShowDeleteModal(false)
            })
            .finally(() => {
                setShowInformModal(true)
                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)
            })
    }
    function handleStopHotel(TrangThai, message, IDKhachSan) {
        axios
            .get('http://localhost:8800/cks/hotel/stop', {
                params: { IDKhachSan: IDKhachSan, TrangThai: TrangThai },
            })
            .then((response) => {
                setErrorMessage({ value: message, check: true })
                console.log('helllo')
                handleData({
                    hotels: data.hotels.map((hotel) => {
                        return hotel.ID === IDKhachSan ? { ...hotel, TrangThai: TrangThai } : hotel
                    }),
                })
                setHotels(
                    hotels.map((hotel) => {
                        return hotel.ID === IDKhachSan ? { ...hotel, TrangThai: TrangThai } : hotel
                    }),
                )

                setHotelActive(null)
                setShowStopModal(false)
            })
            .catch((error) => {
                // console
                setErrorMessage({ value: error.response.data, check: false })
                // setErrorMessage(error.response.data)
                setShowStopModal(false)
            })
            .finally(() => {
                setShowInformModal(true)
                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)
            })
    }
    return (
        <div className={styles.content}>
            <div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
                <NavHandle
                    list={['Tất cả', 'hoạt động', 'chờ duyệt', 'Tạm ngưng']}
                    active={active}
                    onActive={handleActive}
                />

                {/* <NavBar list={['Tất cả', 'chờ duyệt', 'hoạt động', 'Đã khóa']}></NavBar> */}
                <div className="d-flex align-items-center mb-2">
                    <Link to="/cks/addHotel">
                        <ButtonPrimary className="btnLarge1">+ Thêm khách sạn</ButtonPrimary>
                    </Link>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12">
                    {/* <div className="card"> */}
                    {/* <div className="card-body p-0"> */}
                    {/* <div id="room_wrapper" className="dataTables_wrapper no-footer"> */}
                    {hotels && <HotelCKSTable option={option} hotels={hotels} />}
                    {/* <FooterPaging /> */}
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
            {/* Xác nhận xóa */}
            <ConformModal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConform={() => handleDeleteHotel()}
                content={`Bạn chắc chắn muốn xóa khách sạn`}
                highlight={hotelActive && hotelActive.TieuDe}
            />
            {/* Xác nhận ngung */}
            <ConformModal
                conFormBtn="OK"
                show={showStopModal}
                onClose={() => setShowStopModal(false)}
                onConform={() => handleStopHotel(3, 'Tạm ngưng thành công', hotelActive.ID)}
                content={`Bạn chắc chắn muốn tạm ngưng khách sạn`}
                highlight={hotelActive && hotelActive.TieuDe}
            />
            {/* Thông báo thành công */}
            {showInformModal && (
                <div id="myModal" className="myModal1">
                    {/* <!-- Modal content --> */}
                    <div className={`modalContent ${errorMessage.check ? '' : 'modalContentClose'}`}>
                        {errorMessage.check ? (
                            <FontAwesomeIcon icon={faCheckCircle} className="modalIcon" />
                        ) : (
                            <FontAwesomeIcon icon={faTimesCircle} className="modalIcon close" />
                        )}
                        <div>{errorMessage.value}</div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default HotelManagement
