import React from 'react'
import classes from './PictureDetail.module.scss'

// import ButtonPopUpDetail from '~/components/DetailRoom/ButtonPopUpDetail/ButtonPopUpDetail'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import { clsx } from 'clsx'
import Popup from '~/components/DetailRoom/Popup/Popup'
import HeartButton from '~/components/Button/HeartButton'
const MySwal = withReactContent(Swal)
const PictureDetail = ({ picHotel, ID, liked }) => {
    const handleButtonClick = (index) => {
        MySwal.fire({
            title: 'Hình ảnh khách sạn',
            html: <Popup index={index} picHotel={picHotel} check={false} />,
            showCloseButton: true,
            showConfirmButton: false,
            width: '1140px',
            height: '80vh',
            backdrop: 'rgba(39,46,52,1)',
            customClass: 'khachsan',
        })
    }

    return (
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className={classes['box-slider']}>
                    <div className={`${classes['box-item-1']} `}>
                        <img onClick={() => handleButtonClick(0)} src={picHotel[0].HinhAnh} alt="" />
                    </div>
                    <div className={classes['box-item-content']}>
                        <div className={classes['box-second']}>
                            <HeartButton liked={liked} IDKhachSan={ID} />
                            <img onClick={() => handleButtonClick(1)} src={picHotel[1].HinhAnh} alt="" />
                        </div>
                        <div className={`${classes['item-box-plus']}`}>
                            <div className={classes['box-item-3']}>
                                <img onClick={() => handleButtonClick(2)} src={picHotel[2].HinhAnh} alt="" />
                            </div>
                            <div onClick={() => handleButtonClick(4)} className={classes['box-item-4']}>
                                <span>Xem tất cả ảnh</span>
                                <div className={classes.viewAll}></div>
                                <img src={picHotel[3].HinhAnh} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PictureDetail
