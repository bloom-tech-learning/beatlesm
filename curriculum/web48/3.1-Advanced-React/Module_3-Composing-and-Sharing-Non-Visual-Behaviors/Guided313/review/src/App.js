import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';

import {usePokeState} from './hooks/PokeState'

import PokeDetails from "./components/PokeDetails";
import PokeList from "./components/PokeList";

function App() { 

  const [handlePoke, pokemen, selectedPokemon] = usePokeState ();

  return (
    <div className="App">
      <PokeDetails selectedPokemon = {selectedPokemon}/>     
      <PokeList pokemen = {pokemen} handlePoke ={handlePoke}/>     
    </div>
  );
}

export default App;
