import { useState, useRef, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Axios from 'axios'

import DataContext from '~/contexts/DataContext'
import { DropdownButton, NavHandle, ConformModal } from '~/components'
import HotelTable from '~/components/Table/Hotel'
import styles from './Hotel.module.scss'
import hotel from '~/assets/jsons/Admin/hotel.json'

function Hotel() {
    const navigate = useNavigate()

    const [active, setActive] = useState(0)
    const [showConformModal, setShowConformModal] = useState(false)
    const [showInformModal, setShowInformModal] = useState(false)

    const { data, handleData } = useContext(DataContext)
    const [option, setOption] = useState([])
    const [hotels, setHotels] = useState()
    const [hotelA, setHotelA] = useState(null)

    useEffect(() => {
        console.log('render')
        if (data) {
            setHotels(data.hotels)
            // console.log(data)
            // console.log(data.hotels)
            setOption([
                {
                    name: 'Xem khách sạn',
                    handle: function (idActive) {
                        navigate(`/admin/hotels/detail/${idActive}`)
                    },
                },
                {
                    name: 'Liên lạc',
                    link: 'tel:',
                },
                {
                    name: 'Duyệt',
                    handle: function (idActive) {
                        handleUpdateState(idActive, 1)
                    },
                },
                {
                    name: 'Khóa',
                    handle: function (idActive) {
                        const hotelActive = data.hotels.find((key) => key.ID === idActive)
                        setHotelA(hotelActive)
                        setShowConformModal(true)
                    },
                },
                {
                    name: 'Gỡ khóa',
                    handle: function (idActive) {
                        handleUpdateState(idActive, 1)
                    },
                },
            ])
        }
    }, [data])

    // function updateHotel(hotelActive, ChuKhachSan, DanhGia, HinhAnh) {
    //     Axios.post('http://localhost:8800/hotel/update', {
    //         khachsan: hotelActive,
    //     })
    //         .then(() => {
    //             setShowInformModal(true)

    //             window.setTimeout(function () {
    //                 setShowInformModal(false)
    //             }, 1000)

    //             hotelActive.ChuKhachSan = ChuKhachSan
    //             hotelActive.DanhGia = DanhGia
    //             hotelActive.HinhAnh = HinhAnh

    //             const index = hotels.findIndex((item) => item.ID === hotelActive.ID)
    //             hotels[index].TrangThai = hotelActive.TrangThai
    //             setHotels(hotels)
    //             setHotelA(null)
    //             setShowConformModal(false)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             setShowConformModal(false)
    //         })
    // }

    function handleUpdateState(idActive, state) {
        // const hotelActive = data.hotels.find((key) => key.ID === idActive)
        // hotelActive.TrangThai = 1
        // const ChuKhachSan = hotelActive.ChuKhachSan
        // const DanhGia = hotelActive.DanhGia
        // const HinhAnh = hotelActive.HinhAnh
        // delete hotelActive.ChuKhachSan
        // delete hotelActive.DanhGia
        // delete hotelActive.HinhAnh
        // updateHotel(hotelActive, ChuKhachSan, DanhGia, HinhAnh)
        Axios.post('http://localhost:8800/hotel/update/state', {
            id: idActive,
            state,
        })
            .then(() => {
                setShowInformModal(true)

                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)

                const index = hotels.findIndex((item) => item.ID === idActive)
                hotels[index].TrangThai = state

                setHotels(hotels)
                handleData({ ...data, hotels: hotels })
                setHotelA(null)
                setShowConformModal(false)
            })
            .catch((error) => {
                console.log(error)
                setShowConformModal(false)
            })
    }

    function handleBlockHotel() {
        // hotelA.TrangThai = 2

        // const ChuKhachSan = hotelA.ChuKhachSan
        // const DanhGia = hotelA.DanhGia
        // const HinhAnh = hotelA.HinhAnh

        // delete hotelA.ChuKhachSan
        // delete hotelA.DanhGia
        // delete hotelA.HinhAnh

        // updateHotel(hotelA, ChuKhachSan, DanhGia, HinhAnh)
        handleUpdateState(hotelA.ID, 2)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <NavHandle list={hotel.menu} active={active} onActive={setActive} />
                {/* <DropdownButton list={['Mới nhất', 'Cũ nhất']} /> */}
            </div>
            <HotelTable option={option} header={hotel.header} data={hotels} filter={active} />

            {/* Xác nhận khóa */}
            <ConformModal
                show={showConformModal}
                onClose={() => setShowConformModal(false)}
                onConform={() => handleBlockHotel()}
                content={`Bạn chắc chắn muốn khóa khách sạn`}
                highlight={hotelA && hotelA.Ten}
                conFormBtn="Khóa"
            />

            {/* Thông báo thành công */}
            {showInformModal && (
                <div id="myModal" className="myModal1">
                    {/* <!-- Modal content --> */}
                    <div className="modalContent">
                        <FontAwesomeIcon icon={faCheckCircle} className="modalIcon" />
                        <div>Thao tác thành công</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hotel
