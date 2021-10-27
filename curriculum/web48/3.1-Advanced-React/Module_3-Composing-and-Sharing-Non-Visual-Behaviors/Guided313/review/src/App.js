import React from "react";
import "./styles.scss";

import PokeDetails from './components/PokeDetails';
import PokeList from './components/PokeList';

import usePokeState from './hooks/usePokeState';


function App() {
  const [handlePoke, pokemen, selectedPokemon] = usePokeState();

  return (
    <div className="App">
      <PokeDetails selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;
