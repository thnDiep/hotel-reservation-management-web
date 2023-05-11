import styles from './Place.module.scss'

function Place({ placeHistory, onClearHistory, places, onChoose }) {
    return (
        <div className={styles.place}>
            <div className={styles.historyPlace}>
                <div className="d-flex">
                    <div className={styles.title}>Tìm kiếm gần đây</div>
                    {placeHistory.length !== 0 && <button onClick={onClearHistory}>Xóa lịch sử tìm kiếm</button>}
                </div>

                {placeHistory.length === 0 ? (
                    <div className={styles.noneList}>Chưa có tìm kiếm gần đây</div>
                ) : (
                    <ul className={styles.list}>
                        {placeHistory.map((place, index) => (
                            <li
                                key={index}
                                className={styles.item}
                                onClick={() => {
                                    onChoose(place)
                                }}
                            >
                                <div className={styles.image}>
                                    <svg width="20" height="20" fill="none">
                                        <path
                                            d="M10 6.667V10l1.667 1.667"
                                            stroke="#718096"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M2.542 9.167a7.5 7.5 0 11.416 3.333m-.416 4.167V12.5h4.166"
                                            stroke="#718096"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.name}>{place}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className={styles.notablePlace}>
                <div className={styles.title}>Địa điểm nổi bật</div>
                <ul className={styles.list}>
                    {places &&
                        places.map((place, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    onChoose(place.TenDiaDiem)
                                }}
                            >
                                <div
                                    className={styles.image}
                                    style={{ backgroundImage: `url(${place.HinhAnh})` }}
                                ></div>
                                <div className={styles.name}>{place.TenDiaDiem}</div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Place
