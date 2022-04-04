import React from "react";
import { useSelector } from "react-redux";

const SuppliersComponent = () => {

    const suppliers = useSelector((state) => state.allSuppliers.suppliers)

    const renderedListOfSuppliers = suppliers.map((supplier) => {
        return (
            <div className="col-6 col-md-4" key={supplier.id}>
                <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {supplier.nombreProveedor}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Celular: {supplier.celularProveedor}</h6>
                        <p className="card-text">NIT: {supplier.nit}</p>
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
                    Object.keys(suppliers).length === 0 ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div>
                            {renderedListOfSuppliers}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default SuppliersComponent;