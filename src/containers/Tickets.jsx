import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TicketsComponent from "../components/TicketsComponent";
import { setTickets } from "../redux/actions/TicketsActions";

const Tickets = () => {

    const dispatch = useDispatch()

    const getAllTickets = async() =>{
        const response = await fetch("https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/volantes");
        const secondResponse = await response.json();
        //console.log(secondResponse);
        dispatch(setTickets(secondResponse))
    }

    useEffect(() =>{
        getAllTickets()
    })

    return ( 
        <div>
            <h1>
                Volantes
            </h1>
            <TicketsComponent />
        </div>
    );
}
 
export default Tickets;