import { Link, useLocation } from 'react-router-dom'
import styles from './Breadcrumb.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'
function Breadcrumb() {
    const location = useLocation()
    const [paths, setPaths] = useState([])

    useEffect(() => {
        let paths = []
        const { pathname } = location
        if (pathname === '/cks/manageHotel') {
            paths.push({ link: pathname, name: 'Quản lý khách sạn' })
        } else if (pathname === '/cks/manage-room') {
            paths.push({ link: pathname, name: 'Quản lý phòng' })
        } else if (pathname === '/cks/manageOrder') {
            paths.push({ link: pathname, name: 'Quản lý đơn đặt phòng' })
        } else if (pathname === '/cks/voucher') {
            paths.push({ link: pathname, name: 'Quản lý khuyến mãi' })
        } else if (pathname === '/cks/profile') {
            paths.push({ link: pathname, name: 'Thông tin cá nhân' })
        }
        // if (pathname === '/cks/addHotel') {
        //     paths.push({ link: '/cks/manageHotel', name: 'Quản lý khách sạn' })
        //     paths.push({ link: pathname, name: 'Thêm' })
        // }

        // Chỉ lấy phần tên cuối cùng của trang, không lấy phần "cks"
        if (paths.length > 0) {
            const lastPath = paths[paths.length - 1].name.replace(/^cks\//, '')
            paths[paths.length - 1].name = lastPath
        }
        if (paths.length !== 0) setPaths(paths)
    }, [location])

    return (
        <ol className={`${styles['form-group']} breadcrumb`}>
            {paths.map((path, index) => (
                <li key={index} className="breadcrumb-item">
                    <Link to={path.link}>{path.name}</Link>
                </li>
            ))}
            {/* <li className="breadcrumb-item active" aria-current="page">
                {paths.length > 0 ? paths[paths.length - 1] : 'Trang chủ'}
            </li> */}
        </ol>
    )
}

export default Breadcrumb
