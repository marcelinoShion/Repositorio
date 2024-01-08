import React from "react";
import './assets/Nav.css'
export default function Nav() {
    const nav = document.querySelector('.nav')
    window.addEventListener('scroll',fixNav)

    function fixNav (){
        if(window.scrollY > nav.clientHeight){
            nav.classList.add('active')
        }else{
            nav.classList.remove('active')
        }
    }
    return (
        <>
            <nav className="nav">
                <div><h1>Logo</h1></div>
                <ul>
                    <li className="current">Home</li>
                    <li>Projects</li>
                    <li>Image</li>
                    <li>About</li>
                </ul>
            </nav>
            
        </>
    )
}