import { clsx } from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons'

import styles from './Room.module.scss'

function Room({ number, onDRoom, onIRoom, onDAdult, onIAdult, onDChild, onIChild }) {
    return (
        <ul className={styles.selectList}>
            <li className={clsx(styles.selectItem, 'd-flex')}>
                <div className={styles.title}>Phòng</div>
                <div>
                    <button className={styles.decreaseBtn} onClick={onDRoom} disabled={number.room.disableDescrease}>
                        <FontAwesomeIcon icon={faSubtract} />
                    </button>
                    <span className={styles.number}>{number.room.value}</span>
                    <button className={styles.increaseBtn} onClick={onIRoom}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </li>

            <li className={clsx(styles.selectItem, 'd-flex')}>
                <div className={styles.title}>Người lớn</div>
                <div>
                    <button className={styles.decreaseBtn} onClick={onDAdult} disabled={number.adult.disableDescrease}>
                        <FontAwesomeIcon icon={faSubtract} />
                    </button>
                    <span className={styles.number}>{number.adult.value}</span>
                    <button className={styles.increaseBtn} onClick={onIAdult}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </li>

            <li className={clsx(styles.selectItem, 'd-flex')}>
                <div className={styles.title}>Trẻ em</div>
                <div>
                    <button className={styles.decreaseBtn} onClick={onDChild} disabled={number.child.disableDescrease}>
                        <FontAwesomeIcon icon={faSubtract} />
                    </button>
                    <span className={styles.number}>{number.child.value}</span>
                    <button className={styles.increaseBtn} onClick={onIChild}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </li>
        </ul>
    )
}

export default Room
