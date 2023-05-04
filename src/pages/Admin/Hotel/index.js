import { Table } from 'react-bootstrap'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { Tag, DropdownButton, DropdownOption, NavHandle } from '~/components'
import styles from './Hotel.module.scss'
import nav from '~/assets/jsons/nav.json'

const data = ['Tên khách sạn', 'Chủ khách sạn', 'Địa chỉ', 'Giá tiêu chuẩn', 'Khuyến mãi', 'Đánh giá', 'Trạng thái', '']
const hotels = [
    {
        id: 1,
        image: 'https://travl.dexignlab.com/react/demo/static/media/room4.f452c0a5f4a4a74cef98.jpg',
        name: 'Deluxe A-91234',
        owner: 'Nguyễn Văn A',
        address: 'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi',
        price: '3.160.143',
        labels: ['Ưu đãi chớp nhoáng', 'Hồ bơi vô cực'],
        vouchers: [
            { name: 'GIAIPHONG', percent: 1 },
            { name: 'CHAOHE23', percent: 5 },
        ],
        point: 8.7,
        status: 1, // {1: Chờ duyệt, 2: Hoạt động, 3: Bị khóa}
        options: ['Xem khách sạn', 'Xem tiện nghi', 'Liên lạc', 'Gỡ'],
    },
    {
        id: 2,
        image: 'https://travl.dexignlab.com/react/demo/static/media/room4.f452c0a5f4a4a74cef98.jpg',
        name: 'Deluxe A-91234',
        owner: 'Nguyễn Văn A',
        address: 'AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi',
        price: '3.160.143',
        labels: ['Ưu đãi chớp nhoáng', 'Hồ bơi vô cực'],
        vouchers: [
            { name: 'GIAIPHONG', percent: 1 },
            { name: 'CHAOHE23', percent: 5 },
        ],
        point: 8.7,
        status: 2, // {1: Chờ duyệt, 2: Hoạt động, 3: Bị khóa}
        options: ['Xem khách sạn', 'Xem tiện nghi', 'Liên lạc', 'Gỡ'],
    },
]

const menu = ['Tất cả', 'Chờ duyệt', 'Hoạt động', 'Bị khóa']

function HotelTable() {
    return (
        <Table responsive className={styles.cusTable}>
            <thead>
                <tr>
                    <th className={styles.center}>
                        <input type="checkbox" className={styles.checkBox} />
                    </th>
                    {data.map((item, index) => (
                        <th key={index}>
                            <h3 className={styles.title}>{item}</h3>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {hotels.map((hotel, index) => (
                    <tr key={index} className={styles.memberRow}>
                        <td className={styles.center}>
                            <input type="checkbox" className={styles.checkBox} />
                        </td>
                        <td>
                            <div className="d-flex-js">
                                <img src="https://travl.dexignlab.com/react/demo/static/media/room4.f452c0a5f4a4a74cef98.jpg" />
                                <div className={styles.text1}>
                                    <span>#{hotel.id}</span>
                                    <br />
                                    <span>{hotel.name}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className={styles.text1}>{hotel.owner}</span>
                        </td>
                        <td>
                            <span className={styles.text2}>{hotel.address}</span>
                        </td>
                        <td className={styles.center}>
                            <h3 className={clsx(styles.text1, styles.primary)}>
                                {hotel.price} <sup>VND</sup>
                            </h3>
                        </td>
                        {/* <td>
                            <Tag list={hotel.label} vertical />
                        </td> */}
                        <td className={styles.center}>
                            {hotel.vouchers.slice(0, 2).map((voucher, index) => (
                                <div className="d-flex-js" style={{ marginBottom: '6px' }}>
                                    <span class={styles.voucherCode}>{voucher.name}</span>
                                    <span class={styles.voucherPercent}>{voucher.percent}%</span>
                                </div>
                            ))}
                        </td>
                        <td>
                            <div className={clsx(styles.point, 'd-flex-js')}>
                                <svg width="21" height="16" fill="none" style={{ marginRight: '3px' }}>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.825 8.157c.044-.13.084-.264.136-.394.31-.783.666-1.548 1.118-2.264.3-.475.606-.95.949-1.398.474-.616 1.005-1.19 1.635-1.665.27-.202.55-.393.827-.59.019-.015.034-.033.038-.08-.036.015-.078.025-.111.045-.506.349-1.024.68-1.51 1.052A15.241 15.241 0 006.627 4.98c-.408.47-.78.97-1.144 1.474-.182.249-.31.534-.474.818-1.096-1.015-2.385-1.199-3.844-.77.853-2.19 2.291-3.862 4.356-5.011 3.317-1.843 7.495-1.754 10.764.544 2.904 2.041 4.31 5.497 4.026 8.465-1.162-.748-2.38-.902-3.68-.314.05-.92-.099-1.798-.3-2.67a14.842 14.842 0 00-.834-2.567 16.416 16.416 0 00-1.225-2.345l-.054.028c.103.193.21.383.309.58.402.81.642 1.67.8 2.553.152.86.25 1.724.287 2.595.027.648.003 1.294-.094 1.936-.01.066-.018.133-.027.219-1.223-1.305-2.68-2.203-4.446-2.617a9.031 9.031 0 00-5.19.29l-.033-.03z"
                                        fill="#F36"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10 12.92h-.003c.31-1.315.623-2.627.93-3.943.011-.052-.015-.145-.052-.176a1.039 1.039 0 00-.815-.247c-.082.01-.124.046-.142.135-.044.216-.088.433-.138.646-.285 1.207-.57 2.413-.859 3.62l.006.001c-.31 1.314-.623 2.626-.93 3.942-.011.052.016.145.052.177.238.196.51.285.815.247.082-.01.125-.047.142-.134.044-.215.088-.433.138-.648.282-1.208.567-2.414.857-3.62z"
                                        fill="#F36"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.983 19.203s-8.091-6.063-17.978-.467c0 0-.273.228.122.241 0 0 8.429-4.107 17.739.458-.002 0 .282.034.117-.232z"
                                        fill="#F36"
                                    ></path>
                                </svg>
                                <span>{hotel.point}</span>
                            </div>
                        </td>
                        <td>
                            {hotel.status === 1 && (
                                <div className={clsx('btn-1', 'pending', styles.status)}>Chờ duyệt</div>
                            )}
                            {hotel.status === 2 && (
                                <div className={clsx('btn-1', 'active', styles.status)}>Hoạt động</div>
                            )}
                            {hotel.status === 3 && (
                                <div className={clsx('btn-1', 'blocked', styles.status)}>Bị khóa</div>
                            )}
                        </td>
                        <td>
                            <DropdownOption list={hotel.options} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

function Hotel() {
    const [active, setActive] = useState(0)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <NavHandle list={menu} active={active} onActive={setActive} />
                <DropdownButton list={['Mới nhất', 'Cũ nhất']} />
            </div>
            <div className={styles.content}>
                <HotelTable />
            </div>
        </div>
    )
}

export default Hotel
