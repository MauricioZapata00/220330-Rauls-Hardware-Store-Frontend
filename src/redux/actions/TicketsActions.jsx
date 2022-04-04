import { ActionTypes } from "../constants/ActionTypes"

export const setTickets = (tickets) =>{
    return{
        type: ActionTypes.SET_TICKETS,
        data: tickets
    };
};