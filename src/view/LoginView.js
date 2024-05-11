import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom' ;
import { useUser } from '../data/UserProvider';

function LoginView() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUserId } = useUser();

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users/user', {
                params: {
                    username: username,
                    password: password
                }
            });
            if (response.data !== "") {
                // Redirect to catalogue if login was successful
                setUserId(response.data.id);
                navigate('/catalogue');
            }

            console.log(response.data); // Handle successful login
            console.log(response.data.id);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <>
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Link to="/catalogue" onClick={handleLogin} >Log in</Link>
            <button type="submit" onClick={handleLogin}>Login</button>
        </div>
        <div>
            <h1><Link to="/register">Create account</Link></h1>
        </div>
        </>
    );
}

export default LoginView;
