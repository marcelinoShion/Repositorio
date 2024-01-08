import React from "react";
import List from "./Nav/List";
import './assets/Nav.css'
export default function Nav() {
    const navd = document.querySelector('.abc')
    console.log(document.querySelector('.abc'))
    window.addEventListener('scroll',()=>{
        if(window.scrollY > navd.scrollHeight){
            navd.classList.add('active')
        }else{
            navd.classList.remove('active')
        }
    
    })
    return (
        <>
            <nav className="abc">
                <div className="logo">Logo</div>
                <List />
            </nav>
        </>
    )
}