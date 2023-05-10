import { NavLink } from '~/components'
import nav from '~/assets/jsons/nav.json'
import { AccountTable } from '~/components/Table'
import Axios from 'axios'
import { useState, useEffect, useRef } from 'react'

// tên, email, sđt, địa chỉ, tên đn, nút hoạt động: hoạt động, khóa
function Account() {
    const option1 = useRef([
        {
            name: 'Vô hiệu hóa',
            handle: function () {
                alert('vô hiệu hóa thành công')
            },
        },
        {
            name: 'Xóa',
            handle: function () {
                alert('Xóa thành công')
            },
        },
    ])

    const option2 = useRef([
        {
            name: 'Bỏ vô hiệu hóa ',
            handle: function () {
                alert('bỏ vô hiệu hóa thành công')
            },
        },
        {
            name: 'Xóa',
            handle: function () {
                alert('Xóa')
            },
        },
    ])

    const [data, setData] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:8800/admin/account')
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <NavLink list={nav.accountOfAdmin} />
            <AccountTable data={data} option1={option1.current} option2={option2.current} />
        </div>
    )
}

export default Account
