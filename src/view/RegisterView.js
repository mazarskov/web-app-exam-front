import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom' ;
import { useUser } from '../data/UserProvider';

function RegisterView() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUserData } = useUser();

    const handleRegistration = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8080/api/users/adduser',
                data: {
                  name: username,
                  password: password,
                  basket: 0
                }
              });
              if (response.data !== "") {
                const userId = response.data.id;
                const basket = response.data.basket;
                setUserData({userId, basket});
                navigate('/catalogue');
            }
            console.log(response.data);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className='main-color'>
            <h2>Registration</h2>
            <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
}

export default RegisterView;
