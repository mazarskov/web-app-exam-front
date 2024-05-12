import React, {useState, useEffect} from 'react';
import axios from 'axios';
import INavbar from '../component/common/Navbar/INavbar';
import { useUser } from '../data/UserProvider';
import { Link } from 'react-router-dom';
import "./Styles.css";

function AccountView() {
    const [accountData, setAccountData] = useState([]);
    const { userData } = useUser();
    const { userId } = userData;
    const { basket } = userData;

    const fetchAccountData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/users/${userId}`)
            setAccountData(response.data)
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        fetchAccountData();
      }, [accountData]);
      return (
        <div className="App">
          <INavbar/>
          <h2>Account details</h2>
          <p>User ID: {userId}</p>
          <p>Name: {accountData.name}</p>
          <p>Basket: {accountData.basket}</p>
          <Link to='/' className='buttons'>Log out</Link>
        </div>
      );
}

export default AccountView;