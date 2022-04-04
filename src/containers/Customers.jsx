import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomersComponent from "../components/CustomersComponent";
import { setCustomers } from "../redux/actions/CustomersActions";

const Customers = () =>{

    const dispatch = useDispatch()

    const getAllCustomers = async () =>{
        const response = await fetch("https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/clientes");
        const secondResponse = await response.json();
        //console.log(secondResponse);
        dispatch(setCustomers(secondResponse));
    }

    useEffect(() => {
        getAllCustomers();
    },[])

    return(
        <div>
            <h1>
                Clientes
            </h1>
            <CustomersComponent />
        </div>
    )
}

export default Customers;