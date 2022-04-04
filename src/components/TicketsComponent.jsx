import React from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";

const TicketsComponent = () => {

    const tickets = useSelector((state) => state.allTickets.tickets);

    const downloadPdf = (ticket) => {
        const document = new jsPDF();
        let text = "";
        const arrayOfValues = Object.values(ticket);
        let counter = 0;
        let arrayOfKeyProducts = Object.keys(ticket.productosAIngresar)
        let arrayOfValueProducts = Object.values(ticket.productosAIngresar)
        let counter2 = 0;
        Object.keys(ticket).map((tag) => {
            if (counter === 3) {
                arrayOfKeyProducts.map((product) => {
                    text += (tag + " :\t" + product + ":\t" + arrayOfValueProducts[counter2] + "\n")
                    counter2 += 1
                })
                counter += 1
            } else {
                text += (tag + " :\t" + arrayOfValues[counter] + "\n")
                counter += 1
            }
        })
        document.text(text, 10, 10);
        document.save("Factura Fecha: " + ticket.fecha + ".pdf")
    }

    const renderedListOfTickets = tickets.map((ticket) => {
        return (
            <div className="center-block" key={ticket.id}>
                <div className="card">
                    <h5 className="card-header">$ {ticket.totalAPagar}</h5>
                    <div className="card-body">
                        <h5 className="card-text">{JSON.stringify(ticket.productosAIngresar)}</h5>
                        <h5 className="card-title">Proveedor: {ticket.nombreVendedor}</h5>
                        <h5 className="card-title">NIT-Proveedor: {ticket.nitproveedor}</h5>
                        <p className="card-text">Fecha: {ticket.fecha}</p>
                        <a className="btn btn-primary" onClick={() => downloadPdf(ticket)}>Imprimir</a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>
                {
                    Object.keys(tickets).length === 0 ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div>
                            {renderedListOfTickets}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default TicketsComponent;