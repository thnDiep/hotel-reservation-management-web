import clsx from 'clsx'
import styles from './Vouchers.module.scss'
import moment from 'moment'
import { useState } from 'react'
import ConditionModal from '../ConditionModal'

function Vouchers(props) {
    const [showConditionModal, setShowConditionModal] = useState(null) // Modal Điều kiện & thể lệ chương trình

    return (
        <div className={clsx(styles.vouchers, 'part')}>
            <div className="part__content d-flex">
                {props.data &&
                    props.data.slice(0, 2).map((voucher, index) => (
                        <div key={index} className={styles.voucher}>
                            <span className="d-flex-js">
                                <span className="part__subTitle">Nhập mã</span>
                                <span className={styles.code}>{voucher.MaKhuyenMai}</span>
                            </span>
                            <div className="d-flex" style={{ minHeight: '60px' }}>
                                <span className={styles.subTitle1}>{voucher.TieuDe}</span>
                                <span
                                    className={styles.subTitle2}
                                    onClick={() => {
                                        setShowConditionModal(index)
                                    }}
                                >
                                    Điều kiện &amp; thể lệ chương trình
                                </span>
                            </div>
                            {voucher.KetThuc && (
                                <span className={styles.subTitle3}>
                                    Hạn sử dụng: {moment(voucher.BatDau).format('DD/MM')} - &nbsp;
                                    {moment(voucher.KetThuc).format('DD/MM')} | Nhập mã khi thanh toán
                                </span>
                            )}

                            {!voucher.KetThuc && <span className={styles.subTitle3}>Nhập mã khi thanh toán</span>}
                            <ConditionModal
                                show={showConditionModal === index}
                                onHide={() => setShowConditionModal(null)}
                                data={voucher.DieuKien}
                            />
                        </div>
                    ))}

                {/* <div className={styles.voucher}>
                    <span className="d-flex-js">
                        <span className="part__subTitle">Nhập mã</span>
                        <span className={styles.code}>HEVINPEARL</span>
                    </span>
                    <div className="d-flex" style={{ minHeight: '60px' }}>
                        <span className={styles.subTitle1}>Khách sạn Vinpearl giảm 10%</span>
                        <span className={styles.subTitle2} onClick={props.onClick}>
                            Điều kiện &amp; thể lệ chương trình
                        </span>
                    </div>
                    <span className={styles.subTitle3}>Hạn sử dụng: 20/04 -30/04 | Nhập mã khi thanh toán</span>
                </div> */}
            </div>
        </div>
    )
}

export default Vouchers
