import { NavLink } from '~/components'
import nav from '~/assets/jsons/nav.json'
import BlockedAccountTable from '~/components/Table/BlockedAccount'
import { useState, useRef, useEffect } from 'react'
import Axios from 'axios'

// tên, email, sđt, địa chỉ, tên đn, nút hoạt động: hoạt động, khóa
function BlockedAccount() {
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

    return (
        <div>
            <NavLink list={nav.accountOfAdmin} />
            <BlockedAccountTable data={data} option={option2} />
        </div>
    )
}

export default BlockedAccount
