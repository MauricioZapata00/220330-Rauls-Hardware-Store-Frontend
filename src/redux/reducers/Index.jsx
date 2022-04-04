import { combineReducers } from "redux";
import { BillsReducer } from "./BillsReducer";
import { CustomersReducer } from "./CustomersReducer";
import { EmployeesReducer } from "./EmployeesReducer";
import { ProductsReducer } from "./ProductsReducer";
import { SuppliersReducer } from "./SuppliersReducer";
import { TicketsReducer } from "./TicketsReducer";
import { UserReducer } from "./UserReducer";

const reducers = combineReducers({
    theUser: UserReducer,
    allBills: BillsReducer,
    allCustomers: CustomersReducer,
    allProducts: ProductsReducer,
    allSuppliers: SuppliersReducer,
    allEmployees: EmployeesReducer,
    allTickets: TicketsReducer, 
});

export default reducers;