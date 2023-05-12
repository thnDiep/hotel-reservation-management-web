import React from 'react'
import styles from './HotelManagement.module.scss'
import { ButtonPrimary, ConformModal, NavHandle } from '~/components'
import { HotelCKSTable } from '~/components/Table'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import DataContext from '~/contexts/DataContext'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
const HotelManagement = () => {
    const navigate = useNavigate()

    const [active, setActive] = useState(0)
    const handleActive = (value) => {
        setActive(value)
    }
    const [option, setOption] = useState()
    // const [data, setData] = useState(null)
    // const navigate = useNavigate()
    const [hotelActive, setHotelActive] = useState(null)
    const [showDeleteModal, setShowDeleteModal] = useState(null)
    const [showInformModal, setShowInformModal] = useState(false)
    const { data, handleData } = useContext(DataContext)
    useEffect(() => {
        // if (hotels) {
        // console.log(hotels)
        if (data) {
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
            ])
        }
        // }
    }, [data])
    function handleDeleteHotel() {
        axios
            .get('http://localhost:8800/cks/hotel/del', { params: { idKhachSan: hotelActive.ID } })
            .then(() => {
                setShowInformModal(true)

                window.setTimeout(function () {
                    setShowInformModal(false)
                }, 1000)
                console.log('helllo')
                handleData({
                    hotels: data.hotels.filter((key) => key.ID !== hotelActive.ID),
                })
                setHotelActive(null)
                setShowDeleteModal(false)
            })
            .catch((error) => {
                console.log(error)
                setShowDeleteModal(false)
            })
    }
    return (
        <div className={styles.content}>
            <div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
                <NavHandle
                    list={['Tất cả', 'chờ duyệt', 'hoạt động', 'Đã khóa']}
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
                    {data && <HotelCKSTable option={option} hotels={data} />}
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
export default HotelManagement
