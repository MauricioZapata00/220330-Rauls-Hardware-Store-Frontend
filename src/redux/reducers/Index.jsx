import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    theUser: UserReducer
});

export default reducers;