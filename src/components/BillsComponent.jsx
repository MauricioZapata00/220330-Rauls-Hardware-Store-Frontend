import React from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";

const BillsComponent = () => {

    const bills = useSelector((state) => state.allBills.bills);

    const downloadPdf = (bill) =>{
        const document = new jsPDF();
        let text = "";
        Array.from(Object.fromEntries(bill)).map((tag) =>{
            text += (tag + "\n")
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
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BillsComponent;