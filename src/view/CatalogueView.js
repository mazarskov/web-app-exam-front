import React, {useState, useEffect} from 'react';
import INavbar from '../component/common/Navbar/INavbar';
import { Link } from 'react-router-dom';
import { useUser } from '../data/UserProvider';
import axios from 'axios';
import "./Styles.css";

function CatalogueView() {
  // State variable to store the catalogue data
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
  // Function to fetch catalogue data from the API
  const fetchCatalogue = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/catalogue?token=${encodedUserId}`);
        setCatalogue(response.data);
    } catch (error) {
        console.error('Error fetching catalogue:', error);
    }
  };

  // Fetch catalogue data when the component mounts
  useEffect(() => {
    fetchCatalogue();
  }, []);

  // Function to handle adding a game to the basket
  const addToBasket = async (gameId) => {
    // Add your logic here to add the game to the basket
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
