import React, {useState, useEffect} from 'react';
import INavbar from '../component/common/Navbar/INavbar';
import { useUser } from '../data/UserProvider';
import axios from 'axios';
import "./Styles.css";

function CatalogueView() {
  const [catalogue, setCatalogue] = useState([]);
  const [accountData, setAccountData] = useState([]);
  const { userData } = useUser();
  const { userId } = userData;
  const { basket } = userData;
  const encodedUserId = encodeURIComponent(userId);

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
  const fetchCatalogue = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/catalogue?token=${encodedUserId}`);
        setCatalogue(response.data);
    } catch (error) {
        console.error('Error fetching catalogue:', error);
    }
  };

  useEffect(() => {
    fetchCatalogue();
  }, []);

  const addToBasket = async (gameId) => {
    const { userId } = userData;
    try {
      const response = await axios.put(`http://localhost:8080/api/users/${userId}/add/game?game=${gameId}`);
      console.log(response)
    } catch (error) {
      
    }
    console.log(`Added game with ID ${gameId} to basket`);
    console.log(userId);
  };

  return (
    <div className="App">
      <INavbar/>
      <h2>Catalogue</h2>
      <p>Hello {accountData.name}! Welcome to out great game catalogue!</p>
      <div className='basket-container'>
      <ul className='basket-list'>
        {catalogue.map((game) => (
          <li key={game.id} className='basket-item'>
            <strong>{game.title}</strong>
            <p>{game.id}</p>
            <p>{game.description}</p>
            <button onClick={() => addToBasket(game.id)}>Add to basket</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default CatalogueView;
