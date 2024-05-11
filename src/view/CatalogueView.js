import React, {useState, useEffect} from 'react';
import INavbar from '../component/common/Navbar/INavbar';
import { Link } from 'react-router-dom';
import { useUser } from '../data/UserProvider';
import axios from 'axios';

function CatalogueView() {
  // State variable to store the catalogue data
  const [catalogue, setCatalogue] = useState([]);
  const { userId } = useUser();
  const encodedUserId = encodeURIComponent(userId);

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
  }, );

  // Function to handle adding a game to the basket
  const addToBasket = (gameId) => {
    // Add your logic here to add the game to the basket
    console.log(`Added game with ID ${gameId} to basket`);
    console.log(userId);
  };

  return (
    <div className="App">
      <INavbar/>
      <h2>Catalogue</h2>
      <ul>
        {catalogue.map((game) => (
          <li key={game.id}>
            <strong>{game.title}</strong>
            <Link to="/test" onClick={() => addToBasket(game.id)} >Add to basket</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogueView;
