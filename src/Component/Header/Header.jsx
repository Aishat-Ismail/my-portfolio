import React from "react";
import "./Header.css"
import Logo from "/src/assets/circle.png"

export default function Nav(){
    return(
        <>
        <div id="nav">
            <div id="containHead">
            <div id="logo">
               <a href="#"><img src={Logo} alt="" /><p>Dev Aishat</p></a> 
            </div>
            <div id="link">
                <span><a href="#about">About</a></span>
                <span><a id="do" href="#skill">Skills</a></span>
                <span id="im"><a  href="#Project">Projects</a></span>
                <span><a href="#">Certificates</a></span>
                <span><a href="#contact">Contact</a></span>
            </div>
            </div>
        </div>
        </>
    )
}