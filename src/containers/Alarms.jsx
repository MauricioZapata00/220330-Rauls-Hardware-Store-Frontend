import React from "react";
import { useSelector } from "react-redux";

const Alarms = () => {
    const usuario = useSelector((state) => state.theUser.user)
    return (
        <div>
            {usuario.length === 0 ? (
                <div>
                    <h1>No te has logueado</h1>
                </div>
            ) : (
                <div>
                    <h1>Alarmas</h1>
                    <div className="center-block">
                        <div className="alert alert-success" role="alert">
                            A simple success alert—check it out!
                            <input type="number" min="0" className="button-alarm"></input>
                        </div>
                        <div className="alert alert-danger" role="alert">
                            A simple danger alert—check it out!
                            <input type="number" min="0" className="button-alarm"></input>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Alarms;