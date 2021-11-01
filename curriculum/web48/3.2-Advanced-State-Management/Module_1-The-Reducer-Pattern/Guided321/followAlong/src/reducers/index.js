import { TOGGLE_EDITING, CHANGE_TITLE_INPUT, CHANGE_TITLE } from './../actions';

export const initialState = {
    title: "Hello Earthling",
    editing: false,
    newTitleText: ""
}

//{type: "TOGGLE_EDITING"}
const reducer = (state, action) => {
    console.log('3. Enters the reducer.');
    switch(action.type){
        case(TOGGLE_EDITING):
            return({
                ...state,
                editing: !state.editing
            });
        case(CHANGE_TITLE_INPUT):
            return({
                ...state,
                newTitleText: action.payload
            });
        case(CHANGE_TITLE):
            return({
                ...state,
                title: state.newTitleText,
                editing: false
            });
    }
    // if (action.type === TOGGLE_EDITING) {
    //     console.log('4. Executes toggle editting.');
    //     return({
    //         ...state,
    //         editing: !state.editing
    //     });
    // } else if (action.type === CHANGE_TITLE_INPUT) {
    //     return({
    //         ...state,
    //         newTitleText: action.payload
    //     });
    // }

    return(state);
}

export default reducer;