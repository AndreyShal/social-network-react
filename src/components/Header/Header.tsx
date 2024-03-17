import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderProps = {
    login: null | string,
    isAuth: boolean
}

export const Header = (props: HeaderProps) => {
    return (
        <header className={s.header}>
            <img src={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"} alt={"logo"}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}
