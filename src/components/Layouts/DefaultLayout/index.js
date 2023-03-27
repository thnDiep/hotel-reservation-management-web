import Header from './Header'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    )
}

export default DefaultLayout
