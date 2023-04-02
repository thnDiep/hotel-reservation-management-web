import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import styles from './CardHotel.module.scss'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

function CardHotel(props) {
    const [evaluate, setEvaluate] = useState('')

    useEffect(() => {
        if (props.point >= 9) setEvaluate('Tuyệt vời')
        else if (props.point >= 8) setEvaluate('Rất tốt')
        else if (props.point >= 7) setEvaluate('Tốt')
        else setEvaluate('Bình thường')
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.image} style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className={styles.info}>
                <h1 className={styles.name}>{props.name}</h1>

                <div className="d-flex-js" style={{ marginTop: '4px' }}>
                    <div className={styles.rate}>
                        {[...Array(props.rate)].map((x, i) => (
                            <FontAwesomeIcon key={i} icon={faStar} className={styles.icon} />
                        ))}
                    </div>
                    {props.type && <div className={styles.type}>{props.type}</div>}
                </div>

                <div className="d-flex-js" style={{ marginTop: '8px' }}>
                    <FontAwesomeIcon icon={faPlane} />
                    <span className={styles.place}>{props.place}</span>
                </div>

                <div className="d-flex-js" style={{ marginTop: '8px' }}>
                    <div className={clsx(styles.point, 'd-flex')}>
                        <FontAwesomeIcon icon={faUmbrellaBeach} className={styles.icon} />
                        <span>{props.point}</span>
                    </div>
                    <div className={styles.evaluate}>{evaluate}</div>
                </div>

                <div className="d-flex-column-r">
                    {props.oldPrice && <div className={styles.oldPrice}>{props.oldPrice} ₫</div>}
                    <div className={styles.curPrice}>{props.curPrice} ₫</div>
                </div>

                {props.voucher && (
                    <div className={clsx(styles.voucher, 'd-flex')}>
                        <div>
                            <span>Mã: </span>
                            <span className={styles.voucherCode}>{props.voucher.code}</span>
                            <span className={styles.voucherPercent}>- {props.voucher.percent}%</span>
                        </div>
                        <span className={styles.voucherPrice}>{props.voucher.price} ₫</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardHotel
