import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './CardVinpearl.module.scss'
import Tag from '../Tag'
function CardVinpearl(props) {
    const [evaluate, setEvaluate] = useState('')

    useEffect(() => {
        if (props.point >= 9) setEvaluate('Tuyệt vời')
        else if (props.point >= 8) setEvaluate('Rất tốt')
        else if (props.point >= 7) setEvaluate('Tốt')
        else setEvaluate('Bình thường')
    }, [])

    return (
        <div className={styles.container}>
            {!props.admin && <Link to={`/hotels/detail/${props.ID}`} className="link"></Link>}
            {props.admin && <Link to={`/admin/hotels/detail/${props.ID}`} className="link"></Link>}
            <div className={styles.image} style={{ backgroundImage: `url(${props.image})` }}>
                <div className={styles.logoWrapper}>
                    <div
                        className={styles.logoImage}
                        style={{
                            backgroundImage: `url('https://img.tripi.vn/cdn-cgi/image/width=118,height=64/https://storage.googleapis.com/tripi-assets/mytour/images/logo_vinperal.png')`,
                        }}
                    ></div>
                </div>

                {props.percentDiscount !== 0 && (
                    <div className={styles.percentDiscount}>
                        <div className={styles.percent}>
                            -{props.percentDiscount}
                            <span>%</span>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.infoBackground}>
                <div className={styles.infoWrapper}>
                    {props.promotion && (
                        <div className={styles.promotion}>
                            <Tag list={props.promotion} />
                        </div>
                    )}
                    <div className={styles.info}>
                        <div>
                            <h1 className={styles.name}>{props.name}</h1>

                            <div className="d-flex-js" style={{ marginTop: '4px' }}>
                                <div className={styles.rate}>
                                    {[...Array(props.rate)].map((x, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className={styles.icon} />
                                    ))}
                                </div>
                                {props.type && (
                                    <div className={styles.type} title={props.type}>
                                        {props.type}
                                    </div>
                                )}
                            </div>

                            <div className="d-flex-js" style={{ marginTop: '8px' }}>
                                <div className={clsx(styles.point, 'd-flex')}>
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
                                    <span>{props.point}</span>
                                </div>
                                <div className={styles.evaluate}>{evaluate}</div>
                                {props.numberFeedback !== 0 && (
                                    <div className={styles.numberFeedback}>({props.numberFeedback} đánh giá)</div>
                                )}
                            </div>
                        </div>

                        <div className="d-flex-column-r">
                            {props.oldPrice ? (
                                <div className={styles.oldPrice}>{props.oldPrice.toLocaleString()} ₫</div>
                            ) : (
                                <div></div>
                            )}
                            {props.curPrice ? (
                                <div className={styles.curPrice}>{props.curPrice.toLocaleString()} ₫</div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVinpearl
