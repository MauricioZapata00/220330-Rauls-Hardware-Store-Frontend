import { ActionTypes } from "../constants/ActionTypes"

export const setBills = (bills) =>{
    return {
        type: ActionTypes.SET_BILLS,
        data: bills
    };
};