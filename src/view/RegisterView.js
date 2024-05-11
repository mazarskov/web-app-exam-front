import React, { useState } from 'react';
import axios from 'axios';

function RegisterView() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username,
                password
            });
            console.log(response.data); // Handle successful registration
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
}

export default RegisterView;
