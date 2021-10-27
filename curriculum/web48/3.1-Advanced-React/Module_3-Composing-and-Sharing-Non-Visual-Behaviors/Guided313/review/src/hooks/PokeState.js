import { useState, useEffect } from "react";
import axios from "axios";
import getPokemonData from  '../../data'

const usePokeState = () => {

    const [pokemen, setPokemen] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
      setPokemen(getPokemonData);
    }, []);
  
    const handlePoke = (id) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => {
          setSelectedPokemon(res.data);
        });
    };
  
    return ([handlePoke, pokemen, selectedPokemon]);
  
  }

  export  {usePokeState};