import { LOAD_START, LOAD_SUCCESS, LOAD_ERROR, ADD_SMURF } from '../actions'

export const initialState = {
    smurfs: [ ],
    isLoading: false,
    error: ''
    }

export const reducer = (state = initialState, action) => {
    //1. Adds the following state values into the initialState:
    //  - an array of smurfs
    //  - a boolean indicating if the app is loading
    //  - a string indicating a possible error message
    //2. Add in the arguments needed to complete a standard reducer function.
    switch (action.type) {        
        case(LOAD_START):
        //3. Add in a reducer case to accomidate the start of a smurf fetch.
          return({
            ...state,
            smurfs: {},
            isLoading:true,
            error:''
          });       
        case(LOAD_SUCCESS):
        //4. Add in a reducer case to accomidate the successful smurf api fetch.
          return({
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: ''
          });
        case(LOAD_ERROR):
        //5. Add in a reducer cases to accomidate the failed smurf api fetch.
          return({
            ...state,
            smurfs:[...state.smurfs],
            isLoading: false,
            error: action.payload
          })
        case ADD_SMURF:
          const newSmurf = {
            ...action.payload,
            id: Date.now()
          }
          return {
            ...state,
            smurfs: [...state.smurfs, newSmurf]
          }
        default:
          return state;
      }

}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:

//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.