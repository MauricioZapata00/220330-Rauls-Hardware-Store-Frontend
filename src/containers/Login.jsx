import React, { useState } from "react";
import '../App.css';
import Google from '../assets/img/googleLogo.jpg';
import GitHub from '../assets/img/GitHubLogo.png'
import { auth, db } from "../firebase/credentials";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setEnteringUser } from "../redux/actions/UserActions";

const Login = () => {
    const authentication = auth;
    const firestore = db;
    const [registered, setRegistered] = useState(false);
    const usuario = useSelector((state) => state.theUser.user);
    const dispatch = useDispatch()


    const registrarUsuario = async (email, password) => {
        const infoUser = await createUserWithEmailAndPassword(authentication,
            email,
            password).catch((error) => {
                console.log(error);
            }).then((firestoreUser) => {
                return firestoreUser
            })
        //console.log(infoUser.user.uid);
        const docuRef = doc(firestore, `raulsHardwareStore/${infoUser.user.uid}`);
        setDoc(docuRef, { correo: email, uid: infoUser.user.uid });
        console.log(infoUser);
        dispatch(setEnteringUser([infoUser.user.email]));
    }

    const LogedUser = async (email, password) => {
        const infoLogedUser = await signInWithEmailAndPassword(authentication, email, password)
        dispatch(setEnteringUser([infoLogedUser.user.email]));

    }

    const accessUser = async (e) => {

        e.preventDefault();
        const email = e.target.elements.user.value;
        const password = e.target.elements.password.value;

        console.log("Presionaste Registro")
        console.log(email);
        console.log(password);
        //console.log(registered);
        switch (registered) {
            case true:
                LogedUser(email, password)
                break;
            case false:
                registrarUsuario(email, password);
                break;
        }
    }

    const LogOut = () => {
        signOut(authentication);
        dispatch(setEnteringUser([]));
    }

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const LogWitGoogle = () =>{
        signInWithPopup(authentication, googleProvider).catch((error) => {
            console.log(error);
        }).then((google) => {
            console.log(google);
            dispatch(setEnteringUser([google.user.email]))
            return google;
        });
    }

    const LogWithGitHub = () => {
        signInWithPopup(authentication, githubProvider).catch((error) => {
            console.log(error);
        }).then((github) => {
            console.log(github);
            dispatch(setEnteringUser([github.user.email]))
            return github;
        })
    }

    return (
        <div>
            {usuario.length === 0 ? (
                <div>
                <form className="center-block" onSubmit={accessUser}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="user" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Ingresa tu correo electr??nico para registrarte</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Contrase??a</label>
                        <input type="password" className="form-control" id="password" placeholder="Contrase??a" required minLength="6" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="registered" onChange={e => setRegistered(e.target.checked)} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Ya tengo cuenta</label>
                    </div>
                    <button type="submit" className="btn btn-secondary">
                        Registrar - Acceder
                    </button>
                </form>
                <div className="center-block">
                    <button type="submit" className="btn btn-success" onClick={() => LogWitGoogle()}>
                        <div className="boton-login">
                            <img src={Google} className="icon" alt="Google"/>
                            <div className="login">
                                Login con Google
                            </div>
                        </div>
                    </button>
                </div>
                <div className="center-block">
                    <button type="submit" className="btn btn-dark" onClick={() => LogWithGitHub()}>
                        <div className="boton-login">
                            <img src={GitHub} className="icon" alt="GitHub" />
                            <div className="login">
                                Login con GitHub
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            ):(
                <div className="center-block">
                    <button type="submit" className="btn btn-dark" onClick={() => LogOut()}>
                        <div className="boton-login">
                            <div className="login">
                                LogOut
                            </div>
                        </div>
                    </button>
                </div>
            )}
            
        </div>
    )
}

export default Login;