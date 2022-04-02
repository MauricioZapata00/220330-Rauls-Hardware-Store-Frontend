import { ActionTypes } from "../constants/ActionTypes"

export const setEnteringUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        data: user
    };
};

export const signOutUser = () => {
    return {
        type: ActionTypes.SIGN_OUT_USER,
        data: []
    }
};