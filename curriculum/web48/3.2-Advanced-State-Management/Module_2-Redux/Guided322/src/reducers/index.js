import dragonReducer from './dragonReducer';
import titleReducer from './titleReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    dragon: dragonReducer,
    title: titleReducer
});
