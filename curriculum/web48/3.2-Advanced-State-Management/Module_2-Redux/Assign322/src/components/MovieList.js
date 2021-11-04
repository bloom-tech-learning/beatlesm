import React from 'react';

import { connect } from 'react-redux';

import { addMovie } from './../actions/movieActions';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {

    // console.log('props: ', props);

    const {movies} = props;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('state in MovieList: ', state);
    return {
        movies: state.movieReducer.movies,
        // movies: state.movies,
        appTitle: 'IMDB Movie Database'
    }
}

export default connect(mapStateToProps)(MovieList);