import { combineReducers } from "redux";
import { BillsReducer } from "./BillsReducer";
import { CustomersReducer } from "./CustomersReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    theUser: UserReducer,
    allBills: BillsReducer,
    allCustomers: CustomersReducer,
});

export default reducers;