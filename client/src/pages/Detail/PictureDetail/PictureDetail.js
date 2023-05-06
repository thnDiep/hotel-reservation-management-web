import React from 'react'
import classes from './PictureDetail.module.scss'

// import ButtonPopUpDetail from '~/components/DetailRoom/ButtonPopUpDetail/ButtonPopUpDetail'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import { clsx } from 'clsx'
import Popup from '~/components/DetailRoom/Popup/Popup';
const MySwal = withReactContent(Swal);
const PictureDetail = () => {
    const handleButtonClick = (index) =>
        MySwal.fire({
            title: 'Hình ảnh khách sạn',
            html: (
                <Popup index={index} />
            ),
            showCloseButton: true,
            showConfirmButton: false,
            width: '1140px',
            height: '80vh',
            backdrop: 'rgba(39,46,52,1)',
        })
    return (
        <div className="row" >
            <div className="col-lg-12 col-md-12">
                <div className={classes['box-slider']}>
                    <div className={`${classes['box-item-1']} `}>
                        <img onClick={() => handleButtonClick(0)}
                            src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                            alt=""
                        />
                    </div>
                    <div className={classes['box-item-content']}>
                        <div className={classes['box-second']}>
                            <img onClick={() => handleButtonClick(1)}
                                src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/d7f96e68f2a7ee8d7fc05a9fabc6440f.jpg"
                                alt=""
                            />
                        </div>
                        <div className={`${classes['item-box-plus']}`}>
                            <div className={classes['box-item-3']}>
                                <img onClick={() => handleButtonClick(2)}
                                    src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/d876d86e587c9a76cdaa1ceb46d2b483.jpg"
                                    alt=""
                                />
                            </div>
                            <div onClick={() => handleButtonClick(4)} className={classes['box-item-4']}>
                                <span >Xem tất cả ảnh</span>
                                <div className={classes.viewAll}></div>
                                <img
                                    src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/511a3eb5dc56b4a69e42ba2c93fc1d96.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PictureDetail
