import React from "react";
import IndexImage from "../assets/img/logo.jpg"
import '../App.css';
import "../assets/styles/style.css"
import { useSelector } from "react-redux";


const Home = () => {
    const usuario = useSelector((state) => state.theUser.user)
    console.log(usuario)
    return (
        <div>
            {usuario.length === 0 ? (
                <div>
                    <img src={IndexImage} className="ImagenInicial" alt="Logo" />
                    <div className="App">
                        <div className="centrado">
                            <p>Bienvenido al sistema de la ferretería de Raul</p>
                            <p>Ve a la pestaña de logueo para registrarte o iniciar sesión</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <img src={IndexImage} className="ImagenInicial" alt="Logo" />
                    <div className="App">
                        <div className="centrado">
                            <p>Ya estás logueado</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Home;