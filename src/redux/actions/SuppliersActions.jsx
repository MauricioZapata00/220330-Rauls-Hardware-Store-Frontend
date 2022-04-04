import { ActionTypes } from "../constants/ActionTypes"

export const setSuppliers = (suppliers) =>{
    return {
        type: ActionTypes.SET_SUPPLIERS,
        data: suppliers
    };
};