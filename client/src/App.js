import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes/index'
import DataContext from './contexts/DataContext'
import { DefaultLayout } from '~/components/Layouts'
import Axios from 'axios'

function App() {
    const [data, setData] = useState()
    const handleData = (data) => {
        setData(data)
    }
    useEffect(() => {
        Axios.get('http://localhost:8800', { params: { idUser: 11 } }) //
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <Router>
            <div className="App">
                <DataContext.Provider value={{ data, handleData }}>
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
                    </Routes>
                </DataContext.Provider>
            </div>
        </Router>
    )
}

export default App
