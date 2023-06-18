import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== "") {
            dispatch(getRecipesByName(name));
        }
    };

  return (
    <div className="searchBar-container">
      <input
        type="text"
        className="searchBar-input"
        placeholder="Buscar"
        onChange={(event) => handleInputChange(event)}
      />
      <button
        className="searchBar-button"
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
