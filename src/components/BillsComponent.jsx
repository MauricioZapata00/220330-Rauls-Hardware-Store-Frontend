import React from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import { NavLink } from "react-router-dom";

const BillsComponent = () => {

    const bills = useSelector((state) => state.allBills.bills);

    const downloadPdf = (bill) => {
        const document = new jsPDF();
        let text = "";
        const arrayOfValues = Object.values(bill);
        let counter = 0;
        let arrayOfKeyProducts = Object.keys(bill.productos)
        let arrayOfValueProducts = Object.values(bill.productos)
        let counter2 = 0;
        Object.keys(bill).map((tag) => {
            if (counter === 3) {
                arrayOfKeyProducts.map((product) => {
                    text += (tag + " :\t" + product + ":\t" + arrayOfValueProducts[counter2] + "\n")
                    counter2 += 1
                })
                counter +=1
            } else {
                text += (tag + " :\t" + arrayOfValues[counter] + "\n")
                counter += 1
            }
        })
        document.text(text, 10, 10);
        document.save("Factura Fecha: " + bill.fecha + ".pdf")
    }

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
                        <a className="btn btn-primary" onClick={() => downloadPdf(bill)}>Imprimir</a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>
                {
                    Object.keys(bills).length === 0 ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div className="row">
                            {renderedListOfBills}
                            <div>
                                <NavLink to="/createBill" className="nav-link">
                                    <button type="button" className="btn btn-success">Crear Factura</button>
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BillsComponent;