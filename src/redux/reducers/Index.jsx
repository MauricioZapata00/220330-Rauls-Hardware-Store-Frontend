import { combineReducers } from "redux";
import { BillsReducer } from "./BillsReducer";
import { CustomersReducer } from "./CustomersReducer";
import { ProductsReducer } from "./ProductsReducer";
import { SuppliersReducer } from "./SuppliersReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    theUser: UserReducer,
    allBills: BillsReducer,
    allCustomers: CustomersReducer,
    allProducts: ProductsReducer,
    allSuppliers: SuppliersReducer,
});

export default reducers;