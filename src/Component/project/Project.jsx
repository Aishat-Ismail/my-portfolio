import React from "react";
import "./Project.css"
import Pro from "./Projects";
import Projec from "/src/assets/project.svg"
import Expense from "/src/assets/expense.png"
import Stockit from "/src/assets/stockit.png"
import SummaryResult from "/src/assets/huddle.png"

export default function Project(){
    return(
        <>
        <div id="Project">        
            <p id="pr">Projects </p>
            <p id="ase">A selected number of projects.</p>
            <div id="containP">
                <Pro src={Expense} text="Designed a simple expense tracker application using HTML5, CSS and Javascript." href="https://cybogsail.000webhostapp.com/" >
                </Pro>
                <Pro src={Stockit}text="Designing an Inventory Management Application that efficiently manages inventory, boosts productivity, and optimizes profitability with React, and Firebase." href="https://stopwatch-five-mu.vercel.app/" >
                </Pro>
                <Pro src={SummaryResult} text="Designed a responsive result summary template page using HTML 5 and CSS to sharpen my skills in responsiveness." href="https://huddle-landing-page-eight-omega.vercel.app" >
                </Pro>
              
            </div>
        </div>
        </>
    )
}

