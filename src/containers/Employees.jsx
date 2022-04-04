import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EmployeesComponent from "../components/EmployeesComponent";
import { setEmployees } from "../redux/actions/EmployeesActions";

const Employees = () => {

    const dispatch = useDispatch()

    const getAllEmployees = async() =>{
        const response = await fetch("https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/vendedores");
        const secondResponse = await response.json();
        //console.log(secondResponse);
        dispatch(setEmployees(secondResponse))
    }

    useEffect(() =>{
        getAllEmployees()
    },[])

    return ( 
        <div>
            <h1>
                Vendedores
            </h1>
            <EmployeesComponent />
        </div>
    );
}
 
export default Employees;