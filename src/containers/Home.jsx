import React from "react";
import IndexImage from "../assets/img/logo.jpg"
import '../App.css';
import "../assets/styles/style.css"
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/credentials";
import { signOut } from "firebase/auth";
import { setEnteringUser } from "../redux/actions/UserActions";

const Home = () => {
    const authentication = auth;
    const usuario = useSelector((state) => state.theUser.user);
    const dispatch = useDispatch();
    //console.log(usuario)
    const LogOut = () => {
        signOut(authentication);
        dispatch(setEnteringUser([]));
    }
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
                        <div className="center-block">
                            <div className="centrado">
                                <button type="button" id="logout" className="btn btn-light" onClick={() => LogOut()}>Log Out</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )}

        </div>
    )
}

export default Home;