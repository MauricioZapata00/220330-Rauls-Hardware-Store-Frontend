import React from "react";
import { useSelector } from "react-redux";

const BillsComponent = () => {

    const bills = useSelector((state) => state.allBills.bills);
    

    const renderedListOfBills = bills.map((bill) => {
        return (
            <div className="center-block" key={bill.id}>
                <div className="card">
                    <h5 className="card-header">$ {bill.totalAPagar}</h5>
                    <div className="card-body">
                        <h5 className="card-text">{JSON.stringify(bill.productos)}</h5>
                        <h5 className="card-title">Asesor: {bill.nombreVendedor}</h5>
                        <h5 className="card-title">Cliente: {bill.nombreCliente}</h5>
                        <p className="card-text">Fecha: {bill.fecha}</p>
                        <a href="#" className="btn btn-primary">Imprimir</a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row">
            {renderedListOfBills}
        </div>
    )
}

export default BillsComponent;