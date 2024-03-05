import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";

type CustomNavLinkProps = NavLinkProps & {
    isActive?: boolean;
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({to, children, isActive}) => {
    return (
        <NavLink
            to={to}
            activeClassName={"a--act"}
            className={isActive ? "a--act" : "a--def"}
        >
            {children}
        </NavLink>
    );
};

export const Navbar = () => {
    return (
        <nav className={"nav"}>
            <div><CustomNavLink to={"/profile"}>Profile</CustomNavLink>
            </div>
            <div><CustomNavLink to={"/dialogs"}>Messages</CustomNavLink>
            </div>
            <div><CustomNavLink to={"/users"}>Users</CustomNavLink>
            </div>
            <div><CustomNavLink to={"/news"}>News</CustomNavLink></div>
            <div><CustomNavLink to={"/music"}>Music</CustomNavLink>
            </div>
            <div><CustomNavLink to={"/settings"}>Settings</CustomNavLink></div>
        </nav>
    )
}