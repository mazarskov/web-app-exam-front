import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom' ;
import { useUser } from '../data/UserProvider';
import "./Styles.css";

function LoginView() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUserData } = useUser();

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users/user', {
                params: {
                    username: username,
                    password: password
                }
            });
            
            if (response.data !== "") {
                const userId = response.data.id;
                const basket = response.data.basket;
                setUserData({userId, basket});
                navigate('/catalogue');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <>
        <div className='App'>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={handleLogin}>Login</button>
        </div>
        <div>
            <h1><Link to="/register" className='buttons'>Create account</Link></h1>
        </div>
        </>
    );
}

export default LoginView;
