import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ Username: username, Password: password })
            });

            if (response.ok) {
                alert('Login successful'); 
            } else {

                alert('Login failed'); 
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='wrapper'>
            <form action="" onSubmit={handleSubmit}>
                <h1 className='title'>LOGIN</h1>
                <div className="input-box">
                    <FaUser className='icon' />
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-box">
                    <IoIosLock className='icon' />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="http://google.com">Forgot Password</a>
                </div>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
};




export default Login;
