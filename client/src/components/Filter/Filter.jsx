import React from "react"
import { filterByDiet, filter, sortByName, sortByPuntuation } from "../../redux/actions"
import { useDispatch } from "react-redux"
import  dietImages  from "./DietImages"
import "./Filter.css"


const Filter = ({ setOrden, setCurrentPage }) => {
    const dispatch = useDispatch();

    const handleFilter = (event) => {
        dispatch(filter(event.target.value));
    };

    const handleFilterByDiet = (event) => {
        dispatch(filterByDiet(event.target.value));
    };

    const handleSortByName = (event) => {
        dispatch(sortByName(event.target.value));

        setCurrentPage(1);

        setOrden(`Ordenado ${event.target.value}`);
    };

    const handleSortByPuntuation = (event) => {
        event.preventDefault();

        dispatch(sortByPuntuation(event.target.value));

        setCurrentPage(1);

        setOrden(`Ordenado ${event.target.value}`);
    };

  return (
    <div className="main-container">
      <div className="bar-promo">
        <h4>Hecha un vistazo a todas las recetas que tenemos para ti</h4>
        <button className="btn-promo">¡Regístrate!</button>
        <span>Terminos y condiciones</span>
      </div>
      <div className="filter-item-img">
        <label htmlFor="filter-diet-select-img"></label>
        <div className="diet-images">
          {Object.entries(dietImages).map(([diet, image]) => (
            <div
              key={diet}
              className="diet-image"
              onClick={() => handleFilterByDiet({ target: { value: diet } })}
            >
              <img src={image} alt={diet} />
              <span>{diet}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-item uno">
          <label htmlFor="puntuation-select">Puntuation:</label>
          <select
            id="puntuation-select"
            className="filter-select"
            onChange={(event) => handleSortByPuntuation(event)}
          >
            <option value="All">All puntuations</option>
            <option value="menorMayor">from minor to major</option>
            <option value="mayorMenor">from major to minor</option>
          </select>
        </div>

        <div className="filter-item dos">
          <label htmlFor="filter-select">Filter by creation:</label>
          <select
            id="filter-select"
            className="filter-select"
            onChange={(event) => handleFilter(event)}
          >
            <option value="All">All recipes</option>
            <option value="created">Your recipes</option>
            <option value="api">Existing recipes</option>
          </select>
        </div>

        <div className="filter-item tres">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            className="filter-select"
            onChange={(event) => handleSortByName(event)}
          >
            <option value="asc">Upward (A-Z)</option>
            <option value="des">Falling (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter