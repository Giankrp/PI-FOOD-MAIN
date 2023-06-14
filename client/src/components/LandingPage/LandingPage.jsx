import React from "react"
import { NavLink } from "react-router-dom"
import imgLandingPage from "../images/imgLandingPage"
import "./LandinfPage.css"

const LandingPage = ()=>{
    return(
        <div className="Main">
            <div className="img-container">
                <img className="img-LandinfPage" src={imgLandingPage} alt="Cargando" />
            </div>

            <div className="text-container">
                <h1>FOOD APP</h1>
                <p>Aplicacion de comida para que puedas tener una vida saludable</p>
            </div>

            <div className="link-Home">
                <NavLink className="NavLink" to="/home">
                    <button>
                        Ver recetas
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingPage