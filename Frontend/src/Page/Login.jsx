import React, { useState } from 'react'
import axios from 'axios';
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/Auth';




export default function Login() {

    const navigate = useNavigate()
    const [auth, setAuth] = useAuth()


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login/`, formData)
            if (res && res.data.success) {
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.auth = JSON.stringify({
                    user: res.data.user,
                    token: res.data.token
                })
                toast.success(res.data.message)
                navigate("/")
                window.scrollTo(0, 0)
                return;
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Error In Login Please Check log")
            console.error(error.message)
        }
    };

    return (
        <div className="auth-page">
            <div className="container form-container">
                <form className="contact-form " onSubmit={handleSubmit}>
                    <h2 >Login</h2>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder='Email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="on"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <div className="form-group">
                            <span style={{ padding: "15px 0", float: "left" }}>
                                <Link to="/register">Create New Account</Link>
                            </span>
                            <span style={{ padding: "15px 0", float: "right" }}>
                                <Link to="/contact">forget Password?</Link>
                            </span>
                        </div>
                    </div>

                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}
