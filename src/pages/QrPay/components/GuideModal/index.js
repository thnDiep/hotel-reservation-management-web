import Modal from 'react-bootstrap/Modal'
import { useState, useRef } from 'react'
import styles from './GuideModal.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import clsx from 'clsx'

function GuideModal(props) {
    const guides = useRef([
        {
            title: 'Quét mã QR',
            content: 'Đăng nhập ứng dụng thanh toán, chọn chức năng QRPay và quét mã QR',
            image: 'https://pay.vnpay.vn/images/img/guide/hd-1.png',
        },
        {
            title: 'Kiểm tra đơn hàng',
            content: 'Kiểm tra thông tin đơn hàng và lựa chọn tài khoản thanh toán để tiếp tục',
            image: 'https://pay.vnpay.vn/images/img/guide/hd-2.png',
        },
        {
            title: 'Xác nhận giao dịch',
            content: 'Đăng nhập ứng dụng thanh toán, chọn chức năng QRPay và quét mã QR',
            image: 'https://pay.vnpay.vn/images/img/guide/hd-3.png',
        },
    ])

    const [currentGuide, setCurrentGuide] = useState(1)
    console.log(currentGuide)
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="myModal">
            <Modal.Header closeButton style={{ border: 'none' }}></Modal.Header>
            <Modal.Body>
                <div className={styles.container}>
                    <Container fluid>
                        <Row>
                            <Col sm={4}>
                                <div className={styles.guideImage}>
                                    <img src={guides.current[currentGuide].image} />
                                </div>
                            </Col>
                            <Col sm={8}>
                                <h3 className={styles.mainTitle}>Hướng dẫn thanh toán</h3>

                                {guides.current.map((guide, index) => (
                                    <Row>
                                        <Col sm={2}>
                                            <div key={index} className={clsx(styles.guideIndex)}>
                                                <div
                                                    className={clsx(styles.index, {
                                                        [styles.notFirstChild]: index > 0,
                                                        [styles.active]: index <= currentGuide,
                                                    })}
                                                    onClick={() => setCurrentGuide(index)}
                                                >
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={10}>
                                            <div
                                                key={index}
                                                className={clsx(styles.guideContent, {
                                                    [styles.active]: index <= currentGuide,
                                                })}
                                            >
                                                <div className={styles.title}>{guide.title}</div>
                                                <div className={styles.text}>{guide.content}</div>
                                            </div>
                                        </Col>
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default GuideModal
