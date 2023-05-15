import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
})
export const AuthContextProvider = (props) => {
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true)
        }
    }, [])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext
