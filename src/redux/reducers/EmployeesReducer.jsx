import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    employees: []
};

export const EmployeesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_EMPLOYEES:
            return{...state, employees: action.data}
    
        default:
            return state;
    }
}