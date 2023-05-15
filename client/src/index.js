import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import GlobalStyles from '~/components/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Axios.get('http://localhost:8800')
//     .then((response) => {
root.render(
    <React.StrictMode>
        {/* <DataContext.Provider value={response.data}> */}
        <GlobalStyles>
            <App />
        </GlobalStyles>
        {/* </DataContext.Provider> */}
    </React.StrictMode>,
)
// })
// .catch((error) => {
//     console.log(error)
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
