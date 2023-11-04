import { Routes,Route } from "react-router-dom";
import React from "react";
import Home from '../components/home/Home'
import UserCrud from "../components/user/UserCrud";
import Error from "../components/user/Error";





export default props => 
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Error/>} />

    </Routes>


