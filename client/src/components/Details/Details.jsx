import React, { useEffect, useState } from "react";
import { getRecipesById, deleteRecipe } from "../../redux/actions";
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
      <div className="left-details">
        <div className="button">
          <NavLink to={"/home"}>
            <button type="button" class="btn-secondary">
              Back
            </button>
          </NavLink>
          <button className="delete-button" onClick={handleSubmit}>
            Delete Recipe
          </button>
        </div>
        <img
          src={
            data.image ||
            "`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5A4cM9lx9CVbaN89X1Qu8xxc3rVY_veWIw&usqp=CAU"
          }
          alt={data.name}
          className="details-image"
        />
      </div>

      <div>
        <h2 className="details-name">{data.name}</h2>
        <h3 className="details-healthScore">HealthScore:{data.healthScore}</h3>
        <h3 className="details-diet">
          Diets
          <ul className="details-list">
            {data.diets.map((type, index) => (
              <li key={index} className="details-items">
                {type}
              </li>
            ))}
          </ul>
        </h3>
        <hr />
        <h5 className="details-summary">
          Summary
          <h4>{data.summary.replace(/(<([^>]+)>)/gi, "")}</h4>
        </h5>
        <div className="details-steps">
          <h5>Steps:</h5>
          <ol className="steps-list">
            {Array.isArray(data.process)
              ? data.process.map((element, index) =>
                  element.steps.map((fun, index2) => (
                    <li key={`${index}-${index2}`} className="steps-item">
                      {fun.step}
                    </li>
                  ))
                )
              : data.process.split("|").map((step, index3) => (
                  <li key={index3} className="steps-item">
                    {step}
                  </li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
};


export default Details