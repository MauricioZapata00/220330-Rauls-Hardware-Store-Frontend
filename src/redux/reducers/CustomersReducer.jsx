import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    customers: []
};

export const CustomersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_CUSTOMERS:
            return {...state, customers: action.data}
    
        default:
            return state;
    }
}