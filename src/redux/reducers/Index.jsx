import { combineReducers } from "redux";
import { BillsReducer } from "./BillsReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    theUser: UserReducer,
    bills: BillsReducer,
});

export default reducers;