import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { getPokemon } from './../services/PokeServices';

const usePokeState = () => {
    const [pokemen, setPokemen] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
      setPokemen(getPokemon());
    }, []);
  
  
    const handlePoke = (id) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => {
          setSelectedPokemon(res.data);
        });
    };
  
    return([handlePoke, pokemen, selectedPokemon]);
}

export default usePokeState;