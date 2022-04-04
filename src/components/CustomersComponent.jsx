import React from "react";
import { useSelector } from "react-redux";

const CustomersComponent = () => {

    const customers = useSelector((state) => state.allCustomers.customers);

    const renderedListOfCustomers = customers.map((customer) => {
        return (
            <div className="col-6 col-md-4" key={customer.id}>
                <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {customer.nombreCliente}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Celular: {customer.celularCliente}</h6>
                        <p className="card-text">Cedula: {customer.cedulaCliente}</p>
                        <button type="button" className="btn btn-info">Editar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div>
                {
                    Object.keys(customers).length === 0 ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div>
                            {renderedListOfCustomers}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CustomersComponent;