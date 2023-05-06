import clsx from 'clsx'
import styles from './Vouchers.module.scss'

function Vouchers(props) {
    return (
        <div className={clsx(styles.vouchers, 'part')}>
            <div className="part__content d-flex">
                <div className={styles.voucher}>
                    <span className="d-flex-js">
                        <span className="part__subTitle">Nhập mã</span>
                        <span className={styles.code}>DEALCHOT</span>
                    </span>
                    <div className="d-flex" style={{ minHeight: '60px' }}>
                        <span className={styles.subTitle1}>Khách sạn giảm đến 200K</span>
                        <span className={styles.subTitle2} onClick={props.onClick}>
                            Điều kiện &amp; thể lệ chương trình
                        </span>
                    </div>
                    <span className={styles.subTitle3}>Hạn sử dụng: 17/04 -30/04 | Nhập mã khi thanh toán</span>
                </div>

                <div className={styles.voucher}>
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
                </div>
            </div>
        </div>
    )
}

export default Vouchers
