import React, { useEffect, useState } from 'react';
import '../stylesheets/index.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import getDataFromApi from '../services/getData';
import Header from './Header';

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data));
  }, [])

  const handleInput = (input) => {
    if (input.key === 'name') {
      setName(input.value);
    }
  }
  const filteredCharacters = characters.filter(character => { return character.name.toLowerCase().includes(name.toLowerCase()) });

  return (
    <>
    <Header />
    <main>
      <Filters handleInput={handleInput} />
      <CharacterList characters={filteredCharacters} />
    </main>
    </>
  );
}

export default App;
