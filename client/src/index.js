import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import GlobalStyles from '~/components/GlobalStyles'
import reportWebVitals from './reportWebVitals'
import Axios from 'axios'
import DataContext from './contexts/DataContext'

Axios.get('http://localhost:8800')
    .then((response) => {
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(
            <React.StrictMode>
                <GlobalStyles>
                    <DataContext.Provider value={response.data}>
                        <App />
                    </DataContext.Provider>
                </GlobalStyles>
            </React.StrictMode>,
        )
    })
    .catch((error) => {
        console.log(error)
    })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
