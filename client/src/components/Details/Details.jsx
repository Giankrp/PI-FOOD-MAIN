import React, { useEffect, useState } from "react";
import { getRecipesById, deleteRecipe, deleteRecipesDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state) => state.data);
  const { idRecipes } = useParams();
  const [fromApi, setFromApi] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    dispatch(getRecipesById(idRecipes));
    return ()=>{
      dispatch(deleteRecipesDetail)
    }
  }, [dispatch, idRecipes]);



  useEffect(() => {
    if (data && data.fromApi) {
      setFromApi(true);
    }
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fromApi) {
      alert("This recipe cannot be deleted");
    } else {
      dispatch(deleteRecipe(idRecipes))
        .then(() => {
          alert("Recipe deleted successfully");
        })
        .catch(() => {
          alert("This recipe cannot be deleted");
        });
    }
  };

  // if(isLoading){
  //     return
  // }

  return (
    <div className="details-container">
      <div className="container-left-details">
        <div className="container-buttons">
          <NavLink to="/home">
            <button type="button" className="btn-secondary-details-button">
              Back
            </button>
          </NavLink>
          <button className="button-eliminar btn btn-danger details-button" onClick={handleSubmit}>
            Delete Recipe
          </button>
        </div>
        <img
          src={data.image}
          alt={"loanding..."}
          className="details-image"
        />
      </div>

      <div className="details-info">
        <h2 className="details-name">{data.name}</h2>
        <h3 className="details-healthscore">HealthScore: {data.healthScore}</h3>
        <h3 className="details-type-diet">
          Diets
          <ul className="details-diet-list">
            {data.diets && data.diets.map((type, index) => (
              <li key={index} className="details-diet-item">
                {type}
              </li>
            ))}
          </ul>
        </h3>
        <hr />
        <h5 className="details-summary">
          Summary
          <p className="details-summary-text">{data.summary && data.summary.replace(/(<([^>]+)>)/gi, "")}</p>
        </h5>
        <div className="details-steps">
          <h5>Steps:</h5>
          <ol className="details-steps-list">
            {Array.isArray(data.process)
              ? data.process.map((element, index) =>
                  element.steps.map((fun, index2) => (
                    <li key={`${index}-${index2}`} className="details-step-item">
                      {fun.step}
                    </li>
                  ))
                )
              : data.process && data.process.split("|").map((step, index3) => (
                  <li key={index3} className="details-step-item">
                    {step}
                  </li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Details;