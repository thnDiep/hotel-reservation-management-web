import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, publicRoutesAdmin, publicRoutesHotelier, publicRoutesUser } from '~/routes/index'
import DataContext from './contexts/DataContext'
import { DefaultLayout } from '~/components/Layouts'
import Axios from 'axios'
import { useContext } from 'react'
import Swal from 'sweetalert2'

function App() {
    const [data, setData] = useState()
    const handleData = (data) => {
        setData(data)
    }
    // const user = JSON.parse(localStorage.getItem('user')) || {}
    const user = JSON.parse(localStorage.getItem('user')) || {}
    const isLoggedIn1 = localStorage.getItem('isLoggedIn')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let id
        if (user.ID !== undefined) {
            id = user.ID
        } else {
            id = 'khach'
        }
        // const isLoggedIn1 = localStorage.getItem('isLoggedIn')
        if (isLoggedIn1 === '1') {
            setIsLoggedIn(true)
        }
        Axios.get('http://localhost:8800', { params: { idUser: id } }) //
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const LogoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
        Axios.get('http://localhost:8800', { params: { idUser: 'khach' } }) //
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        setIsLoggedIn(false)
    }
    const LoginHandler = async (user) => {
        console.log('fsdfsdfs')
        localStorage.setItem('isLoggedIn', '1')
        await Axios.get('http://localhost:8800', { params: { idUser: user.ID } }) //
            .then(async (response) => {
                setData(response.data)
                localStorage.setItem('user', JSON.stringify(user))
                setIsLoggedIn(true)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    console.log(isLoggedIn)

    return (
        <Router>
            <div className="App">
                <DataContext.Provider value={{ data, handleData, isLoggedIn, LogoutHandler, LoginHandler }}>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }

                            const Page = route.component

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                        {user?.PhanQuyen === 2
                            ? publicRoutesAdmin.map((route, index) => {
                                let Layout = DefaultLayout
                                if (route.layout) {
                                    Layout = route.layout
                                } else if (route.layout === null) {
                                    Layout = Fragment
                                }

                                const Page = route.component

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                )
                            })
                            : user?.PhanQuyen === 1
                                ? publicRoutesHotelier.map((route, index) => {
                                    let Layout = DefaultLayout
                                    if (route.layout) {
                                        Layout = route.layout
                                    } else if (route.layout === null) {
                                        Layout = Fragment
                                    }

                                    const Page = route.component

                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            }
                                        />
                                    )
                                })
                                : publicRoutesUser.map((route, index) => {
                                    let Layout = DefaultLayout
                                    if (route.layout) {
                                        Layout = route.layout
                                    } else if (route.layout === null) {
                                        Layout = Fragment
                                    }

                                    const Page = route.component
                                    console.log(isLoggedIn)
                                    //   if (!isLoggedIn && route.path !== '/login') <Navigate to="/login" />
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={
                                                isLoggedIn1 === '1' ? (
                                                    <Layout>
                                                        <Page />
                                                    </Layout>
                                                ) : (
                                                    <Navigate to="/login" />
                                                )
                                            }
                                        />
                                    )
                                })}
                    </Routes>
                </DataContext.Provider>
            </div>
        </Router>
    )
}

export default App
