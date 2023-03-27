import styles from './Search.module.scss'
import { SearchButton } from '~/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react'

function Search() {
    const [destination, setDestination] = useState('')
    const [showDestination, setShowDestination] = useState(false)
    const [destinations, setDestinations] = useState(JSON.parse(localStorage.getItem('destinations')) || [])

    useEffect(() => {
        localStorage.setItem('destinations', JSON.stringify(destinations))
    }, [destinations])

    function handleSubmit() {
        setDestinations([...destinations, destination])
    }

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <label htmlFor="searchInput" className={styles.sTitle}>
                    Địa điểm
                </label>
                <br />
                <input
                    id="searchInput"
                    placeholder="Thành phố, khách sạn, điểm đến"
                    onFocus={() => setShowDestination(true)}
                    onBlur={() => setShowDestination(false)}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>

            <div className={styles.dates}>
                <div>
                    <div className={styles.sTitle}>Ngày đến</div>
                    <div className={styles.content}>T2, 27 tháng 3</div>
                </div>

                <div className={styles.duration}>
                    <span>9</span>
                    <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                </div>

                <div>
                    <div className={styles.sTitle}>Ngày đi</div>
                    <div className={styles.content}>T4, 05 tháng 4</div>
                </div>
            </div>

            <div className={styles.room}>
                <div className={styles.sTitle}>Số phòng, số khách</div>
                <div className={styles.content}>1 phòng, 2 người lớn, 0 trẻ em</div>
            </div>

            <SearchButton onSubmit={handleSubmit} />

            {showDestination && (
                <div className={styles.destinate}>
                    <div className={styles.recently}>
                        <div className={styles.flex}>
                            <div className={styles.title}>Tìm kiếm gần đây</div>
                            <button onClick={() => setDestinations([])}>Xóa lịch sử tìm kiếm</button>
                        </div>
                        <ul className={styles.list}>
                            {destinations.map((destination, index) => (
                                <li>
                                    <div className={styles.imageHistory}>
                                        <img src={process.env.PUBLIC_URL + '/logo192.png'} />
                                    </div>
                                    <span>{destination}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.notable}>
                        <div className={styles.title}>Địa điểm nổi bật</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search
