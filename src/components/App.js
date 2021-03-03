import React from 'react';
import '../stylesheets/index.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';


function App() {

  return (
    <main>
    <Filters />
    <CharacterList />
    </main>
  );
}

export default App;
