// import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'

export default function Logout() {
        console.log("coming to logout")
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        window.location.assign('/')
    // return (
    //     // <Navigate replace to="/" />
    // )
}
