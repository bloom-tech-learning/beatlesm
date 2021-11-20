import React, { useEffect, useState } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import MovieList from './components/MovieList';
import Movie from './components/Movie';

import MovieHeader from './components/MovieHeader';

import EditMovieForm from './components/EditMovieForm';
import FavoriteMovieList from './components/FavoriteMovieList';
import AddMovieForm from "./components/AddMovieForm";

import axios from 'axios';

const App = (props) => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteMovie = (id)=> {
    setMovies({
      movies: movies.filter(movie => movie.id !== id)
    })
  }

  const addToFavorites = (movie) => {
    
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png"/> HTTP / CRUD Module Project</span>
      </nav>

      {/* <div className="container">
        <MovieHeader/>
        <div className="row ">
          <FavoriteMovieList favoriteMovies={favoriteMovies}/> */}
        
          <Switch>
            
            <Route exact path="/movies/add">
              <AddMovieForm  setMovies={setMovies} />
            </Route>

            <Route path="/movies/edit/:id">
              <EditMovieForm setMovies={setMovies} />
            </Route>

            {/* <Route path="/movies/:id">
              <Movie setMovies={setMovies}  />
            </Route> */}

            <Route
              path="/movies/:id"
              render={props => <Movie {...props} deleteMovie={deleteMovie} />}
              // render={props => <Item match = {props.match} history = {props.history} setItems={setItems} />}
            />

            <Route path="/movies">
              <MovieList movies={movies} />
            </Route>

            {/* <Route
              exact
              path="/movies"
              render={props => <MovieList {...props} movies={movies} />}
            /> */}

            <Route path="/">
              <Redirect to="/movies"/>
            </Route>
          </Switch>
        {/* </div>
      </div> */}
    </div>
  );
};


export default App;

