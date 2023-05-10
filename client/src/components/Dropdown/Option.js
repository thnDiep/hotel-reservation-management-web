import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

import styles from './Dropdown.module.scss'

function DropdownOption({ list, idActive, type }) {
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
    // show dropdown menu
    function handleClick(item) {
        setShow(!show)
        item.handle(idActive, type)
    }
    // show dropdown option
    function handleClickDropdownOption(e) {
        e.stopPropagation()
        setShow(!show)
    }

    return (
        <div className={clsx(styles.dropdown, styles.option)} ref={wrapperRef}>
            <div className={clsx(styles.dropdownOption)} onClick={handleClickDropdownOption}>
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            {show && (
                <div className={clsx(styles.dropdownMenu)}>
                    {list.map((item, index) => (
                        <div key={index} className={clsx(styles.dropdownItem)} onClick={() => handleClick(item)}>
                            <span>{item.name}</span>
                        </div>
                    ))}
                    {/* {list.map((item, index) => (
                        <div key={index} className={clsx(styles.dropdownItem)} onClick={() => setShow(!show)}>
                            {item}
                        </div>
                    ))} */}
                </div>
            )}
        </div>
    )
}

export default DropdownOption
