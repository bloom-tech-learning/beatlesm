import { ADD, SUBTRACT, CLEAR, ADD_TO_MEMORY} from './../actions/calcActions';
export const initialState = {
  currentValue: 0,
  memory: 0
}


const reducer = (state, action) => {
    switch (action.type) {
      case ADD:
        return { ...state, currentValue: state.currentValue + action.payload };
      case SUBTRACT:
        return { ...state, currentValue: state.currentValue - action.payload };
      case CLEAR:
        return { ...state, currentValue: 0 };
      case ADD_TO_MEMORY:
        return { ...state, memory: state.currentValue };
      default:
        return state;
    }
  };
  
  export default reducer;
  