import React, {useState, useEffect} from 'react';
import axios from 'axios';
import INavbar from '../component/common/Navbar/INavbar';
import { useUser } from '../data/UserProvider';
import { Link } from 'react-router-dom';
import "./Styles.css";

function ConfirmationView() {
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
          <h1>Thank you for your purchase!</h1>
        </div>
      );
}

export default ConfirmationView;