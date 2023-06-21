import React from "react";
import perfil from "../images/perfil.jpg";
import { NavLink } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <NavLink to="/home">
        <button className="button-back">Back</button>
      </NavLink>
      <div className="summary">
        <p className="me">
          ¡Hola! Soy Gian y soy el creador de este proyecto, tuve que implementar tecnologías actualizadas a las necesidades de hoy en día como lo son la base de datos más usada como lo es PostgreSQL, así como Node.js con Express que es el framework por excelencia para trabajar y aprender backend con JavaScript, así como la biblioteca más usada del frontend, que es React, con su implementación en tareas centralizadas como lo es Redux. Espero que disfrutes de este proyecto, así como yo disfruté (y sufrí xd) haciéndolo. ¡Saludos!
        </p>
        <h1>Aquí mis redes principales</h1>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/gian-carlo-ruiz-pati%C3%B1o-320270183/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            Linkedin
          </a>
          <a href="https://github.com/Giankrp" target="_blank" rel="noopener noreferrer" className="social-link github">
            GitHub
          </a>
        </div>
        <div className="profile-section">
          <h2 className="nombre">Gian Ruiz</h2>
          <div className="profile-image">
            <img src={perfil} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
