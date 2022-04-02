import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    user: []
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return{...state, user: action.data};
    
        case ActionTypes.SIGN_OUT_USER:
            return{...state, user: []}
        default:
            return state;
    }
}