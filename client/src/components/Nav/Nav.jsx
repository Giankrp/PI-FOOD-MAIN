import { NavLink } from "react-router-dom"
import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./Nav.css"

const Nav = ({ handleClick }) => {
  return (
    <div className="nav-container">
      <NavLink to="/recipes">
        <button className="nav-button">Create Recipe</button>
        <SearchBar />
        <button onClick={(event) => handleClick(event)}>All Recipes</button>
      </NavLink>
    </div>
  );
};

export default Nav