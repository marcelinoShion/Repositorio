import React, { useCallback, useMemo, useState } from "react";
import Nav from "./Nav";

export default function App (){
    const [value , setValue] = useState(10000)
    const x = useMemo(()=>{
        return processamento()
    })
    function processamento(){
        for(let i = 0 ; i < 10000000 ; i++){
            if(i == 9000000){
                return i
            }
            console.log('ola')
        }
    }
    function adicionar(){
        setValue(old => old + 1)
        console.log(x)
    }
    return(
        <>
        <Nav nome = {x}/>
        <button onClick={adicionar}>ADD</button>
    
            <fieldset>
                <legend>Nome</legend>
            </fieldset>
        
        </>
    )
}