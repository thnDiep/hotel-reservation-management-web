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

    const { data } = useContext(DataContext)
    const [option, setOption] = useState([])
    const [hotels, setHotels] = useState()
    const [hotelActive, setHotelActive] = useState(null)

    useEffect(() => {
        if (data) {
            setHotels(data.hotels)
            setOption([
                {
                    name: 'Xem khách sạn',
                    handle: function (idActive) {
                        navigate(`/hotels/detail/${idActive}`)
                    },
                },
                {
                    name: 'Liên lạc',
                    link: 'tel:',
                },
                {
                    name: 'Duyệt',
                    handle: function (idActive) {
                        const hotelActive = data.hotels.find((key) => key.ID === idActive)
                        hotelActive.TrangThai = 1

                        const ChuKhachSan = hotelActive.ChuKhachSan
                        const DanhGia = hotelActive.DanhGia

                        delete hotelActive.ChuKhachSan
                        delete hotelActive.DanhGia
                        updateHotel(hotelActive, ChuKhachSan, DanhGia)
                    },
                },
                {
                    name: 'Khóa',
                    handle: function (idActive) {
                        const hotelActive = data.hotels.find((key) => key.ID === idActive)
                        setHotelActive(hotelActive)
                        setShowConformModal(true)
                    },
                },
                {
                    name: 'Gỡ khóa',
                    handle: function (idActive) {
                        const hotelActive = data.hotels.find((key) => key.ID === idActive)
                        hotelActive.TrangThai = 1

                        const ChuKhachSan = hotelActive.ChuKhachSan
                        const DanhGia = hotelActive.DanhGia

                        delete hotelActive.ChuKhachSan
                        delete hotelActive.DanhGia
                        updateHotel(hotelActive, ChuKhachSan, DanhGia)
                    },
                },
            ])
        }
    }, [data])

    function updateHotel(hotelActive, ChuKhachSan, DanhGia) {
        Axios.post('http://localhost:8800/hotel/update', {
            khachsan: hotelActive,
        })
            .then(() => {
                setShowInformModal(true)

                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)

                hotelActive.ChuKhachSan = ChuKhachSan
                hotelActive.DanhGia = DanhGia

                hotels.forEach((hotel) => {
                    if (hotel.ID === hotelActive.ID) {
                        hotel = hotelActive
                    }
                })

                setHotels(hotels)
                setHotelActive(null)
                setShowConformModal(false)
            })
            .catch((error) => {
                console.log(error)
                setShowConformModal(false)
            })
    }

    function handleBlockHotel() {
        hotelActive.TrangThai = 2

        const ChuKhachSan = hotelActive.ChuKhachSan
        const DanhGia = hotelActive.DanhGia

        delete hotelActive.ChuKhachSan
        delete hotelActive.DanhGia

        updateHotel(hotelActive, ChuKhachSan, DanhGia)
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
                highlight={hotelActive && hotelActive.Ten}
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
