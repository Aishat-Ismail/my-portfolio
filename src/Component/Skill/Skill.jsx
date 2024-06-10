import React from "react";
import "./Skill.css"
import Skills from "/src/assets/skills.svg"
import Undraw from "/src/assets/careers.webp"

export default function Skill(){
    return(
        <>
        <div id="skill">        
            <h3 id="sk">Skills</h3>
            <div id="containS">
                <div id="skillImg">
                    <img src={Skills} alt="" />
                </div>
                <div id="SkiImage">
                <img src={Undraw} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}