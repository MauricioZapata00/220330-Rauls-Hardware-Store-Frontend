import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    bills: []
};

export const BillsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_BILLS:
            return {...state, bills: action.data}
    
        default:
            return state;
    }
}