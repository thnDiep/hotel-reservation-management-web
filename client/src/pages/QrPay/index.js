import clsx from 'clsx'

import qrImage from '~/assets/images/qr.png'
import styles from './QrPay.module.scss'
import { useEffect, useState } from 'react'
import GuideModal from './components/GuideModal'
import QRModal from './components/QRModal'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

function QrPay() {
    const { id } = useParams()
    const [showGuideModal, setShowGuideModal] = useState(false)
    const [showQRModal, setShowQRModal] = useState(false)
    const [order, setOrder] = useState()

    useEffect(() => {
        Axios.get('http://localhost:8800/profile/order/qr', { params: { ID: id } })
            .then((response) => {
                setOrder(response.data[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
        <div className={styles.container}>
            <GuideModal show={showGuideModal} onHide={() => setShowGuideModal(false)} />

            <div className={styles.header}>
                <img src="https://pay.vnpay.vn/Images/brands/logo.svg" alt="VNPAY" />
            </div>
            {order && (
                <div className={styles.content}>
                    <QRModal show={showQRModal} onHide={() => setShowQRModal(false)} total={order.TongTien} />
                    <div className={styles.inform}>
                        <img src="https://pay.vnpay.vn/images/icons-color/warning/default/24x24-alert.svg" />
                        <span>
                            Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên
                            website. Xin cảm ơn!
                        </span>
                    </div>

                    <div className="d-flex">
                        <div className={styles.bill}>
                            <div className={styles.billHeader}>Thông tin đơn hàng</div>
                            <div className={styles.billBody}>
                                <div className={styles.billItem}>
                                    <h6 className={styles.subTitle}>Số tiền thanh toán</h6>
                                    <h3 className={clsx(styles.text, styles.primary)}>
                                        {(+order.TongTien).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                        {/* <sup>VND</sup> */}
                                    </h3>
                                </div>

                                <div className={styles.billItem}>
                                    <h6 className={styles.subTitle}>Giá trị đơn hàng</h6>
                                    <h3 className={styles.text}>
                                        {(+order.TongTien).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                        {/* <sup>VND</sup> */}
                                    </h3>
                                </div>

                                <div className={styles.billItem}>
                                    <h6 className={styles.subTitle}>Phí giao dịch</h6>
                                    <h3 className={styles.text}>
                                        {(+0).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </h3>
                                </div>

                                <div className={styles.billItem}>
                                    <h6 className={styles.subTitle}>Mã đơn hàng</h6>
                                    <h3 className={styles.text}>{order.MaDatPhong}</h3>
                                </div>

                                <div className={styles.billItem} style={{ margin: 0 }}>
                                    <h6 className={styles.subTitle}>Nhà cung cấp</h6>
                                    <h3 className={styles.text}>{order.TenNganHang}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.qr}>
                            <h2 className={styles.title}>Quét mã qua ứng dụng Ngân hàng/ Ví điện tử</h2>
                            <div className={styles.guide} onClick={() => setShowGuideModal(true)}>
                                <img src="https://pay.vnpay.vn/images/icons-color/info/default/24x24-information-circle.svg" />
                                Hướng dẫn thanh toán
                            </div>
                            <div
                                className={styles.qrImageFrame}
                                style={{ backgroundImage: `url('https://pay.vnpay.vn/images/img/mics/qr-frame.svg')` }}
                                onClick={() => setShowQRModal(true)}
                            >
                                <img className={styles.qrImage} src={qrImage} />
                            </div>
                            <Link to={`/checkout/success/${id}`} className="btn-1">
                                Đã hoàn thành
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.footer}>
                <a href="tel:1900555577">
                    <div className={styles.partFooter}>
                        <div className={styles.imgWrapper}>
                            <img src="https://pay.vnpay.vn/images/icons-color/default2/default/24x24-phone.svg" />
                        </div>
                        <span>1900.5555.77</span>
                    </div>
                </a>

                <a href="mailto:hotrovnpay@vnpay.vn">
                    <div className={styles.partFooter}>
                        <div className={styles.imgWrapper}>
                            <img src="https://pay.vnpay.vn/images/icons-color/default2/default/24x24-email.svg" />
                        </div>
                        <span>hotrovnpay@vnpay.vn</span>
                    </div>
                </a>

                <div className={styles.partFooter}>
                    <a
                        href="https://profile.globalsign.com/SiteSeal/siteSeal/profile/profile.do?p1=e797f6ab&amp;p2=a06dada7520ada559537452c666a510c95706240fc2dfde64d4c864bf735462b7a370908847a6060a26daeac4f549d0bc8&amp;p3=7b58e9c169b0b0ff3eb932a37330cc91d466b871"
                        target="_blank"
                        style={{ marginRight: '14px' }}
                    >
                        <img src="https://pay.vnpay.vn/images/img/logos/global-sign.svg" height="40" />
                    </a>

                    <a href="https://seal.controlcase.com/index.php?page=showCert&amp;cId=4096647551" target="_blank">
                        <img src="https://pay.vnpay.vn/images/img/logos/pcidss.svg" height="40" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default QrPay
