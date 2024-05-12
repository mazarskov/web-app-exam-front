import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles.css';


function AdminView() {
    const [catalogue, setCatalogue] = useState([]);
    const [gameData, setGameData] = useState({});
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('')
    const [newId, setNewId] = useState('');

    const handleChange = async (id, data, selection) => {
        const formatttedData = encodeURIComponent(data)
        try {
            const respone = await axios.put(`http://localhost:8080/api/catalogue/game?id=${id}&newData=${formatttedData}&selection=${selection}`)
            console.log(respone.data)
            setTitle('');
            setDesc('');
            fetchCatalogue();
        } catch (error) {
            console.log(error)
        }
    }
    const changeTitle = async () => {
        handleChange(id, title, 1);
    }
    const changeDesc = async () => {
        handleChange(id, desc, 2);
    }

    const createGame = async (title, desc) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8080/api/catalogue/addgame',
                data: {
                  title: title,
                  description: desc
                }
              });
            console.log(response.data)
            setNewDesc('')
            setNewTitle('')
            fetchCatalogue();
        } catch (error) {
            console.error(error)
        }
    }
    const handleCreation = async () => {
        createGame(newTitle, newDesc)
    }
    const deleteGame = async () => {
        try {
            const respone = await axios.delete(`http://localhost:8080/api/catalogue/deletegame/${newId}`)
            console.log(respone.data)
            setNewId('');
            fetchCatalogue();
        } catch (error) {
            console.log(error)
        }
    }
    const fetchGame = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/catalogue/${id}?token=22`)
            setGameData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (gameData && gameData.id !== undefined) {
            fetchGame();
        }
    }, [gameData]);

    const fetchCatalogue = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/catalogue?token=22`);
            setCatalogue(response.data);
        } catch (error) {
            console.error('Error fetching catalogue:', error);
        }
      };
    
      useEffect(() => {
        fetchCatalogue();
      }, [gameData]);

    return (
        <>
        <div className='App'>
            <h1>Admin tools</h1>
            <h2>Delete game</h2>
            <input type="text" placeholder="Game id" value={newId} onChange={(e) => setNewId(e.target.value)} />
            <button onClick={deleteGame}>Delete game</button>
            <h2>Add game</h2>
            <input type="title" placeholder="Enter title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <input type="description" placeholder="Enter description" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
            <button onClick={handleCreation}>Create game</button>
            <h2>Edit games</h2>
            <input type="text" placeholder="Game id" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="title" placeholder="Title change" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="description" placeholder="Description change" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button onClick={changeTitle}>Change title</button>
            <button onClick={changeDesc}>Change description</button>
            <div>
            <ul className='basket-list'>
        {catalogue.map((game) => (
          <li key={game.id} className='basket-item'>
            <strong>{game.title}</strong>
            <p>{game.id}</p>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
            </div>
        </div>
        </>
    );
}

export default AdminView;