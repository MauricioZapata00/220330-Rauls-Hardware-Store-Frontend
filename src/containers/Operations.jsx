import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Operations = () => {
    const usuario = useSelector((state) => state.theUser.user)
    return (
        <div>
            {usuario.length === 0 ? (
                <div>
                    <h1>No te has logueado</h1>
                </div>
            ) : (
                <div>
                    <h1>Operaciones</h1>
                    <div className="center-block">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <NavLink to="/bills" className="nav-link">
                                        Facturas
                                    </NavLink>
                                </li>
                                <li className="page-item">
                                    <NavLink to="/customers" className="nav-link">
                                        Clientes
                                    </NavLink>
                                </li>
                                <li className="page-item">
                                    <NavLink to="/products" className="nav-link">
                                        Productos
                                    </NavLink>
                                </li>
                                <li className="page-item">
                                    <NavLink to="/suppliers" className="nav-link">
                                        Proveedores
                                    </NavLink>
                                </li>
                                <li className="page-item">
                                    <NavLink to="/employees" className="nav-link">
                                        Vendedores
                                    </NavLink>
                                </li>
                                <li className="page-item">
                                    <NavLink to="/tickets" className="nav-link">
                                        Volantes
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Operations;