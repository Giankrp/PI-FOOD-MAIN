import { NavLink } from "react-router-dom";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

const Nav = ({ handleClick }) => {
  return (

    <div className="nav-container">
      <NavLink to="/recipe">
        <button className="nav-button">Create Recipe</button>
      </NavLink>
      <SearchBar/>
      <button onClick={(event)=> handleClick(event)} className="nav-button">
        All Recipes
      </button>
    </div>
  );
};

export default Nav;
