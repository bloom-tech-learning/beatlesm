//action constant for addMember
export const ADD_MEMBER = "ADD_MEMBER";

//action creator method for addMember
export const addMember = (name) => {
    return {type: ADD_MEMBER, payload:name}
}