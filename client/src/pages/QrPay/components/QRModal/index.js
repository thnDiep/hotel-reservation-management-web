import Modal from 'react-bootstrap/Modal'
import React from 'react'
import clsx from 'clsx'
import styles from './QRModal.module.scss'
import qrImage from '~/assets/images/qr.png'

function QRModal(props) {
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered className="myModal">
            <Modal.Header closeButton style={{ border: 'none' }}></Modal.Header>
            <Modal.Body>
                <div className={styles.container}>
                    <h3 className={styles.title}>Quét mã thanh toán</h3>
                    <div
                        className={styles.qrImageFrame}
                        style={{ backgroundImage: `url('https://pay.vnpay.vn/images/img/mics/qr-frame.svg')` }}
                    >
                        <img className={styles.qrImage} src={qrImage} />
                    </div>

                    <div className={styles.bill}>
                        <div className={styles.billItem}>
                            <h6 className={styles.subTitle}>Số tiền thanh toán</h6>
                            {props.total && (
                                <h3 className={clsx(styles.text, styles.primary)}>
                                    {props.total.toString().toLocaleString()} <sup>VND</sup>
                                </h3>
                            )}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default QRModal
