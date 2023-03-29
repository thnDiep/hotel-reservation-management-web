import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SearchButtonVer2.module.scss'

function SearchButton({ onSubmit }) {
    return (
        <button className={styles.button} onClick={onSubmit}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </button>
    )
}

export default SearchButton
