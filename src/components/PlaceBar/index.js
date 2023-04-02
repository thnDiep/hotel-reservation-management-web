import clsx from 'clsx'
import styles from './PlaceBar.module.scss'

function PlaceBar({ placeNameList, showNumber, indexActive, onChoose }) {
    return (
        <div className={styles.container}>
            {placeNameList.slice(0, showNumber).map((placeName, index) => (
                <button
                    key={index}
                    className={clsx(styles.place, { [styles.active]: indexActive === index })}
                    onClick={() => onChoose(index)}
                >
                    {placeName}
                </button>
            ))}
        </div>
    )
}

export default PlaceBar
