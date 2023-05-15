import React from 'react'
import classes from './RoomItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUser,
    faShop,
    faCheck,
    faSmoking,
    faHouse,
    faBed,
    faWifi,
    faMountain,
    faWater,
} from '@fortawesome/free-solid-svg-icons'
import ButtonPrimary from '~/components/Button/ButtonPrimary'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Popup from '../Popup/Popup'
import { Link } from 'react-router-dom'
library.add(faHouse, faShop, faSmoking, faBed, faWifi, faMountain, faWater)
const MySwal = withReactContent(Swal)

const RoomItem = (props) => {
    const formatMoney = (amount) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    const handleButtonClick = (index) =>
        MySwal.fire({
            title: 'Hình ảnh khách sạn',
            html: <Popup index={index} picHotel={props.item.HinhAnh} check={true} tienNghi={props.item} />,
            showCloseButton: true,
            showConfirmButton: false,
            width: '1140px',
            height: '80vh',
            backdrop: 'rgba(39,46,52,1)',
        })
    return (
        <div className={classes.BoxRoomItem}>
            <div className={classes.BoxTitle}>{props.item.TenLoaiPhong}</div>
            <div className={classes.BoxContent}>
                <div className={classes.BoxContent__left}>
                    <div className={classes['BoxContent__left--img']}>
                        <img alt="jell" onClick={handleButtonClick} src={props.item.HinhAnh[0].HinhAnh} />
                    </div>
                    <div className={classes['BoxContent__left--facilities']}>
                        {props.item.tienNghi.map((data, index) => {
                            return data.TenLoai === 'Tiện Nghi' ? (
                                data.tienNghi.map((tiennghi, index) => {
                                    return tiennghi === null ? (
                                        <div key={index}></div>
                                    ) : (
                                        <div key={index} style={tiennghi.Icon === 'wifi' ? { color: '#32a923' } : null}>
                                            <FontAwesomeIcon
                                                style={tiennghi.Icon === 'wifi' ? { color: '#32a923' } : null}
                                                icon={['fas', tiennghi.Icon]}
                                                className="mx-3"
                                            />
                                            {tiennghi.TenTienNghi}
                                        </div>
                                    )
                                })
                            ) : (
                                <div key={index}></div>
                            )
                        })}
                    </div>
                </div>
                <div className={classes.BoxContent__right}>
                    <div className={classes['BoxContent__right--top']}>
                        <div className={classes['box-passenger']}>
                            <div>
                                <FontAwesomeIcon icon={faUser} /> x {props.item.SoNguoi} người lớn
                            </div>
                            <div className={classes.notice}>
                                1 bé dưới 11 tuổi được ở <span>MIỄN PHÍ</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['BoxContent__right--content']}>
                        <div className={classes['box-benefit']}>
                            <div className={classes.title}>Ưu đãi trong phòng</div>
                            <div className={classes.content}>
                                {props.item.UuDai.map((data) => {
                                    return (
                                        <div key={data.IDUuDai}>
                                            {' '}
                                            <FontAwesomeIcon icon={faCheck} />
                                            {data.NoiDung}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={classes.label}>
                                Lưu ý: Giá phòng có thể thay đổi vào các dịp lễ tết, cuối tuần...
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className={classes['BoxContent__right--bottom']}>
                        <div className={classes['box-rule-price']}>
                            <span>
                                <span className={classes.labelEndow}>Giảm {props.item.GiamGia}% hôm nay</span>
                                <i></i>
                            </span>
                        </div>
                        <div className={classes['box-price']}>
                            <div className={classes['box-price-inner']}>
                                <div className={classes.old}>{formatMoney(props.item.Gia).replace('₫', '')}VND</div>{' '}
                                {formatMoney(props.item.GiaSale).replace('₫', '')}VND <span>/ đêm</span>
                            </div>
                            <div>
                                <Link to={`/checkout/${props.item.ID}`}>
                                    <ButtonPrimary className="btn__order">Đặt phòng</ButtonPrimary>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes['BoxContent__right--note']}>
                        <div></div>
                        <span>Giá trên đã bao gồm thuế và phí</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RoomItem
