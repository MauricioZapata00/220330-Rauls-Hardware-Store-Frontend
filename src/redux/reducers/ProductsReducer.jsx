import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    products: []
};

export const ProductsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.data}
    
        default:
            return state;
    }
}