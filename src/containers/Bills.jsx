import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BillsComponent from "../components/BillsComponent";
import { setBills } from "../redux/actions/BillsActions";

const Bills = () => {

    const dispatch = useDispatch()

    const getAllBills = async () => {
        const response = await fetch("https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/facturas");
        const otherResponse = await response.json()
        //console.log("La respuesta es:", otherResponse)
        dispatch(setBills(otherResponse))
    }

    useEffect(() => {
        getAllBills();
    }, [])
    return (
        <div>
            <h1>
                Facturas
            </h1>
            <BillsComponent /> 
        </div>
    )
}

export default Bills;