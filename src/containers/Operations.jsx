import React from "react";
import { useSelector } from "react-redux";

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
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Operations;