import React, { useState } from 'react'
import axios from 'axios';
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


export default function Register() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: 0,
        address: "",
        gender: "",
        password: "",

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
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register/`, formData)
            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate("/login")
                window.scrollTo(0, 0)
                return;
            } else {
                toast.error(res.data.message);
            }

        } catch (error) {
            toast.error("Error in Register Check log");
            console.error(error)
        }
    };

    return (
        <div className="auth-page">
            <div className="container form-container">
                <form className="contact-form " onSubmit={handleSubmit}>
                    <h2 >Register New User</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder='Email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            name="phone"
                            placeholder='Phone No.'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}

                        >
                            <option value="">Select Role</option>
                            <option value="0">Normal User</option>
                            <option value="1">Admin</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input
                            placeholder='Address'
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>


                    {/* fieldset */}

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group radio-selector">
                        Gender:
                        <label>
                            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
                            Other
                        </label>
                    </div>

                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}
