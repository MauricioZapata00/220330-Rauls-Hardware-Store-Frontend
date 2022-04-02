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
                </div>
            )}
        </div>
    )
}

export default Operations;