import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import styles from './RecentViews.module.scss'
import notableDes from '~/assets/jsons/notable.json'
import { Link } from 'react-router-dom'

function RecentViews({ data }) {
    return (
        <div className={clsx(styles.recentViews, 'part')}>
            <div className="part__content">
                <h1 className="part__title">Xem gần đây</h1>

                <div className="d-flex">
                    {data &&
                        data.slice(0, 6).map((des, index) => (
                            <div key={index} className={styles.recentView}>
                                <Link to={`/hotels/detail/${des.ID}`} className="link"></Link>
                                <div className={styles.image} style={{ backgroundImage: `url(${des.HinhAnh})` }}></div>
                                <div className={styles.name}>{des.Ten}</div>
                                <div className={styles.rate}>
                                    {[...Array(des.soSao)].map((x, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className={styles.icon} />
                                    ))}
                                </div>
                                <div className={styles.place}>{des.DiaDiem}</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default RecentViews
