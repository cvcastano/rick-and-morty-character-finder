import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';
import getDataFromApi from '../services/getData';

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('all');
  const [sorting, setSorting] = useState(false);


  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data));
  }, [])

  const filterHandler = input => {
    if (input.key === 'name') {
      setName(input.value);
    }
    else if (input.key === 'species') {
      setSpecies(input.value);
    }
    else if (input.key === 'sorting') {
      setSorting(true);
    }
  };

  const filteredCharacters = characters
    .filter(character => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter(character => {
      return species === 'all' ? true : character.species === species
    })
  if (sorting) {
    filteredCharacters.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
    })
  };

  const renderDetail = props => {
    const id = parseInt(props.match.params.id);

    const clickedCharacter = characters.find(character => {
      return character.id === id;
    });
    return <CharacterDetail character={clickedCharacter} />
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Filters filterHandler={filterHandler} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path='/character/:id' render={renderDetail} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
