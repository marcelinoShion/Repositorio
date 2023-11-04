import React from "react";
import App from  './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/Header";
import Logo from "../components/Logo";
// import Main from "../components/Main";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Route from "./Route";

import { BrowserRouter } from "react-router-dom";


export default props =>
<BrowserRouter> 
    <div className="App ">
        <Logo />
        <Header/>
        <Route/>
        <Nav/>
        <Footer/>
    </div>

</BrowserRouter>
    

