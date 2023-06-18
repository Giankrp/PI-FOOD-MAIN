import React from "react"
import { NavLink } from "react-router-dom"
import imgLandingPage from "../images/imgLandingPage.jpg"
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="All">
      <div className="container-img-landingpageimg-container">
        <img className="img-landingpage" src={imgLandingPage} alt="Cargando" />
      </div>

      <div className="container-text">
        <h1>FOOD APP</h1>
        <p>Aplicacion de comida para que puedas tener una vida saludable</p>
      </div>

      <div className="content">
        <NavLink className="NavLink" to="/home">
          <button>Ver recetas</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage