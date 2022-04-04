import { ActionTypes } from "../constants/ActionTypes"

export const setEmployees = (employees) =>{
    return{
        type: ActionTypes.SET_EMPLOYEES,
        data: employees
    };
};