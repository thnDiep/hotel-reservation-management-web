import { useState, useRef } from 'react'
import clsx from 'clsx'
import { DropdownButton, NavHandle } from '~/components'
import HotelTable from '~/components/Table/Hotel'
import styles from './Hotel.module.scss'

function Hotel() {
    const [active, setActive] = useState(0)
    const menu = useRef(['Tất cả', 'Chờ duyệt', 'Hoạt động', 'Bị khóa'])
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <NavHandle list={menu.current} active={active} onActive={setActive} />
                <DropdownButton list={['Mới nhất', 'Cũ nhất']} />
            </div>
            <HotelTable />
        </div>
    )
}

export default Hotel
