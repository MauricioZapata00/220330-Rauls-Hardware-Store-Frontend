import React from "react";
import { useSelector } from "react-redux";

const EmployeesComponent = () => {

    const employees = useSelector((state) => state.allEmployees.employees)

    const renderedListOfEmployees = employees.map((employee) => {
        return (
            <div className="col-6 col-md-4" key={employee.id}>
                <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {employee.nombreVendedor}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Celular: {employee.celularVendedor}</h6>
                        <p className="card-text">Cédula: {employee.cedulaVendedor}</p>
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
                    Object.keys(employees).length === 0 ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div>
                            {renderedListOfEmployees}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default EmployeesComponent;