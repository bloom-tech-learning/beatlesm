import axios from 'axios'

export const getMovie = ()=> {
    return (dispatch) => {
        dispatch(fetchStart());     

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
         
        const id = getRandomInt(239);  

        axios.get(`https://api.tvmaze.com/shows/${id}`)
          .then(resp=> {   
              
            // console.log('resp.data[0]', resp.data[2]);   
            // debugger 
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {            
            // dispatch(fetchError(err));
        });        

    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:person});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}