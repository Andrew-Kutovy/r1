import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { links } from "../router/links"
import style from "./navbar.module.css"

const Navbar = () => {
    const {pathname} = useLocation()
    return (
        <div className={style.navbar}>
            {links.map((link)=> (
                <Link key={link.label} style={{ color: link.path === pathname? "black": "blue"}}
                      to={link.path}>{link.label}
                </Link> ))}
        </div>
    );
};

export default Navbar;