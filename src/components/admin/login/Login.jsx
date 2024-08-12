import './Login.css';
import { loginUser } from '../../../features/admin/auth/authSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import images from './../../../images/index';
import UiInput from './../../../ui/UiInput';
import ValidationError from '../../../helpers/FormValidation';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState()

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.adminAuth);

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await dispatch(loginUser({ username, password })).unwrap();
            console.log(response);
            if (response) {
                navigate('/admin'); // Admin paneliga yo'naltirish
            } else {
                setFormErrors('Login failed. Please check your credentials.');
            }
        } catch (err) {
            setFormErrors({ global: err.message || err });
        }
    };

    return (
        <div className='login-container'>
            {error && <ValidationError/>}
            <h1 className='title'><span>Yusro Tour</span> <br /> Admin Paneliga Xush Kelibsiz!</h1>
            <div className="form-container">
                <div className="logo">
                    <img src={images.logo} alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <UiInput
                            type="text"
                            placeholder="Username"
                            state={username}
                            setState={setUsername}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <UiInput
                            type="password"
                            placeholder="Password"
                            state={password}
                            setState={setPassword}
                        />
                    </div>
                    <button type="submit" disabled={loading}>{loading ? 'Yuklanmoqda...' : 'Kirish'}</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
