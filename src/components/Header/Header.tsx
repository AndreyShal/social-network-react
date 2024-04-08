import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderProps = {
    login: null | string,
    isAuth: boolean
    logout: ()=> void
}

export const Header = (props: HeaderProps) => {
    return (
        <header className={s.header}>
            <img src={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"} alt={"logo"}/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}
