import { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import clsx from 'clsx'
import moment from 'moment'

import styles from './Home.module.scss'
import notableDes from '~/assets/jsons/notable.json'
import vinpearlDes from '~/assets/jsons/vinpearl.json'
import { PlaceBar, CardHotel, CardVinpearl, ButtonPrimary, Search, RecentViews, SliderHotels } from '~/components'
import { NextArrow, PrevArrow } from '~/components/Slider'
import { Vouchers, ConditionModal, Banner } from './components'

function Home() {
    const intervalRef = useRef()
    const vidRef = useRef()
    const today = useRef(new Date())
    const periodFlashSale = useRef([
        {
            start: new Date(new Date().setHours(9, 0, 0, 0)),
            end: new Date(new Date().setHours(12, 0, 0, 0)),
        },
        {
            start: new Date(new Date().setHours(14, 0, 0, 0)),
            end: new Date(new Date().setHours(16, 0, 0, 0)),
        },
        {
            start: new Date(new Date().setHours(19, 0, 0, 0)),
            end: new Date(new Date().setHours(23, 0, 0, 0)),
        },
        {
            start: new Date(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(9, 0, 0, 0)),
            end: new Date(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(12, 0, 0, 0)),
        },
        {
            start: new Date(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(14, 0, 0, 0)),
            end: new Date(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(16, 0, 0, 0)),
        },
    ])

    const [indexPeriod, setIndexPeriod] = useState(() => {
        let lastIndex = -1
        periodFlashSale.current.map((period, index) => {
            if (today.current > period.end) {
                lastIndex = index
            }
        })
        ++lastIndex
        return { active: lastIndex, current: lastIndex }
    })
    const [timeLeft, setTimeLeft] = useState(() => {
        const now = today.current
        const start = periodFlashSale.current[indexPeriod.current].start
        const end = periodFlashSale.current[indexPeriod.current].end

        if (now < start) {
            return start - now
        } else {
            return end - now
        }
    })
    const [indexShockPrice, setIndexShockPrice] = useState(0)
    const [showConditionModal, setShowConditionModal] = useState(false) // Modal Điều kiện & thể lệ chương trình

    // Count down
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimeLeft((t) => t - 1000)
        }, 1000)
        return () => clearInterval(intervalRef.current)
    }, [])

    // Xóa Interval khi hết CountDown
    useEffect(() => {
        if (timeLeft <= 0) {
            clearInterval(intervalRef.current)
        }
    }, [timeLeft])

    function handleChooseShockPricePlace(index) {
        setIndexShockPrice(index)
    }

    // for Slider
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    // video intro autoplay
    useEffect(() => {
        vidRef.current.play()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.introduction}>
                <video
                    className={styles.videoBackground}
                    src="https://storage.googleapis.com/tripi-assets/mytour/videos/video_bg_mytour.mov"
                    ref={vidRef}
                    muted
                    autoPlay
                    loop
                ></video>

                <Search />

                <p>Đăng nhập để nhận thêm ưu đãi 15% khi đặt phòng khách sạn, vé máy bay</p>

                <ButtonPrimary className="btnIntroduction">Đăng nhập/Đăng ký</ButtonPrimary>
            </div>

            <Vouchers onClick={() => setShowConditionModal(true)} />
            <ConditionModal show={showConditionModal} onHide={() => setShowConditionModal(false)} />

            <div className={clsx(styles.flashSale, 'part')}>
                <div className="part__content">
                    <div className="part__header">
                        <div>
                            <h1 className={clsx(styles.title, 'd-none')}>Flash Sale</h1>
                            <img
                                className={styles.imgTitle}
                                src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_flashSale_home_white_new.png"
                            />
                            <div className="d-flex-js">
                                {today.current < periodFlashSale.current[indexPeriod.current].start ? (
                                    <h6 className={styles.subTitle}>Chương trình sẽ diễn ra trong</h6>
                                ) : (
                                    <h6 className={styles.subTitle}>Chương trình sẽ kết thúc trong</h6>
                                )}

                                <div className={styles.countDown}>
                                    <div className={styles.timer}>{new Date(timeLeft).toISOString().slice(11, 13)}</div>
                                    <span>:</span>
                                    <div className={styles.timer}>{new Date(timeLeft).toISOString().slice(14, 16)}</div>
                                    <span>:</span>
                                    <div className={styles.timer}>{new Date(timeLeft).toISOString().slice(17, 19)}</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            {periodFlashSale.current.map((period, index) => (
                                <div
                                    key={index}
                                    className={clsx(
                                        styles.period,
                                        { [styles.active]: index === indexPeriod.active },
                                        { [styles.disabled]: index < indexPeriod.current },
                                    )}
                                    onClick={() => setIndexPeriod({ ...indexPeriod, active: index })}
                                >
                                    <h3>
                                        {period.start.getHours()}:00 - {period.end.getHours()}:00
                                    </h3>
                                    {period.disabled && <p>Đã kết thúc</p>}
                                    {period.active && (
                                        <p>
                                            ĐANG DIỄN RA
                                            <img src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_fire.png" />
                                        </p>
                                    )}
                                    {!period.active && today.current.getDay() === period.start.getDay() ? (
                                        <p>Sắp diễn ra</p>
                                    ) : (
                                        <p>{moment(period.start).format('DD/MM')}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <SliderHotels hotels={notableDes} />

                    {/* <div className="part__footer">
                        <ButtonPrimary className="btnSeeMore-m">Xem thêm</ButtonPrimary>
                    </div> */}
                </div>
            </div>

            <div className={clsx(styles.trending, 'part')}>
                <div className="part__content">
                    <h1 className="part__title">Đang thịnh hành</h1>
                    <h6 className="part__subTitle">Các khách sạn được tìm kiếm & đặt nhiều nhất do Mytour đề xuất</h6>

                    <SliderHotels hotels={notableDes} />
                </div>
            </div>

            <div className={clsx(styles.shockPrice, 'part')}>
                <div className="part__content">
                    <h1 className="part__title">Khách sạn giá sốc chỉ có trên Evivu</h1>
                    <h6 className="part__subTitle">
                        Tiết kiệm chi phí với các khách sạn hợp tác chiến lược cùng Evivu, cam kết giá tốt nhất và chất
                        lượng dịch vụ tốt nhất dành cho bạn.
                    </h6>

                    <PlaceBar
                        placeNameList={notableDes.reduce((places, currentPlace) => [...places, currentPlace.name], [])}
                        showNumber={10}
                        indexActive={indexShockPrice}
                        onChoose={handleChooseShockPricePlace}
                    />

                    <div className={styles.suggestTag}>
                        <p>Tìm khách sạn tại {notableDes[indexShockPrice].name}:</p>
                        <span>#khách_sạn_5_sao</span>
                        <span>#khách_sạn_4_sao</span>
                        <span>#khách_sạn_3-4_sao</span>
                        <span>#khách_sạn_4-5_sao</span>
                    </div>

                    <div className="part__hotels">
                        {notableDes.slice(0, 4).map((des, index) => (
                            <CardHotel
                                key={index}
                                image={des.image}
                                name="Sailing Club Signature Resort Phú Quốc"
                                percentDiscount={14}
                                promotion="Ưu đãi chớp nhoáng"
                                rate={3}
                                liked={true}
                                type="Khu nghỉ dưỡng"
                                numberFeedback={123}
                                place={notableDes[indexShockPrice].name}
                                point={8.5}
                                oldPrice="6.677.411"
                                curPrice="5.763.274"
                                voucher={{ code: 'GIAIPHONG', percent: 1, price: '5.729.940' }}
                                memberDiscount={19}
                            />
                        ))}
                        {notableDes.slice(0, 4).map((des, index) => (
                            <CardHotel
                                key={index}
                                image={des.image}
                                name="Khách sạn Quốc Vinh"
                                rate={3}
                                type="Khu nghỉ dưỡng"
                                numberFeedback={123}
                                place={notableDes[indexShockPrice].name}
                                point={8.5}
                                oldPrice="6.677.411"
                                curPrice="5.763.274"
                                voucher={{ code: 'GIAIPHONG', percent: 1, price: '5.729.940' }}
                            />
                        ))}
                    </div>

                    {/* <div className="part__footer">
                        <ButtonPrimary className="btnSeeMore-l">Xem tất cả</ButtonPrimary>
                    </div> */}
                </div>
            </div>

            <div className={clsx(styles.vinpearl, 'part')}>
                <div className="part__content">
                    <div className="part__header">
                        <div>
                            <h1 className={styles.title}>Vinpearl - Đối tác chiến lược giá độc quyền</h1>
                            <h6 className={styles.subTitle}>
                                Các khách sạn HOT nhất của chuỗi Vinpearl đang có nhiều ưu đãi dành cho khách hàng
                            </h6>
                        </div>

                        {/* <ButtonPrimary className="btnSeeMore-s">Xem thêm</ButtonPrimary> */}
                    </div>

                    <Slider {...settings} className="home">
                        <div className={styles.hotels}>
                            {vinpearlDes.slice(0, 4).map((des, index) => (
                                <CardVinpearl
                                    key={index}
                                    image={des.image}
                                    name={des.name}
                                    percentDiscount={14}
                                    promotion="Ưu đãi chớp nhoáng"
                                    rate={3}
                                    type="Khu nghỉ dưỡng"
                                    numberFeedback={123}
                                    point={8.5}
                                    oldPrice="6.677.411"
                                    curPrice="5.763.274"
                                />
                            ))}
                        </div>

                        <div className={styles.hotels}>
                            {vinpearlDes.slice(4, 8).map((des, index) => (
                                <CardVinpearl
                                    key={index}
                                    image={des.image}
                                    name={des.name}
                                    percentDiscount={14}
                                    promotion="Ưu đãi chớp nhoáng"
                                    rate={3}
                                    type="Khu nghỉ dưỡng"
                                    numberFeedback={123}
                                    point={8.5}
                                    oldPrice="6.677.411"
                                    curPrice="5.763.274"
                                />
                            ))}
                        </div>
                    </Slider>
                </div>
            </div>

            <RecentViews />

            <div className={clsx(styles.favoriteDestination, 'part')}>
                <h1 className={styles.title}>Điểm đến yêu thích</h1>
                <h6 className={styles.subTitle}>Địa điểm hot nhất do Evivu đề xuất</h6>

                <div className={clsx(styles.destinations)}>
                    {notableDes.slice(0, 12).map((des, index) => (
                        <div key={index} className={clsx(styles.destination, styles[`id-${index}`])}>
                            <a href=""></a>
                            <div
                                className={styles.imageDestination}
                                style={{ backgroundImage: `url(${des.image})` }}
                            ></div>
                            <div className={styles.nameDestination}>
                                <p>{des.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Banner />
        </div>
    )
}

export default Home
