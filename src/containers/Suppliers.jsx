import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SuppliersComponent from "../components/SuppliersComponent";
import { setSuppliers } from "../redux/actions/SuppliersActions";

const Suppliers = () => {

    const dispatch = useDispatch()

    const getAllSuppliers = async() =>{
        const response = await fetch("https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/proveedores");
        const secondResponse = await response.json();
        console.log(secondResponse);
        dispatch(setSuppliers(secondResponse))
    }

    useEffect(() => {
        getAllSuppliers()
    },[])

    return ( 
        <div>
            <h1>
                Proveedores
            </h1>
            <SuppliersComponent />
        </div>
    );
}
 
export default Suppliers;