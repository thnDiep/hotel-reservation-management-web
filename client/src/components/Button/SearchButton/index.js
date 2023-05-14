import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SearchButton.module.scss'

function SearchButton({ onSubmit, detail }) {
    return (
        <button className={`${styles.button} ${detail && styles.detail}`} onClick={onSubmit}>
            {detail ? (
                <span>Kiểm tra phòng còn trống</span>
            ) : (
                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            )}
        </button>
    )
}

export default SearchButton
