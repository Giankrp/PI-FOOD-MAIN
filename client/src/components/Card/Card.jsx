import React, { useEffect } from "react";
//import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ name, image, typeDiets, id, diets }) => {
  useEffect(() => {}, []);

  return (
    <div className="tarjeta">
     
        <div className="ContainerCard">
          <div className="card">
            <div className="imgStore">
              <img
                src={
                  image ||
                  `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5A4cM9lx9CVbaN89X1Qu8xxc3rVY_veWIw&usqp=CAU`
                }
                alt={name}
              />
              <div className="contentcard">
                <h4>{name}</h4>
                {diets && (
                  <div className="typeDiets">
                    <h5>Diets:</h5>
                    <ul className="ulDiets">
                      <span>
                        {diets.map((diet, index) =>
                          index !== diets.length - 1 ? `${diet}, ` : diet
                        )}
                      </span>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default Card;
