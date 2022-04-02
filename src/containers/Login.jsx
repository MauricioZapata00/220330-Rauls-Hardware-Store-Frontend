import React, { useState } from "react";
import '../App.css';
import Google from '../assets/img/googleLogo.jpg';
import GitHub from '../assets/img/GitHubLogo.png'
import { auth } from "../firebase/credentials";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const authentication = auth;
    const [user, setUser] = useState(null)

    const registerUser = async(email, password) =>{
        console.log("Presionaste Registro")
        const infoUser = await createUserWithEmailAndPassword(authentication,email, password)
        console.log(infoUser);
    }
    return (
        <div>
            <div className="center-block">
                <div>
                    <input type="text" className="form-control" placeholder="Usuario" aria-label="Username" />
                </div>
            </div>
            <div className="center-block">
                <div>
                    <input type="text" className="form-control" placeholder="Contraseña" aria-label="Server" />
                </div>
            </div>
            
            <div className="center-block">
                <button type="button" className="btn btn-secondary" onClick={() =>registerUser()}>
                    Registro
                </button>
            </div>
            <div className="center-block">
                <button type="button" className="btn btn-success">
                    <div className="boton-login">
                        <img src={Google} className="icon" alt="Google" />
                        <div className="login">
                            Login con Google
                        </div>
                    </div>
                </button>
            </div>
            <div className="center-block">
                <button type="button" className="btn btn-dark">
                    <div className="boton-login">
                        <img src={GitHub} className="icon" alt="Google" />
                        <div className="login">
                            Login con GitHub
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Login;