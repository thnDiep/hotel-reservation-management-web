import { NavLink } from '~/components'
import nav from '~/assets/jsons/nav.json'
import ActiveAccountTable from '~/components/Table/ActiveAccount'
import Axios from 'axios'
import { useState, useEffect, useRef } from 'react'

// tên, email, sđt, địa chỉ, tên đn, nút hoạt động: hoạt động, khóa
function ActiveAccount() {
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
            <ActiveAccountTable data={data} option={option1} />
        </div>
    )
}

export default ActiveAccount
