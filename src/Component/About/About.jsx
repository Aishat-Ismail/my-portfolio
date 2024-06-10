import React from "react";
import "./About.css"
import Hi from "/src/assets/hi.png"
import Profile from "/src/assets/alajoke.png"
import Cv from "/src/assets/aishatIsmailCV.pdf"

export default function About(){
    return(
        <>
        <div id="about">
            <div id="contain">
                <div id="abtText">
                    <p id="pp">Hi <img src={Hi} alt="" />, I'm a<br/><span>Software Developer</span></p>
                    
                    <p id="p2">
                        I'm <span>Aishat Ismail</span>, a tenacious and ambitious Software Developer, with a passion for coding, programming,
                            and creating powerful software solutions. Seeking opportunities to utilize my technical skills and knowledge in software 
                            development and debugging. With my excellent problem-solving and troubleshooting abilities, I am confident in my capacity to make a substantial contribution to the success of the team.
                    </p>
                    <div id="btn">
                        <a id="btn1" href={Cv} target="parent">View CV</a>
                        
                    </div>
                </div>
                <div id="abtImage">
                <img src={Profile} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}