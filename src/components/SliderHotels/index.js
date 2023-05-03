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
                {props.hotels.slice(0, 4).map((des, index) => (
                    <CardHotel
                        key={index}
                        image={des.image}
                        name="Sailing Club Signature Resort Phú Quốc"
                        percentDiscount={14}
                        promotion={['Ưu đãi chớp nhoáng']}
                        rate={3}
                        liked={true}
                        type="Khu nghỉ dưỡng"
                        numberFeedback={123}
                        place={des.name}
                        point={8.5}
                        oldPrice="6.677.411"
                        curPrice="5.729.940"
                        voucher={{ code: 'GIAIPHONG', percent: 1, price: '5.729.940' }}
                        memberDiscount={19}
                    />
                ))}
            </div>

            <div className="part__hotels">
                {props.hotels.slice(4, 8).map((des, index) => (
                    <CardHotel
                        key={index}
                        image={des.image}
                        name="Sailing Club Signature Resort Phú Quốc"
                        percentDiscount={14}
                        promotion={['Ưu đãi chớp nhoáng']}
                        rate={3}
                        liked={true}
                        type="Khu nghỉ dưỡng"
                        numberFeedback={123}
                        place={des.name}
                        point={8.5}
                        oldPrice="6.677.411"
                        curPrice="5.729.940"
                        voucher={{ code: 'GIAIPHONG', percent: 1, price: '5.729.940' }}
                        // memberDiscount={19}
                    />
                ))}
            </div>
        </Slider>
    )
}

export default SliderHotels
