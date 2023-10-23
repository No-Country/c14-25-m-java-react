import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ValidateUser = () => {
    const navigate = useNavigate()

    if (localStorage.getItem("userLogged")) {
        navigate("/");
    }
    else {
        return (
            <Outlet />
        )
    }
}

export default ValidateUser