import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    tickets: []
};

export const TicketsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_TICKETS:
            return{...state, tickets: action.data}
    
        default:
            return state;
    }
}