import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    suppliers: []
};

export const SuppliersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_SUPPLIERS:
            return {...state, suppliers: action.data}
    
        default:
            return state;
    }
}