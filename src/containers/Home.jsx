import React from "react";
import IndexImage from "../assets/img/logo.jpg"
import '../App.css';
import "../assets/styles/style.css"


const Home = () =>{
    return(
        <div>
            <img src={IndexImage} className="ImagenInicial" alt="Logo" />
            <div className="App">
                <div className="centrado">
                    <p>Bienvenido al sistema de la ferretería de Raul</p>
                    <p>Ve a la pestaña de logueo para registrarte o iniciar sesión</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home;