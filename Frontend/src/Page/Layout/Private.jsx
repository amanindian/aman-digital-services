import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/Auth'
import { Outlet } from "react-router-dom"
import axios from 'axios'

const Private = () => {

    const [auth] = useAuth()
    const [ok, setOk] = useState()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`, {
                headers: {
                    "Authorization": auth?.token
                }
            })
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }

        if (auth?.token) authCheck()
    }, [auth])




    return ok ? <Outlet /> : "Spinner";
}


export default Private