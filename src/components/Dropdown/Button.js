import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

import styles from './Dropdown.module.scss'

function DropdownButton({ list }) {
    const wrapperRef = useRef(null)
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(0)

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

    function handleChoose(index) {
        setActive(index)
        setShow(!show)
    }

    return (
        <div className={styles.dropdown} ref={wrapperRef}>
            <div className={clsx('btn-1', styles.dropdownBtn)} onClick={() => setShow(!show)}>
                {list[active]}
                <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                </span>
            </div>
            {show && (
                <div className={styles.dropdownMenu}>
                    {list.map((item, index) => (
                        <div
                            className={clsx(styles.dropdownItem, { [styles.active]: index === active })}
                            onClick={() => handleChoose(index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownButton
