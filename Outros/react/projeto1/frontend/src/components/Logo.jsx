import React from "react";
import logo from '../assets/imgs/logo192.png'
import Logo from './Logo.css'
import { Link } from "react-router-dom";

export default props => 
<aside className="logo justify-content-around">
    <Link to={'/'} className=" pl-5 pr-5">
    <img src={logo} alt="logo"/>
    </Link>
    
</aside>