import {ADD_MEMBER} from './../actions/dragonActions';

//1. InitialState
//   - add members to initialState
export const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
}

//2. reducer function (list of our actions)
//  - make reducer function with state and action as arguments.
//  - add in addMember as an action case
//  - default case that returns state
//  - export out our reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MEMBER:
            return {
                ...state,
                members: [...state.members, {name: action.payload, dragonStatus: true}]
            }
        default:
            return state;
    }
}

export default reducer;
