import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

import styles from './Dropdown.module.scss'

function DropdownOption({ list }) {
    const wrapperRef = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShow(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [wrapperRef])

    return (
        <div className={clsx(styles.dropdown, styles.option)} ref={wrapperRef}>
            <div className={clsx(styles.dropdownOption)} onClick={() => setShow(!show)}>
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            {show && (
                <div className={clsx(styles.dropdownMenu)}>
                    {list.map((item, index) => (
                        <div key={index} className={clsx(styles.dropdownItem)} onClick={() => setShow(!show)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownOption