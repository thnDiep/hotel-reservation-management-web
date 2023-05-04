import './HotelierLayout.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react'

function HotelierLayout({ children }) {
    const [checkHide, SetCheckHide] = useState(true)
    const handleCheckHide = () => {
        console.log('hello')
        SetCheckHide(!checkHide)
    }
    return (
        <div>
            <Sidebar checkHide={checkHide} />
            <section id="content">
                <Header onClick={handleCheckHide} />
                <main>{children}</main>
            </section>
        </div>
    )
}

export default HotelierLayout
