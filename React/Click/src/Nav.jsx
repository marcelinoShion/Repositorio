import React from "react";
import Title from "./Title";
export default function Nav({nome}){
    return (
        <>
        <nav>
            <Title name={nome}/>
        </nav>
        </>
    )
}