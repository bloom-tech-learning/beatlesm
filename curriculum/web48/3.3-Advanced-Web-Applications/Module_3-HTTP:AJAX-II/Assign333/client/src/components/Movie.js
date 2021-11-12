import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import axios from 'axios';

const Movie = (props) => {
    const { addToFavorites } = props;
    console.log('props in Movie: ', props); 
    const [movie, setMovie] = useState('');

    const { id } = useParams();
    const { push } = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${id}`)
            .then(res=>{
                setMovie(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, [id]);

    //To Delete:
    //1. Capture a click.
    //2. Send our axios call to delete current movie (id)
    //3. Redirect user to movie list page.
    //4. Update local state
    const handelDelete = ()=> {       
        axios.delete(`http://localhost:5000/api/movies/${id}`)
            .then(res=>{
                console.log('res in delete: ', res);                
                console.log('props in delete: ', props);  
                //	Update local storage with our new movie list  
			    props.deleteMovie(id);
			    //	Redirect the user to the movie list page.
			    push (`/movies`);             
            })
            .catch(err=>{
                console.log(err.response);
            })
       }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <Link to={`/movies/edit/${movie.id}`} className="m-2 btn btn-success">Edit</Link>
                            <span className="delete" onClick = {handelDelete}  ><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Movie;