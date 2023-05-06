import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import styles from './RecentViews.module.scss'
import notableDes from '~/assets/jsons/notable.json'

function RecentViews() {
    return (
        <div className={clsx(styles.recentViews, 'part')}>
            <div className="part__content">
                <h1 className="part__title">Xem gần đây</h1>

                <div className="d-flex">
                    {notableDes.slice(0, 6).map((des, index) => (
                        <div key={index} className={styles.recentView}>
                            <a href=""></a>
                            <div className={styles.image} style={{ backgroundImage: `url(${des.image})` }}></div>
                            <div className={styles.name}>Sailing Club Signature Resort Phú Quốc</div>
                            <div className={styles.rate}>
                                {[...Array(3)].map((x, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className={styles.icon} />
                                ))}
                            </div>
                            <div className={styles.place}>{des.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecentViews
