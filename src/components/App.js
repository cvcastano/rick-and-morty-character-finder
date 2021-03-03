import React, { useEffect, useState } from 'react';
import '../stylesheets/index.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import getDataFromApi from '../services/getData';

function App() {
const [characters, setCharacters] = useState ([]);

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data));
  }, [])

  return (
    <main>
    <Filters />
    <CharacterList characters= {characters}/>
    </main>
  );
}

export default App;
