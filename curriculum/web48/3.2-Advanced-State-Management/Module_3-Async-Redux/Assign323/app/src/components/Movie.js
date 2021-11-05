import React, { useEffect} from 'react'

import { connect } from 'react-redux'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import {    
  getMovie
 
    } from '../actions';

const Movie = ({ movie, isFetching, error, dispatch }) => {
  
  useEffect(()=> {
    dispatch(getMovie());    
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching movie for ya!</h2>;
  }

  const handleClick = () => {

    dispatch(getMovie());     
  }

  return (
    <>
      <div>     
        <h2>{movie.name} </h2>        
        <img src={movie.image.medium}/>
        {/* <p>network: {movie.network.name} </p> */}
        <div>
          { ReactHtmlParser(movie.summary) }
        </div>
        <p>rating: {movie.rating.average} </p>
      </div>
      <button onClick={handleClick}>Choose me another show</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.movie,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Movie);