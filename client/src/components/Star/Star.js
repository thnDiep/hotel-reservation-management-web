import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Star = ({ number }) => {
    return (<div className='d-flex justify-content-start'>
        {number > 0 && <FontAwesomeIcon className="fa-star" icon={faStar} />}
        {number > 1 && <FontAwesomeIcon className="fa-star" icon={faStar} />}
        {number > 2 && <FontAwesomeIcon className="fa-star" icon={faStar} />}
        {number > 3 && <FontAwesomeIcon className="fa-star" icon={faStar} />}
        {number > 4 && <FontAwesomeIcon className="fa-star" icon={faStar} />}
    </div>)
}
export default Star