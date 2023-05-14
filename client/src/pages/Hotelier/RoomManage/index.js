import React, { useState } from 'react'
import styles from './RoomManage.module.scss'
import { ButtonPrimary, ConformModal } from '~/components'
import Select from 'react-select'
import RoomCKS from '~/components/Table/RoomCKS'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '~/contexts/DataContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
const RoomManage = () => {
    const navigate = useNavigate()
    // const optionsHotel = [
    //     { value: 'Khách sạn Hoàng Gia', label: 'Khách sạn Hoàng Gia' },
    //     { value: 'Khách sạn Hoàng hậu', label: 'Khách sạn Hoàng hậu' },
    //     { value: 'Khách sạn Hoàng Đế', label: 'Khách sạn Hoàng Đế' },
    //     { value: 'Khách sạn Thái tử', label: 'Khách sạn Thái tử' },
    //     { value: 'Khách sạn Hoàng Tử', label: 'Khách sạn Hoàng Tử' },
    // ]
    const [optionHotel, setOptionHotel] = useState(null)
    const [hotel, setHotel] = useState(null)
    const [option, setOption] = useState(null)
    const handleChange = (selectedOption) => {
        setHotel(selectedOption)
    }
    const [roomActive, setRoomActive] = useState(null)

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showStopModal, setShowStopModal] = useState(false)
    const { data, handleData } = useContext(DataContext)
    const [errorMessage, setErrorMessage] = useState({ value: '', check: false })
    useEffect(() => {
        localStorage.setItem('paths', ['/Quản lý phòng'])
    }, [])
    useEffect(() => {
        // if (hotels) {
        // console.log(hotel)
        if (data) {
            const optionHotel1 = []
            console.log(data)
            for (const hotel of data.hotels) {
                optionHotel1.push({ value: hotel, label: hotel.Ten })
            }
            setOptionHotel(optionHotel1)
            setHotel(optionHotel1[0])
            setOption([
                {
                    name: 'Chỉnh sửa',
                    handle: function (idActive, type) {
                        navigate(`/cks/addRoom/${type}/${idActive}`)
                    },
                },
                {
                    name: 'Xóa',
                    handle: function (idActive, index) {
                        const room = data.hotels.reduce((foundRoom, hotel) => {
                            if (!foundRoom) {
                                const roomInHotel = hotel.phong.find((room) => room.ID === idActive)
                                return roomInHotel ? roomInHotel : foundRoom
                            }
                            return foundRoom
                        }, null)

                        console.log(room)
                        setRoomActive(room)
                        setShowDeleteModal(true)
                    },
                },
                {
                    name: 'Tạm ngưng',
                    handle: function (idActive, index) {
                        const room = data.hotels.reduce((foundRoom, hotel) => {
                            if (!foundRoom) {
                                const roomInHotel = hotel.phong.find((room) => room.ID === idActive)
                                return roomInHotel ? roomInHotel : foundRoom
                            }
                            return foundRoom
                        }, null)
                        setRoomActive(room)
                        setShowStopModal(true)
                    },
                },
                {
                    name: 'Tiếp tục',
                    handle: function (idActive) {
                        const hotelActive = data.hotels.reduce((foundRoom, hotel) => {
                            if (!foundRoom) {
                                const roomInHotel = hotel.phong.find((room) => room.ID === idActive)
                                return roomInHotel ? roomInHotel : foundRoom
                            }
                            return foundRoom
                        }, null)
                        handleStopRoom(1, hotelActive.ID)
                    },
                },
            ])
        }
        // }
    }, [data])
    const [showInformModal, setShowInformModal] = useState(false)
    //console.log(data)
    function handleDeleteRoom() {
        axios
            .get('http://localhost:8800/cks/room/del', { params: { IDPhong: roomActive.ID } })
            .then((res) => {
                setErrorMessage({ value: 'Xóa thành công', check: true })

                const updatedHotels = data.hotels.map((hotel) => {
                    const updatedRooms = hotel.phong.filter((room) => room.ID !== roomActive.ID)
                    return {
                        ...hotel,
                        phong: updatedRooms,
                    }
                })
                handleData({
                    ...data,
                    hotels: updatedHotels,
                })
                setRoomActive(null)
                setShowDeleteModal(false)
            })
            .catch((error) => {
                setErrorMessage({ value: error.response.data, check: true })
                setShowDeleteModal(false)
            })
            .finally(() => {
                setShowInformModal(true)
                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)
            })
    }
    function handleStopRoom(TrangThai, IDPhong) {
        axios
            .get('http://localhost:8800/cks/room/stop', {
                params: { IDPhong: IDPhong, TrangThai: TrangThai },
            })
            .then((response) => {
                setErrorMessage({ value: response.data, check: true })
                console.log('helllo')

                handleData({
                    hotels: data.hotels.map((hotel) => {
                        const updatedRooms = hotel.phong.map((room) =>
                            room.ID === IDPhong ? { ...room, TrangThai: TrangThai } : room,
                        )
                        return {
                            ...hotel,
                            phong: updatedRooms,
                        }
                    }),
                })

                setRoomActive(null)
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
    //console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
    //console.log(hotel?.value?.phong)
    //console.log(hotel?.value?.hinhanh_phong)
    return (
        <div className={styles.content}>
            <div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
                <div className={styles.leftContent}>
                    <div className="d-flex justify-content-start mt-2">
                        <span className={` ${styles.leftTitle} `}>Khách sạn: </span>
                        <span className="">{hotel && hotel.value.Ten}</span>
                    </div>
                    <div className="d-flex justify-content-start mt-2">
                        <span className={` ${styles.leftTitle} `}>Địa chỉ: </span>
                        <span className="">{hotel && hotel.value.DiaChi}</span>
                    </div>
                    <div className="d-flex justify-content-start mt-2">
                        <span className={` ${styles.leftTitle} `}>Điện thoại: </span>
                        <span className="">0985154345</span>
                    </div>
                </div>
                {/* <NavBar list={['Tất cả', 'chờ duyệt', 'hoạt động', 'Đã khóa']}></NavBar> */}
                <div className={`${styles.rightContent} d-flex flex-column align-items-end `}>
                    <Select
                        className={`col-5 ${styles.selectHotel}`}
                        value={hotel}
                        options={optionHotel}
                        // placeholder="Chọn hạng"
                        onChange={(selectedOption) => handleChange(selectedOption)}
                    />
                    <div className="d-flex justify-content-between mb-2">
                        <div></div>
                        {hotel && (
                            <Link to={`/cks/addRoom/${hotel.value.ID}`}>
                                <ButtonPrimary className="btnLarge1">+ Thêm phòng</ButtonPrimary>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-xl-12">
                    {/* <div id="room_wrapper" className="dataTables_wrapper no-footer"> */}
                    {hotel && <RoomCKS option={option} rooms={hotel.value.phong} />}
                    {/* <FooterPaging /> */}
                    {/* </div> */}
                </div>
            </div>
            {/* Xác nhận xóa */}
            <ConformModal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConform={() => handleDeleteRoom()}
                content={`Bạn chắc chắn muốn xóa khách sạn`}
                highlight={roomActive && roomActive.TieuDe}
            />
            {/* Xác nhận khóa */}
            <ConformModal
                show={showStopModal}
                onClose={() => setShowStopModal(false)}
                onConform={() => handleStopRoom(2, roomActive.ID)}
                content={`Bạn chắc chắn muốn khóa phòng`}
                highlight={roomActive && roomActive.TieuDe}
            />
            {/* Thông báo thành công */}
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
export default RoomManage
