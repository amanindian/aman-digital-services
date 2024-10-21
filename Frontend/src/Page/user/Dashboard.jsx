import React from 'react'
import { useAuth } from '../../Context/Auth';


export const Dashboard = () => {
    const [auth] = useAuth()
    return (
        <div>
            <h2>Name: {auth.user?.Name} </h2>
            <h2>Email: {auth.user?.Email} </h2>
            <h2>Phone: {auth.user?.Phone} </h2>
            <h2>Address: {auth.user?.address} </h2>
        </div>
    )
}

export default Dashboard;