import React, { useState, useEffect } from 'react';
import axios from 'axios';
import INavbar from '../component/common/Navbar/INavbar';
import { useUser } from '../data/UserProvider';
import './Styles.css'; // Import CSS file for component-specific styles
import { Link } from 'react-router-dom';

function BasketView() {
    const [basketList, setBasketList] = useState([]);
    const [accountData, setAccountData] = useState({});
    const { userData } = useUser();
    const { userId } = userData;

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

    const fetchBasketList = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/catalogue/list?token=${userId}&basket=${accountData.basket}`);
            setBasketList(response.data);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        if (accountData && accountData.basket !== undefined) {
            fetchBasketList();
        }
    }, [accountData]);

    const clearBasket = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/users/${userId}/clearbasket`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="App">
            <INavbar />
            <div className="basket-container">
                <h2>Basket</h2>
                <p>Basket: {accountData.basket} User ID: {accountData.id}</p>
                {basketList.length === 0 || accountData.basket === 0 ? (
                    <p className="empty-basket">Basket is empty!</p>
                ) : (
                    <ul className="basket-list">
                        <button onClick={clearBasket}>Clear basket</button>
                        <button onClick={clearBasket}>Checkout</button>
                        
                        {basketList.map((game) => (
                            <li key={game.id} className="basket-item">
                                <div className="game-info">
                                    <strong>{game.title}</strong>
                                    <p>{game.id}</p>
                                    <p>{game.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default BasketView;
