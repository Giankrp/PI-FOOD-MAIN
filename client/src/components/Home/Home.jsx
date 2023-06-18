import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate"
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
//import Expecting from "../Expecting/Expecting"
import { getRecipes } from "../../redux/actions";
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getRecipes());
    };

    const allRecipes = useSelector((state) => state.recipes);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(
        indexOfFirstRecipe,
        indexOfLastRecipe
    );
    const [orden, setOrden] = useState("");

    const paginate = (pageNum) => {
        setCurrentPage(pageNum);
    };

  // if(isLoading){
  //     return (
  //         <div>
  //             <video src=""></video>
  //         </div>
  //     )
  // }

  return (
    <div className="HomeAll">
      <div className="container-home">
        <Nav handleClick={handleClick} />

        <Filter
          setCurrentPage={setCurrentPage}
          setOrden={setOrden}
          orden={orden}
        />

        <div className="title">
          <h1 className="page-title">Project food</h1>
        </div>

        <div className="paginado">
          <Paginate
            key="paginado"
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>

        <div className="row">
          {currentRecipes.map((element) => (
            <NavLink to={"/detail/" + element.id} key={element.id}>
            <Card
              name={element.name}
              image={element.image}
              diets={element.diets}
              typeDiets={element.typeDiets}
            />
            </NavLink>
          ))}
        </div>

        <div className="paginado">
          <Paginate
            key="paginado"
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>

        <Footer/>
        
      </div>
    </div>
  );
};

export default Home