import { ActionTypes } from "../constants/ActionTypes"

export const setCustomers = (customers) =>{
    return {
        type: ActionTypes.SET_CUSTOMERS,
        data: customers
    };
};
