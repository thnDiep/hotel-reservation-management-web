import Slider from 'react-slick'

import { NextArrow, PrevArrow } from '~/components/Slider'
import CardHotel from '../CardHotel'
import styles from './SliderHotels.module.scss'

function SliderHotels(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    return (
        <Slider {...settings} className="home">
            <div className="part__hotels">
                {props.hotels.slice(0, 4).map((des, index) => {
                    if (des.GiamGia !== 0) {
                        return (
                            <CardHotel
                                key={index}
                                ID={des.ID}
                                image={des.HinhAnh}
                                name={des.Ten}
                                percentDiscount={des.GiamGia}
                                promotion={[des.Nhan]}
                                rate={des.soSao}
                                liked={des.YeuThich}
                                type={des.type}
                                numberFeedback={des.SoDanhGia}
                                place={des.DiaDiem}
                                point={des.DanhGia}
                                oldPrice={des.GiaTieuChuan}
                                curPrice={props.FS ? des.GiaFS : des.GiaSauKhiGiam}
                                voucher={props.FS ? null : des.voucher}
                                admin={props.admin}
                            />
                        )
                    } else {
                        return (
                            <CardHotel
                                key={index}
                                ID={des.ID}
                                image={des.HinhAnh}
                                name={des.Ten}
                                percentDiscount={des.GiamGia}
                                promotion={[des.Nhan]}
                                rate={des.soSao}
                                liked={des.YeuThich}
                                type={des.type}
                                numberFeedback={des.SoDanhGia}
                                place={des.DiaDiem}
                                point={des.DanhGia}
                                curPrice={props.FS ? des.GiaFS : des.GiaTieuChuan}
                                voucher={props.FS ? null : des.voucher}
                                admin={props.admin}
                            />
                        )
                    }
                })}
            </div>

            {props.hotels[4] && (
                <div className="part__hotels">
                    {props.hotels.slice(4, 8).map((des, index) => {
                        if (des.GiamGia !== 0) {
                            return (
                                <CardHotel
                                    key={index}
                                    ID={des.ID}
                                    image={des.HinhAnh}
                                    name={des.Ten}
                                    percentDiscount={des.GiamGia}
                                    promotion={[des.Nhan]}
                                    rate={des.soSao}
                                    liked={des.YeuThich}
                                    type={des.type}
                                    numberFeedback={des.SoDanhGia}
                                    place={des.DiaDiem}
                                    point={des.DanhGia}
                                    oldPrice={des.GiaTieuChuan}
                                    curPrice={props.FS ? des.GiaFS : des.GiaSauKhiGiam}
                                    // voucher={{ code: 'GIAIPHONG', percent: 1, price: '5.729.940' }}
                                    // memberDiscount={19}
                                    voucher={props.FS ? null : des.voucher}
                                    admin={props.admin}
                                />
                            )
                        } else {
                            return (
                                <CardHotel
                                    key={index}
                                    ID={des.ID}
                                    image={des.HinhAnh}
                                    name={des.Ten}
                                    percentDiscount={des.GiamGia}
                                    promotion={[des.Nhan]}
                                    rate={des.soSao}
                                    liked={des.YeuThich}
                                    type={des.type}
                                    numberFeedback={des.SoDanhGia}
                                    place={des.DiaDiem}
                                    point={des.DanhGia}
                                    curPrice={props.FS ? des.GiaFS : des.GiaTieuChuan}
                                    voucher={props.FS ? null : des.voucher}
                                    // voucher={{ code: 'GIAIPHONG', percent: 1, price: '5.729.940' }}
                                    // memberDiscount={19}
                                    admin={props.admin}
                                />
                            )
                        }
                    })}
                </div>
            )}
        </Slider>
    )
}

export default SliderHotels
