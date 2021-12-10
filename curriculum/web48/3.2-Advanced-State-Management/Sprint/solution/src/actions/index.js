import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = ()=> {
    return (dispatch) => {
        dispatch(fetchStart());
 
        axios.get('http://localhost:3333/smurfs')
          .then(res=> {
            //   debugger
            dispatch(fetchSuccess(res.data));                     
        })
        .catch(err => {
            dispatch(fetchError(err));            
        });
    }
}

export const LOAD_START = "LOAD_START";

export const fetchStart = () => {
    return({type: LOAD_START});
}

export const LOAD_SUCCESS = "LOAD_SUCCESS";

export const fetchSuccess = (smurfs)=> {
    return({type: LOAD_SUCCESS, payload: smurfs});
}

//3. Add a standard action that allows us to set the value of the error message slice of state.
export const LOAD_ERROR = "LOAD_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: LOAD_ERROR, payload:errorMessage});
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (smurf)=>{
    return({
        type: ADD_SMURF, 
        payload: smurf

    });
}